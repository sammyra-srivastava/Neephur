import { Container,  TextField, Button, Grid } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { Formik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";

import React from "react";

const ContactUs = () => {
  const contactupStyles = {
    background: "url(https://wallpaperaccess.com/full/1223823.jpg)",
    height: "100%",
  };

  const url = app_config.backend_url;

  //   1. Create the form object

  const userForm = {
    name: "",
    email: "",
    mobile:"",
    subject: "",
    message: "",
  };

  
 
  const feedbackSubmit = (formdata) => {
    console.log(formdata);

   
    // asynchronous function returns promise
    fetch(url + "/contact/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log(res.status);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Message Successfully Sent!!",
        });
      });
  };

 
  const formBody = ({ values, handleSubmit, handleChange }) => {
  return (
    <Container >
    <div class="mb-4 " >
      <p class=" font-weight-bold text-center my-4" style={{letterSpacing:"3px", color:"purple", fontSize:"70px", fontWeight:"200px", fontFamily:"'Calligraffitti', cursive"}} >
        Get in Touch
      </p>

      <p class="text-center w-responsive mx-auto mb-5" style={{letterSpacing:"3px",fontFamily:"Tapestry", color:"red", fontSize:"20px", fontWeight:"200px"}}>
        Do you have any questions? Please do not hesitate to contact us
        directly. Our team will come back to you within a matter of hours to
        help you.
      </p>

      <div class="row">
        <div class="col-md-9 mb-md-0 mb-5">

          <form onSubmit={handleSubmit}>
            <Stack direction="row" spacing={5}>
                <TextField
                  className="w-50 "
                    type="text"
                    id="name"
                    label="Your Name"
                   varient="outlined"
                   onChange={handleChange}
                   value={values.name}/>
            
                  <TextField
                  className="w-50 "
                    type="email"
                    id="email"
                    label="Your Email"
                   varient="outlined" 
                   onChange={handleChange}
                   value={values.email}/>
              </Stack>
              <Stack direction="column" spacing={3} >
              <TextField
                  sx={{mt:3}}
                  className="w-100 "
                    type="number"
                    id="mobile"
                    label="Your Contact No"
                   varient="outlined"
                   onChange={handleChange}
                   value={values.mobile}/>
              <TextField
                  className="w-100 "
                    type="text"
                    id="subject"
                    label="Subject"
                   varient="outlined"
                   onChange={handleChange}
                   value={values.subject}/>
              <TextField
                  className="w-100 "
                    type="text"
                    id="message"
                    label="Your Message"
                    multiline
                    rows={2}
                   varient="outlined"
                   onChange={handleChange}
                   value={values.message}/>
                   </Stack>            
             
          <Stack sx={{mt:5}}>
        <Button 
        variant="contained" 
        color="secondary" 
        size="large" 
        endIcon={<SendIcon />}>
        Send
        </Button>
        </Stack>
          </form>

        </div>

        <div class="col-md-3 text-center">
          <ul class="list-unstyled mb-0">
            <li>
           
            <Grid item xl={15}>
            <LocationOnIcon sx={{ fontSize: 45 }} color="secondary"/>
           </Grid>
           <Grid item xl={15} sx={{mb:2}}>
           <Button variant="text" color="inherit" href="#contained-buttons">
           IIM Road Lucknow
           </Button>
           </Grid>
            </li>

            <li>
            <Grid item xl={15}>
            <CallIcon sx={{ fontSize: 45 }} color="secondary"/>
           </Grid>
           <Grid item xl={15} sx={{mb:2}} >
           <Button variant="text" color="inherit" href="#contained-buttons">
           +917460867265
           </Button>
           </Grid>
           </li>

            <li>
            <Grid item xl={15}>
            <EmailIcon sx={{ fontSize: 45 }} color="secondary"/>
           </Grid>
           <Grid item xl={15} sx={{mb:2}}>
           <Button variant="text" color="inherit" href="#contained-buttons">
           neepur@gmail.com
           </Button>
           </Grid>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </Container>

   
  );
};
     return (
   
      <Formik initialValues={userForm} onSubmit={feedbackSubmit}>
        {formBody}
      </Formik>
  );
};

export default ContactUs;
