import React, { useState } from "react";
import { Container } from "@mui/material";
import app_config from "../../config";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const ShoppingCart = () => {
  const [cartData, setCartData] = useState(
    JSON.parse(sessionStorage.getItem("cart"))
  );
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  console.log(cartData);
  const url = app_config.backend_url;
  const navigate = useNavigate();

  const placeOrder = () => {
    fetch(url + "/order/add", {
      method: "POST",
      body: JSON.stringify({
        user: currentUser._id,
        cart: cartData,
        createdAt: new Date(),
      }),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.status === 200) {
        console.log("success");
        Swal.fire({
          icon: "success",
          title: "Order Placed Successfully",
        });
        navigate("/main/floristlist");
      }
    });
  };

  const removeItem = (id) => {
    const newData = cartData.filter(({ item }) => item._id !== id);
    console.log(newData);
    setCartData([...newData]);
    setTimeout(() => {
      sessionStorage.setItem("cart", JSON.stringify(cartData));
      toast.success("Removed❌ from 🛒Cart");
    }, 300);
  };

  const displayCart = () => {
    console.log(cartData);
    if (cartData === null) return <p></p>;
    return cartData.map(({ item, qty, shopName }) => (
      <tr>
        <td class="col-sm-8 col-md-6">
          <div class="media">
            <a class="thumbnail pull-left" href="/">
              {" "}
              <img
                class="media-object"
                src={url + "/uploads/" + item.image}
                alt="Flower"
                style={{ width: "72px", height: "72px" }}
              />{" "}
            </a>
            <div class="media-body">
              <h4 class="media-heading">{item.name}</h4>
              <h5 class="media-heading">by {shopName}</h5>
              <span>Status: </span>
              <span class="text-success">
                <strong>In Stock</strong>
              </span>
            </div>
          </div>
        </td>

        <td class="col-sm-1 col-md-1" style={{ textAlign: "center" }}>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            value="1"
          />
        </td>
        <td class="col-sm-1 col-md-1 text-center">
          <strong>{item.price_per_kg}</strong>
        </td>
        <td class="col-sm-1 col-md-1">
          <button
            type="button"
            class="btn btn-danger"
            onClick={(e) => removeItem(item._id)}
          >
            <span class="fa fa-remove"></span> Remove
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <Container>
      <div class="col-sm-12 col-md-10 col-md-offset-1">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th class="text-center">Price</th>
              <th class="text-center">Total</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>{displayCart()}</tbody>
          <button
            onClick={placeOrder}
            className="btn btn-danger btn-lg float-end"
          >
            Place Order
          </button>
        </table>
      </div>
    </Container>
  );
};

export default ShoppingCart;
