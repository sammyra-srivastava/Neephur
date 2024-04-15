import { Button, Card, CardContent, Container, TextField } from "@mui/material";
import React from "react";
import { Formik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import Stack from "@mui/material/Stack";

const Signin = () => {
  const url = app_config.backend_url;
  const clientId =
    "707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com";

  const userForm = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const loginSubmit = (formdata) => {
    fetch(url + "/user/authenticate", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.status === 200) {
        Swal.fire({
          title: "Successfully Logged In!",
          icon: "success",
        });

        res.json().then((data) => {
          
          if (data.isAdmin) {
          sessionStorage.setItem("admin", JSON.stringify(data));
            navigate("/admin/addflorist");
            return;
          }else{
            sessionStorage.setItem("user", JSON.stringify(data));
            navigate("/main/home");
          }
        });
      } else if (res.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Oops!!",
          text: "Login Failed",
        });
      }
    });
  };

  const formBody = ({ values, handleSubmit, handleChange }) => {
    return (
      <Container>
        <Card
          style={{ borderRadius: 10, boxShadow: "4px 4px 4px 4px #89009c" }}
          sx={{ mt: 8, mb: 10 }}
        >
          <Box style={{ display: "flex", float: "left" }}>
            <img
              src="https://thumbs.dreamstime.com/b/florists-woman-her-flowers-shop-vector-illustration-florist-girl-flower-44402546.jpg"
              alt="cartoon"
            ></img>
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              borderRadius: 5,
              boxShadow: "2px 2px 2px 2px #fce6ff",
            }}
            sx={{ ml: 3, mr: 2, mt: 5 }}
          >
            <CardContent>
              <Box sx={{ mt: 2, ml: 13 }}>
                <h2>LOGIN</h2>
              </Box>
              <p>
                Doesn't have an account yet?{" "}
                <Button
                  variant="text"
                  onClick={(e) => navigate("/main/signup")}
                >
                  Sign Up
                </Button>
              </p>
              <form onSubmit={handleSubmit}>
                <div>
                  <h6>Email Address</h6>
                  <TextField
                    className="w-100 "
                    variant="standard"
                    type="email"
                    id="email"
                    onChange={handleChange}
                    value={values.email}
                  />
                </div>
                <br></br>
                <div>
                  <h6>Password</h6>
                  <TextField
                    className="w-100 "
                    variant="standard"
                    type="password"
                    id="password"
                    onChange={handleChange}
                    value={values.password}
                  />
                </div>
                <FormGroup sx={{ mt: 1 }}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Remember me"
                  />
                </FormGroup>
                <Box sx={{ ml: 12 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    className="mt-2 mb-2 "
                    color="secondary"
                    size="large"
                  >
                    Login
                  </Button>
                </Box>
                <hr></hr>
                <Stack direction="row" spacing={4} sx={{ mt: 3 }}>
                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={<GoogleIcon />}
                  >
                    Google
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    endIcon={<FacebookOutlinedIcon />}
                  >
                    Facebook
                  </Button>
                </Stack>
              </form>
            </CardContent>
          </Box>
        </Card>
      </Container>
    );
  };

  return (
    <Formik initialValues={userForm} onSubmit={loginSubmit}>
      {formBody}
    </Formik>
  );
};

export default Signin;
