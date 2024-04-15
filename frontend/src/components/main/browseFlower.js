import React, { useEffect, useState } from "react";
import { Button, Container, Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import app_config from "../../config";
import { useNavigate } from "react-router-dom";
const BrowseFlower = () => {
  const url = app_config.backend_url;

  const [flowerArray, setFlowerArray] = useState([]);

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchData = () => {
    fetch(url + "/flower/getall").then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setFlowerArray(data);
          setLoading(false);
        });
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayFlowers = () => {
    if (!loading) {
      return flowerArray.map(({ color, name }) => (
        <Container sx={{ mt: 8, mb: 8 }}>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div class="card h-100">
                <div
                  className="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="https://a.rgbimg.com/users/x/xy/xymonau/600/2dyVezH.jpg"
                    className="card-img-top"
                    alt="Lilly Flower"
                    style={{ cursor: "pointer" }}
                  />
                  <a href="#!">
                    <div
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    />
                  </a>
                </div>
                <div className="card-body">
                  <Box sx={{ mt: 1 }}>
                    <h4 className="card-title">White Lilly</h4>
                    <h6>Shop Name:</h6>
                    <h6>Timings:</h6>
                  </Box>
                  <Stack direction="row" spacing={7} sx={{ mt: 3 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      className="mt-2 mb-2 "
                      color="secondary"
                      size="large"
                    >
                      Buy Now
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      className="mt-2 mb-2 "
                      color="secondary"
                      size="large"
                    >
                      Add to Cart
                    </Button>
                  </Stack>
                </div>
              </div>
            </div>
          </div>
        </Container>
      ));
    }
  };

  return (
    <Container sx={{ mt: 8, mb: 8 }}>
      <div className="row row-cols-1 row-cols-md-3 g-4">{displayFlowers()}</div>
    </Container>
  );
};
const styles = {
  Container: {
    display: "flex",
  },
};

export default BrowseFlower;
