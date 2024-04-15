import { Button, InputAdornment, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import app_config from "../../config";
import { Search } from "@mui/icons-material";

const FloristList = () => {
  const url = app_config.backend_url;

  const [floristArray, setFloristArray] = useState([]);

  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");

  const fetchFlorist = () => {
    fetch(url + "/florist/getall/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setFloristArray(data);
      });
  };

  useEffect(() => {
    fetchFlorist();
  }, []);

  const navigate = useNavigate();

  const displayData = () => {
    if (!loading) {
      return floristArray.map(
        ({ _id, shopName, mobile, email, address, timings, image }) => (
          <div class="col-md-12 col-xl-10">
            <div class="card mt-5 shadow-0 border rounded-3">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                    <div class="bg-image hover-zoom ripple rounded ripple-surface">
                      <img
                        src={url + "/uploads/" + image}
                        class="w-100"
                        alt=""
                      />
                      <a href="#!">
                        <div class="hover-overlay">
                          <div
                            class="mask"
                            style={{
                              backgroundColor: "rgba(253, 253, 253, 0.15)",
                            }}
                          ></div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-6 col-xl-6">
                    <h5>{shopName}</h5>
                    <div class="d-flex flex-row">
                      <div class="text-danger mb-1 me-2">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                      </div>
                      <span>
                        {Math.floor(Math.random() * (400 - 50 + 1) + 50)}
                      </span>
                    </div>
                    <div class="mt-1 mb-0 text-muted small">{mobile}</div>
                    <div class="mb-2 text-muted small">{email}</div>
                    <p class="text-truncate mb-4 mb-md-0">{address}</p>
                  </div>
                  <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                    <div class="d-flex flex-row align-items-center mb-1">
                      <h4 class="mb-1 me-1">WholeSale</h4>
                    </div>
                    <h6 class="text-success">Free shipping</h6>
                    <div class="d-flex flex-column mt-4">
                      <button class="btn btn-primary btn-sm" type="button">
                        Details
                      </button>
                      <button
                        class="btn btn-outline-primary btn-sm mt-2"
                        type="button"
                        onClick={(e) =>
                          navigate("/main/browsebyflorist/" + _id)
                        }
                      >
                        Browse Flowers
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      );
    }
  };

  const filternews = () => {};

  return (
    <div>
      <header className="current-back">
        <Typography className="text-center text-white" variant="h5">
          Neephur
        </Typography>
        <Typography className="text-center text-white" variant="h2">
          Explore Florists Around You
        </Typography>

        <div className="input-group mt-5">
          <input
            className="form-control"
            value={filter}
            label="Search Here"
            onChange={(e) => setFilter(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: "active.active", mr: 1, my: 0.5 }} />
                </InputAdornment>
              ),
            }}
          />
          <Button variant="contained" onClick={filternews} type="submit">
            Search
          </Button>
        </div>
      </header>

      <div className="contained-fluid mt-8">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-10">{displayData()}</div>
        </div>
      </div>
    </div>
  );
};

export default FloristList;
