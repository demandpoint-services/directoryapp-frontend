import { Box, Tabs, Tab } from "@mui/material";
import PropTypes from "prop-types";

export default function SidebarTabs({ value, onChange, tabs }) {
  return (
    <Box
      sx={{
        borderRight: 1,
        borderColor: "divider",
        width: 250,
        minHeight: "100%",
        bgcolor: "background.paper",
      }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={onChange}
        aria-label="Dashboard tabs">
        {tabs.map((label, index) => (
          <Tab key={label} label={label} />
        ))}
      </Tabs>
    </Box>
  );
}

SidebarTabs.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  tabs: PropTypes.array.isRequired,
};
