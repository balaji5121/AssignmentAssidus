import { Box, Button, styled, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";

const StyledBox = styled(Box)({
  height: "100vh",
  backgroundColor: "#e6e6e6",
  paddingLeft: "20px",
  paddingRight: "20px",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
});

export default function Form() {
  const history = useHistory();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    phoneNumber: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // const condition1 =
    //   userInfo.email === "" ||
    //   userInfo.password === "" ||
    //   userInfo.confirmPassword === "" ||
    //   userInfo.fullName === "" ||
    //   userInfo.phoneNumber === "";
    // const condition2 = userInfo.password === userInfo.confirmPassword;
    // console.log(!condition1 && condition2);
    // if (!condition1 && condition2) {
    history.replace("/chart");
    // }
  };

  return (
    <StyledBox flex={2}>
      <Typography variant="h5" color="primary" gutterBottom>
        Create a New Account
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          // required
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
          type="email"
          sx={{ marginBottom: "10px", marginTop: "10px" }}
          label="Email"
          variant="outlined"
          fullWidth
        />
        <TextField
          // required
          onChange={(e) =>
            setUserInfo({ ...userInfo, password: e.target.value })
          }
          type="password"
          sx={{ marginBottom: "10px", marginTop: "10px" }}
          label="Password"
          variant="outlined"
          fullWidth
        />
        <TextField
          // required
          onChange={(e) =>
            setUserInfo({ ...userInfo, confirmPassword: e.target.value })
          }
          type="password"
          sx={{ marginBottom: "10px", marginTop: "10px" }}
          label="Confirm Password"
          variant="outlined"
          fullWidth
        />
        <TextField
          // required
          onChange={(e) =>
            setUserInfo({ ...userInfo, fullName: e.target.value })
          }
          type="text"
          sx={{ marginBottom: "10px", marginTop: "10px" }}
          label="Full Name"
          variant="outlined"
          fullWidth
        />
        <TextField
          // required
          onChange={(e) =>
            setUserInfo({ ...userInfo, phoneNumber: e.target.value })
          }
          type="text"
          sx={{ marginBottom: "10px", marginTop: "10px" }}
          label="Phone"
          variant="outlined"
        />
        <br />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </StyledBox>
  );
}
