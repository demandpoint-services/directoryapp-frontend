"use client";

import React, { useState, useEffect } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import axios from "axios";

// Styled text for pie chart labels
const StyledText = styled("text")(({ theme }) => ({
  textAnchor: "middle",
  dominantBaseline: "central",
  fill: (theme.vars || theme).palette.text.secondary,
}));

function PieCenterLabel({ primaryText, secondaryText }) {
  return (
    <>
      <StyledText variant="primary" x="50%" y="45%">
        {primaryText}
      </StyledText>
      <StyledText variant="secondary" x="50%" y="60%">
        {secondaryText}
      </StyledText>
    </>
  );
}

export default function ChartUserByState() {
  const [chartData, setChartData] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const fetchUsersByState = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/artisans`
        );

        // Group users by state
        const stateCount = response.data.reduce((acc, user) => {
          acc[user.state] = (acc[user.state] || 0) + 1;
          return acc;
        }, {});

        // Convert data into format for PieChart and sort in descending order
        const formattedData = Object.entries(stateCount)
          .map(([state, count]) => ({
            label: state,
            value: count,
          }))
          .sort((a, b) => b.value - a.value); // Sort by value (descending)

        setChartData(formattedData);
        setTotalUsers(response.data.length);
      } catch (error) {
        console.error("Error fetching users by state:", error);
      }
    };

    fetchUsersByState();
  }, []);

  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        flexGrow: 1,
      }}>
      <CardContent>
        <Typography component="h2" variant="subtitle2">
          Users by State
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <PieChart
            colors={["#4caf50", "#2196f3", "#ff9800", "#f44336", "#9c27b0"]}
            margin={{ left: 80, right: 80, top: 80, bottom: 80 }}
            series={[
              {
                data: chartData,
                innerRadius: 75,
                outerRadius: 100,
                paddingAngle: 0,
                highlightScope: { faded: "global", highlighted: "item" },
              },
            ]}
            height={260}
            width={260}
            slotProps={{
              legend: { hidden: true },
            }}>
            <PieCenterLabel
              primaryText={totalUsers}
              secondaryText="Total Users"
            />
          </PieChart>
        </Box>
        {chartData.map((state, index) => (
          <Stack
            key={index}
            direction="row"
            sx={{ alignItems: "center", gap: 2, pb: 2 }}>
            <Stack sx={{ gap: 1, flexGrow: 1 }}>
              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 2,
                }}>
                <Typography variant="body2" sx={{ fontWeight: "500" }}>
                  {state.label}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {((state.value / totalUsers) * 100).toFixed(1)}%
                </Typography>
              </Stack>
              <LinearProgress
                variant="determinate"
                value={(state.value / totalUsers) * 100}
                sx={{
                  [`& .${linearProgressClasses.bar}`]: {
                    backgroundColor: [
                      "#4caf50",
                      "#2196f3",
                      "#ff9800",
                      "#f44336",
                      "#9c27b0",
                    ][index % 5],
                  },
                }}
              />
            </Stack>
          </Stack>
        ))}
      </CardContent>
    </Card>
  );
}
