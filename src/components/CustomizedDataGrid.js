import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { Button, Stack } from "@mui/material";

// Function to update status (approve/decline)
const handleStatusChange = async (id, newStatus, setRows) => {
  try {
    await axios.patch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/artisans/${id}`,
      {
        status: newStatus,
      }
    );

    // Update state immutably
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, status: newStatus } : row
      )
    );
  } catch (error) {
    console.error("Error updating status:", error);
  }
};

// Define columns for the data grid
const createColumns = (setRows) => [
  { field: "id", headerName: "ID", width: 50 },
  { field: "fullName", headerName: "Name", width: 200 },
  {
    field: "status",
    headerName: "Status",
    width: 120,
    renderCell: (params) => {
      let displayText;
      let color;

      if (params.value === "approved") {
        displayText = "Online";
        color = "green";
      } else if (params.value === "declined") {
        displayText = "Offline";
        color = "red";
      } else {
        displayText = "Pending";
        color = "gray";
      }

      return <span style={{ color, fontWeight: "bold" }}>{displayText}</span>;
    },
  },
  { field: "phone", headerName: "Phone", width: 150 },
  { field: "state", headerName: "State", width: 100 },
  { field: "city", headerName: "City", width: 150 },
  { field: "specialty", headerName: "Specialty", width: 150 },
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => (
      <Stack direction="row" spacing={1}>
        {params.row.status !== "approved" && (
          <Button
            variant="contained"
            color="success"
            size="small"
            onClick={() =>
              handleStatusChange(params.row.id, "approved", setRows)
            }>
            Activate
          </Button>
        )}
        {params.row.status !== "declined" && (
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={() =>
              handleStatusChange(params.row.id, "declined", setRows)
            }>
            Deactivate
          </Button>
        )}
      </Stack>
    ),
  },
];

export default function CustomizedDataGrid() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchArtisans = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/artisans`
        );

        const formattedData = response.data.map((artisan, index) => ({
          id: artisan._id,
          fullName: artisan.fullName,
          status: artisan.status || "pending",
          phone: artisan.phone,
          state: artisan.state,
          city: artisan.city,
          specialty: artisan.specialty,
        }));

        setRows(formattedData);
      } catch (error) {
        console.error("Error fetching artisans:", error);
      }
    };

    if (typeof window !== "undefined") {
      fetchArtisans();
    }
  }, []);

  return (
    <DataGrid
      rows={rows}
      columns={createColumns(setRows)}
      pageSizeOptions={[10, 20, 50, 100]}
      disableColumnReorder
      density="compact"
    />
  );
}
