import React from 'react'
import {useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';




const Footer = () => {
  const navigate = useNavigate();
  return (
  <footer className="bg-dark text-center text-white" style={{backgroundColor: "#caced1"}} >
  
  <div className="container p-4">
   
    <section >
      <div className="row">
        
        <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
          <div
            className="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img
              src="https://images.unsplash.com/photo-1554019181-990b0ef6a44f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHJvc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt=""
              className="w-100"
            />
            <a href="#!">
              <div
                className="mask"
                style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}} ></div>
            </a>
          </div>
        </div>
       
        <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
          <div
            className="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img
              src="https://images.unsplash.com/flagged/photo-1555215241-9612144143ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHR1bGlwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=''
              className="w-100"
            />
            <a href="#!">
              <div
                className="mask"
                style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}
              ></div>
            </a>
          </div>
        </div>
        <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
          <div
            className="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img
              src="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt=''
              className="w-100"
            />
            <a href="#!">
              <div
                className="mask"
                style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}
              ></div>
            </a>
          </div>
        </div>
        <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
          <div
            className="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img
              src="https://images.unsplash.com/photo-1628268891244-88936ac667fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bGlsbHklMjBmbG93ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt=''
              className="w-100"
            />
            <a href="#!">
              <div
                className="mask"
                style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}
              ></div>
            </a>
          </div>
        </div>
        <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
          <div
            className="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img
              src="https://images.unsplash.com/photo-1624466548064-b98215a03cf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG9yY2hpZCUyMGZsb3dlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=''
              className="w-100"
            />
            <a href="#!">
              <div
                className="mask"
                style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}
              ></div>
            </a>
          </div>
        </div>
        <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
          <div
            className="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img
              src="https://images.unsplash.com/photo-1538998073820-4dfa76300194?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGxpbGx5JTIwZmxvd2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=''
              className="w-100"
            />
            <a href="#!">
              <div
                className="mask"
                style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}
              ></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  
  </div>
  
  
 
 
  
  
  <div className="text-center p-1" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    
  <Grid spacing={1} style={{margin:"auto"}}>
      <IconButton aria-label="Instagram"onClick={(e) => navigate("")} size="large" style={{cursor:"pointer", color:"white"}}>
        < InstagramIcon />
      </IconButton>
      <IconButton aria-label="facebook" onClick={(e) => navigate("")} size="large" style={{cursor:"pointer" ,color:"white"}}>
        < FacebookOutlinedIcon/>
      </IconButton>
      <IconButton aria-label="Instagram"onClick={(e) => navigate("")} size="large" style={{cursor:"pointer", color:"white"}}>
        < GoogleIcon />
      </IconButton>
  </Grid>
  
  
    © 2022 Copyright:
    <a className="text-white" href="https://mdbootstrap.com/">Neephur</a>
   
  </div>
  
</footer>
  )
}
export default Footer;
