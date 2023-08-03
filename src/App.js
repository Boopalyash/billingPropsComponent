import React, { useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import FormComponent from "./Form";
import TableComponent from "./Table";
import moment from "moment";

const App = () => {
  const [consoleOutput, setConsoleOutput] = useState([
    {
      serialNumber: 1,
      firstName: "Sachin",
      lastName: "Tendulkar",
      email: "sachin@tendulkar.com",
      phoneNumber: "1234567890",
      time: moment().format("h:mm A"),
      date: moment().format("DD-MM-YYYY"),
    },
    {
      serialNumber: 2,
      firstName: "Virat",
      lastName: "Kohli",
      email: "virat@kohli.com",
      phoneNumber: "9876543210",
      time: moment().format("h:mm A"),
      date: moment().format("DD-MM-YYYY"),
    },
  ]);
  const [showForm, setShowForm] = useState(false);

  const addUserData = (userData) => {
    setConsoleOutput((prevOutput) => [...prevOutput, userData]);
    setShowForm(false);
  };

  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" align="center">
          Personal Details
        </Typography>
      </Box>

      {/* Add Button */}
      <Box mt={2} mb={2} display="flex" justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          onClick={() => setShowForm(true)}
        >
          Add
        </Button>
      </Box>

      {/* Form Component */}
      {showForm && <FormComponent addUserData={addUserData} />}

      {/* Table Component */}
      <TableComponent consoleOutput={consoleOutput} />
    </Container>
  );
};

export default App;
