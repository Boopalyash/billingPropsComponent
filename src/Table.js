import React from "react";
import {
  Box,
  Container,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const TableComponent = ({ consoleOutput }) => {
  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h6">Output:</Typography>
        <TableContainer component={Paper} style={tableContainerStyle}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={tableCellStyle}>Serial Number</TableCell>
                <TableCell style={tableCellStyle}>First Name</TableCell>
                <TableCell style={tableCellStyle}>Last Name</TableCell>
                <TableCell style={tableCellStyle}>Email</TableCell>
                <TableCell style={tableCellStyle}>Phone Number</TableCell>
                <TableCell style={tableCellStyle}>Date</TableCell>
                <TableCell style={tableCellStyle}>Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {consoleOutput.map((userData, index) => (
                <TableRow key={index}>
                  <TableCell style={tableCellStyleNumber}>
                    {userData.serialNumber}
                  </TableCell>
                  <TableCell style={tableCellStyle1}>
                    {userData.firstName}
                  </TableCell>
                  <TableCell style={tableCellStyle1}>
                    {userData.lastName}
                  </TableCell>
                  <TableCell style={tableCellStyle1}>
                    {userData.email}
                  </TableCell>
                  <TableCell style={tableCellStyle1}>
                    {userData.phoneNumber}
                  </TableCell>
                  <TableCell style={tableCellStyle1}>{userData.date}</TableCell>
                  <TableCell style={tableCellStyle1}>{userData.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

const tableContainerStyle = {
  background: "linear-gradient(to top, #f2f2f2, #e0e0e0)",
  padding: "10px",
};
const tableCellStyle = {
  fontSize: "14px",
  fontWeight: "bold",
};
const tableCellStyle1 = {
  fontSize: "14px",
  color: "red",
};
const tableCellStyleNumber = {
  fontSize: "14px",
  color: "blue",
};

export default TableComponent;
