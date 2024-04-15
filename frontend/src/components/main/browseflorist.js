import React, { useEffect } from "react";
import app_config from "../../config";

import {
  Card,
  CardContent,
  Container,
  Box,
  CardMedia,
  Grid,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import CallIcon from "@mui/icons-material/Call";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Browseflorist = () => {
  const url = app_config.backend_url;

  const [floristArray, setFloristArray] = useState([]);

  const [loading, setLoading] = useState(true);
  const { flowername } = useParams();

  const fetchFlorist = () => {
    fetch(url + "/florist/getbyflowername/" + flowername)
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

  return (
    <Container sx={{ mt: 8 }}>
      <Card
        style={{ width: "1000px", display: "flex", flexPosition: "row" }}
        sx={{ mt: 5 }}
      >
        <Grid container spacing={5}>
          <Grid item md={4}>
            <CardMedia
              // sx={{ mt: 2 }}
              component="img"
              height="300"
              image="https://c4.wallpaperflare.com/wallpaper/745/31/749/drops-flowers-romance-roses-wallpaper-preview.jpg"
              alt="Red Rose"
            />
          </Grid>
          <Grid item md={8}>
            <CardContent>
              <Box sx={{ color: "text.primary" }}>
                <Box sx={{ mt: 1 }}>
                  <AddBusinessIcon />
                  <Typography>Shop Name</Typography>
                </Box>

                <Box sx={{ mt: 1 }}>
                  <CallIcon />
                  <Typography>Mobile No</Typography>
                </Box>

                <Box sx={{ mt: 1 }}>
                  <EmailIcon />
                  <Typography>Mobile No</Typography>
                </Box>

                <Box sx={{ mt: 1 }}>
                  <AccessTimeIcon />
                  <Typography>Timings</Typography>
                </Box>

                <Stack spacing={3} direction="row">
                  <Button variant="text" style={{ cursor: "pointer" }}>
                    Price
                  </Button>
                  <Button variant="contained" style={{ cursor: "pointer" }}>
                    Buy Now
                  </Button>
                </Stack>
              </Box>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
      <Card
        style={{ width: "1000px", display: "flex", flexPosition: "row" }}
        sx={{ mt: 5 }}
      >
        <Container style={{ justifyContent: "flex-start" }}>
          <CardMedia
            sx={{ mt: 2 }}
            component="img"
            height="340"
            image="https://p4.wallpaperbetter.com/wallpaper/94/178/550/orchids-flowers-exotic-greens-wallpaper-preview.jpg"
            alt="Pink Orchid"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Pink Orchids
            </Typography>
          </CardContent>
        </Container>

        <Container style={{ display: "flex", justifyContent: "flex-end" }}>
          <CardContent>
            <Box sx={{ color: "text.primary" }}>
              <Box sx={{ mt: 1 }}>
                <AddBusinessIcon />
                <Typography>Shop Name</Typography>
              </Box>

              <Box sx={{ mt: 1 }}>
                <CallIcon />
                <Typography>Mobile No</Typography>
              </Box>

              <Box sx={{ mt: 1 }}>
                <EmailIcon />
                <Typography>Mobile No</Typography>
              </Box>

              <Box sx={{ mt: 1 }}>
                <AccessTimeIcon />
                <Typography>Timings</Typography>
              </Box>

              <Stack spacing={3} direction="row">
                <Button variant="text" style={{ cursor: "pointer" }}>
                  Price
                </Button>
                <Button variant="contained" style={{ cursor: "pointer" }}>
                  Buy Now
                </Button>
              </Stack>
            </Box>
          </CardContent>
        </Container>
      </Card>
      <Card
        style={{ width: "1000px", display: "flex", flexPosition: "row" }}
        sx={{ mt: 5 }}
      >
        <Container style={{ justifyContent: "flex-start" }}>
          <CardMedia
            sx={{ mt: 2 }}
            component="img"
            height="340"
            image="https://balea-raitz.com/wp-content/uploads/2018/02/9483_Amazing-purple-Orchid-flower-HD-wallpaper.jpg"
            alt="Purple Orchid"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Purple Orchid
            </Typography>
          </CardContent>
        </Container>

        <Container style={{ display: "flex", justifyContent: "flex-end" }}>
          <CardContent>
            <Box sx={{ color: "text.primary" }}>
              <Box sx={{ mt: 1 }}>
                <AddBusinessIcon />
                <Typography>Shop Name</Typography>
              </Box>

              <Box sx={{ mt: 1 }}>
                <CallIcon />
                <Typography>Mobile No</Typography>
              </Box>

              <Box sx={{ mt: 1 }}>
                <EmailIcon />
                <Typography>Mobile No</Typography>
              </Box>

              <Box sx={{ mt: 1 }}>
                <AccessTimeIcon />
                <Typography>Timings</Typography>
              </Box>

              <Stack spacing={3} direction="row">
                <Button variant="text" style={{ cursor: "pointer" }}>
                  Price
                </Button>
                <Button variant="contained" style={{ cursor: "pointer" }}>
                  Buy Now
                </Button>
              </Stack>
            </Box>
          </CardContent>
        </Container>
      </Card>
      <Card
        style={{ width: "1000px", display: "flex", flexPosition: "row" }}
        sx={{ mt: 5 }}
      >
        <Container style={{ justifyContent: "flex-start" }}>
          <CardMedia
            sx={{ mt: 2 }}
            component="img"
            height="240"
            image="https://c4.wallpaperflare.com/wallpaper/745/31/749/drops-flowers-romance-roses-wallpaper-preview.jpg"
            alt="Red Rose"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Red Rose
            </Typography>
          </CardContent>
        </Container>

        <Container style={{ display: "flex", justifyContent: "flex-end" }}>
          <CardContent>
            <Box sx={{ color: "text.primary" }}>
              <Box sx={{ mt: 1 }}>
                <AddBusinessIcon />
                <Typography>Shop Name</Typography>
              </Box>

              <Box sx={{ mt: 1 }}>
                <CallIcon />
                <Typography>Mobile No</Typography>
              </Box>

              <Box sx={{ mt: 1 }}>
                <EmailIcon />
                <Typography>Mobile No</Typography>
              </Box>

              <Box sx={{ mt: 1 }}>
                <AccessTimeIcon />
                <Typography>Timings</Typography>
              </Box>

              <Stack spacing={3} direction="row">
                <Button variant="text" style={{ cursor: "pointer" }}>
                  Price
                </Button>
                <Button variant="contained" style={{ cursor: "pointer" }}>
                  Buy Now
                </Button>
              </Stack>
            </Box>
          </CardContent>
        </Container>
      </Card>
      <Card
        style={{ width: "1000px", display: "flex", flexPosition: "row" }}
        sx={{ mt: 5 }}
      >
        <Container style={{ justifyContent: "flex-start" }}>
          <CardMedia
            sx={{ mt: 2 }}
            component="img"
            height="240"
            image="https://c4.wallpaperflare.com/wallpaper/745/31/749/drops-flowers-romance-roses-wallpaper-preview.jpg"
            alt="Red Rose"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Red Rose
            </Typography>
          </CardContent>
        </Container>

        <Container style={{ display: "flex", justifyContent: "flex-end" }}>
          <CardContent>
            <Box sx={{ color: "text.primary" }}>
              <Box sx={{ mt: 1 }}>
                <AddBusinessIcon />
                <Typography>Shop Name</Typography>
              </Box>

              <Box sx={{ mt: 1 }}>
                <CallIcon />
                <Typography>Mobile No</Typography>
              </Box>

              <Box sx={{ mt: 1 }}>
                <EmailIcon />
                <Typography>Mobile No</Typography>
              </Box>

              <Box sx={{ mt: 1 }}>
                <AccessTimeIcon />
                <Typography>Timings</Typography>
              </Box>

              <Stack spacing={3} direction="row">
                <Button variant="text" style={{ cursor: "pointer" }}>
                  Price
                </Button>
                <Button variant="contained" style={{ cursor: "pointer" }}>
                  Buy Now
                </Button>
              </Stack>
            </Box>
          </CardContent>
        </Container>
      </Card>
      <Card
        style={{ width: "1000px", display: "flex", flexPosition: "row" }}
        sx={{ mt: 5 }}
      >
        <Container style={{ justifyContent: "flex-start" }}>
          <CardMedia
            sx={{ mt: 2 }}
            component="img"
            height="240"
            image="https://c4.wallpaperflare.com/wallpaper/745/31/749/drops-flowers-romance-roses-wallpaper-preview.jpg"
            alt="Red Rose"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Red Rose
            </Typography>
          </CardContent>
        </Container>

        <Container style={{ display: "flex", justifyContent: "flex-end" }}>
          <CardContent>
            <Box sx={{ color: "text.primary" }}>
              <Box sx={{ mt: 1 }}>
                <AddBusinessIcon />
                <Typography>Shop Name</Typography>
              </Box>

              <Box sx={{ mt: 1 }}>
                <CallIcon />
                <Typography>Mobile No</Typography>
              </Box>

              <Box sx={{ mt: 1 }}>
                <EmailIcon />
                <Typography>Mobile No</Typography>
              </Box>

              <Box sx={{ mt: 1 }}>
                <AccessTimeIcon />
                <Typography>Timings</Typography>
              </Box>

              <Stack spacing={3} direction="row">
                <Button variant="text" style={{ cursor: "pointer" }}>
                  Price
                </Button>
                <Button variant="contained" style={{ cursor: "pointer" }}>
                  Buy Now
                </Button>
              </Stack>
            </Box>
          </CardContent>
        </Container>
      </Card>
    </Container>
  );
};

export default Browseflorist;
