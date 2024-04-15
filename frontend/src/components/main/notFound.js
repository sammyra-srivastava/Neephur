import React from "react";
import { Container } from "@mui/material";
import app_config from "../../config";

const NotFound = () => {
  const url = app_config.backend_url;

  return (
    <div className="container">
      <img alt="" className="w-100" src={url + "/images/404.gif"} />
    </div>
  );
};

export default NotFound;
