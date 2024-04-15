import { Button, Container, Grid, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import { Formik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const AddFlower = ({ floristId }) => {
  const flowerStyles = {
    background: "url(https://wallpaperaccess.com/full/1223823.jpg)",
    height: "100%",
  };

  const url = app_config.backend_url;
  const [selImage, setSelImage] = useState("");

  //   1. Create the form object

  const addForm = {
    name: "",
    color: "",
    addedBy: floristId,
    price_per_kg: "",
    price_per_unit: "",
    image: "",
  };

  //   2. Create a submit function
  const formSubmit = (formdata) => {
    formdata.image = selImage;
    console.log(formdata);

    // 1. address
    // 2. request method
    // 3. data
    // 4. data format to send

    // asynchronous function returns promise
    fetch(url + "/flower/add", {
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
        // updateFlorist();
      });
  };

  const uploadImage = (e) => {
    const file = e.target.files[0];
    setSelImage(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        toast.success("Image Uploaded!!", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    });
  };

  const updateFlorist = (flowerId) => {
    fetch(url + "/florist/pushupdate/" + floristId, {
      method: "PUT",
      body: JSON.stringify({ flowers: flowerId }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        Swal.fire({
          title: "Sweet!",
          text: "Flower is added in your profile",
          imageUrl:
            "https://thumbs.dreamstime.com/b/beautiful-full-clear-pic-pink-gerbera-flower-morning-fresh-distinct-capture-172899046.jpg",
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image",
        });
      }
    });
  };

  const formBody = ({ values, handleSubmit, handleChange }) => {
    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div>
            <TextField
              className="w-50 mt-4"
              variant="outlined"
              label="Flower Name"
              type="text"
              id="name"
              onChange={handleChange}
              value={values.name}
            />
          </div>
          <div>
            <TextField
              className="w-50 mt-4"
              variant="outlined"
              label="Color"
              type="text"
              id="color"
              onChange={handleChange}
              value={values.color}
            />
          </div>
          <div>
            <TextField
              className="w-50 mt-4"
              variant="outlined"
              label="Price per Kg"
              type="Number"
              id="price_per_kg"
              onChange={handleChange}
              value={values.price_per_kg}
            />
          </div>
          <div>
            <TextField
              className="w-50 mt-4"
              variant="outlined"
              label="Price per unit"
              type="number"
              id="price_per_unit"
              onChange={handleChange}
              value={values.price_per_unit}
            />
          </div>

          <label>Upload Image</label>
          <input className="form-control" onChange={uploadImage} type="file" />

          <div>
            <Button
              type="submit"
              variant="contained"
              className="mt-5"
              color="success"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  };

  return (
    <Container>
      <Formik initialValues={addForm} onSubmit={formSubmit}>
        {formBody}
      </Formik>
    </Container>
  );
};

export default AddFlower;
