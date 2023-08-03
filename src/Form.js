import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import moment from "moment";

const FormComponent = ({ addUserData }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    gender: "male",
    state: "tamilnadu",
    city: "madurai",
  });

  const [cityOptions, setCityOptions] = useState([]);
  const [errors, setErrors] = useState({});
  const [serialNumber, setSerialNumber] = useState(0);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      const userData = {
        serialNumber: serialNumber + 3,
        ...formData,
        time: moment().format("h:mm A"),
        date: moment().format("DD-MM-YYYY"),
      };
      addUserData(userData);
      setSerialNumber((prevSerialNumber) => prevSerialNumber + 1);
      setFormData({
        ...formData,
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
        gender: "male",
        state: "tamilnadu",
        city: "madurai",
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    // Validate First Name
    if (!formData.firstName.length) {
      errors.firstName = "First Name is required";
      isValid = false;
    } else if (formData.firstName.length < 5) {
      errors.firstName = "Minimum 5 characters required";
      isValid = false;
    }

    // Validate Last Name
    if (!formData.lastName.length) {
      errors.lastName = "Last Name is required";
      isValid = false;
    }

    // Validate Email
    if (!formData.email.length) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Invalid Email";
      isValid = false;
    }

    // Validate Password
    const hasUppercase = /[A-Z]/.test(formData.password);
    const hasLowercase = /[a-z]/.test(formData.password);
    const hasSymbol = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(
      formData.password
    );
    const hasNumber = /\d/.test(formData.password);

    if (!formData.password.length) {
      errors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
      isValid = false;
    } else if (!(hasUppercase && hasLowercase && hasSymbol && hasNumber)) {
      errors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, one symbol, and one number";
      isValid = false;
    }

    // Validate Phone Number
    if (!formData.phoneNumber.length) {
      errors.phoneNumber = "Phone Number is required";
      isValid = false;
    } else if (formData.phoneNumber.length < 10) {
      errors.phoneNumber = "Phone Number must be 10 characters long";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInput = (event) => {
    const input = event.target;
    const numericValue = input.value.replace(/\D/g, "");
    setFormData((prevData) => ({
      ...prevData,
      phoneNumber: numericValue,
    }));
  };

  useEffect(() => {
    if (formData.state === "tamilnadu") {
      setCityOptions([
        { value: "madurai", label: "Madurai" },
        { value: "chennai", label: "Chennai" },
        { value: "coimbatore", label: "Coimbatore" },
      ]);
    } else if (formData.state === "kerala") {
      setCityOptions([
        { value: "kochi", label: "Kochi" },
        { value: "trivandrum", label: "Trivandrum" },
        { value: "kottayam", label: "Kottayam" },
      ]);
    } else if (formData.state === "karnataka") {
      setCityOptions([
        { value: "bangalore", label: "Bangalore" },
        { value: "mysore", label: "Mysore" },
        { value: "mangalore", label: "Mangalore" },
      ]);
    } else {
      setCityOptions([]);
    }
  }, [formData.state]);

  return (
    <Container>
      {/* <Box mt={4}>
        <Typography variant="h4" align="center">
          Personal Details
        </Typography>
      </Box> */}

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              error={!!errors.firstName}
              helperText={errors.firstName}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              error={!!errors.lastName}
              helperText={errors.lastName}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onInput={handleInput}
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Gender</InputLabel>
              <Select
                label="Gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>State</InputLabel>
              <Select
                label="State"
                name="state"
                value={formData.state}
                onChange={handleChange}
              >
                <MenuItem value="tamilnadu">Tamilnadu</MenuItem>
                <MenuItem value="kerala">Kerala</MenuItem>
                <MenuItem value="karnataka">Karnataka</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {cityOptions.length > 0 && (
            <Grid item xs={12} md={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>City</InputLabel>
                <Select
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                >
                  {cityOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          )}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default FormComponent;
