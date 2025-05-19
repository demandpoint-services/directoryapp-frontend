import React from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const teamMembers = [
  {
    name: "Victor Ugonna Iroegbulem",
    position: "Chief Executive Officer (CEO)",
    image: "7.jpg",
  },
  {
    name: "Bar. Livinius N. Nwadinigwe",
    position: "Legal Adviser",
    image: "8.jpg",
  },
  {
    name: "Prudence Ifunanya Uwakwem",
    position: "Chief Marketing Mgr.",
    image: "9.jpg",
  },
  {
    name: "Bethel Chikadibia",
    position: "Finance Mgr.",
    image: "10.jpg",
  },
  {
    name: "Festus Daniel",
    position: "Chief Operating Officer",
    image: "11.jpg",
  },
  {
    name: "Augustine Ugwu",
    position: "Chief Technical Officer",
    image: "12.jpg",
  },
];

const Team = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 16 } }}>
      <Container>
        <Typography
          variant="h6"
          align="center"
          sx={{ fontFamily: "Bebas Neue", letterSpacing: 1.5, mb: 2 }}>
          Meet Our Team
        </Typography>

        <Typography
          variant="h3"
          align="center"
          sx={{ fontFamily: "Bebas Neue", mb: 2 }}>
          You're in Good Company
        </Typography>

        <Typography
          variant="body1"
          align="center"
          sx={{ mb: 6, px: { xs: 2, md: 24 }, color: "text.secondary" }}>
          Meet our amazing team, a group of dedicated individuals who bring
          unique skills and expertise to the table, working together to achieve
          our common goals and deliver exceptional results.
        </Typography>

        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                elevation={3}
                sx={{
                  textAlign: "center",
                  borderRadius: 2,
                  p: 2,
                  height: "100%",
                }}>
                <CardMedia
                  component="img"
                  image={member.image}
                  alt={member.name}
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    objectFit: "cover",
                    mx: "auto",
                    mb: 2,
                  }}
                />
                <CardContent>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontFamily: "Bebas Neue",
                      fontSize: "1.1rem",
                      color: "text.primary",
                    }}>
                    {member.name}
                  </Typography>
                  {/* <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {member.position}
                  </Typography> */}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Team;
