import { useEffect } from "react";
import {useNavigate } from "react-router-dom";
import app_config from "../../config";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Home = () => {
  const url = app_config.api_url;
  const navigate = useNavigate();
  useEffect(() => {}, []);

  return (
    <div className="home-back">
    <div id="preview" class="preview">
      <div style={{ display: "none" }}></div>
      <div>
        <div
          data-draggable="true"
          class=""
          style={{ position: "relative" }}
          draggable="false"
        >
          <section
            draggable="false"
            class="overflow-hidden pt-0"
            data-v-271253ee=""
          >
            <section class="mb-10">
              <div
                class="p-5 text-center bg-image"
                style={{
                  backgroundImage: "url(" + url + "/images/home-hero-bg.jpg)",
                  height: "500px",
                  backgroundSize: "cover",
                  backgroundPosition: "50% 50%",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                }}
                aria-controls="#picker-editor"
              ></div>
              <div class="container">
                <div
                  class="card mx-4 mx-md-5 text-center shadow-5-strong"
                  style={{
                    marginTop: "-150px",
                    background: "hsla(0, 0%, 100%, 0.7)",
                    backdropFilter: "blur(15px)",
                  }}
                >
                  <div class="card-body px-4 py-5 px-md-5">
                    <div style={{fontFamily:"'Calligraffitti', cursive" }}>
                    <h1 class="display-3 fw-bold ls-tight mb-4">
                      <span class="text-dark letter-spacing-3px">Send </span> 
                      <span class="text-danger letter-spacing-3px"><b>flower</b></span><br/>
                      <span class="text-dark letter-spacing-3px">like you mean it</span>
                    </h1>
                    </div>
                    <p class= "text-dark"> Flowers are our inspiration to create lasting memories,  </p>
                    <p class="text-dark">Whatever the occassion ,our flowers will make it more auspicious for you. </p>
                    <button
                      class="btn btn-secondary btn-lg py-3 px-5 mb-2 mb-md-0 me-md-2"
                      onClick={(e) => navigate("/main/signup")}
                      aria-controls="#picker-editor"
                      draggable="false"
                    >
                      Create Account
                    </button>
                    <button
                      class="btn btn-secondary btn-lg py-3 px-5 mb-2 mb-md-0 me-md-2"
                      onClick={(e) => navigate("/main/contactus")}
                      aria-controls="#picker-editor"
                      draggable="false"
                    >
                      Explore Florist
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
        <div data-draggable="true" class="" style={{ position: "relative" }}>
          <section draggable="false" class="container pt-5" data-v-271253ee="">
            <section class="mb-10 text-center">
              <h1 class="fw-bold mb-9 text-center text-dark" >Why to choose us?</h1>
              <div class="row gx-lg-5">
                <div class="col-lg-4 col-md-12 mb-8 mb-lg-0">
                  <div class="card shadow-2-strong h-100">
                    <div
                      class="d-flex justify-content-center"
                      style={{ marginTop: "-43px" }}
                    >
                      <div class="p-4 bg-primary rounded-circle shadow-5-strong d-inline-block">
                        <i
                          class="fas fa-headset fa-4x text-white"
                          aria-controls="#picker-editor"
                        ></i>
                      </div>
                    </div>
                    <div class="card-body">
                      <h5 class="card-title text-danger">Get in touch</h5>
                      <p class="card-text text-dark">
                       We listen about your needs. Creative solutions for all your floral needs, Where dreams become reality.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 mb-8 mb-lg-0">
                  <div class="card shadow-2-strong h-100">
                    <div
                      class="d-flex justify-content-center"
                      style={{ marginTop: "-43px" }}
                    >
                      <div class="p-4 bg-primary rounded-circle shadow-5-strong d-inline-block">
                        <i
                          class="fas fa-american-sign-language-interpreting fa-4x text-white"
                          aria-controls="#picker-editor"
                        ></i>
                      </div>
                    </div>
                    <div class="card-body">
                      <h5 class="card-title text-danger">Turning Your Idea into floral wonder.</h5>
                      <p class="card-text text-dark">
                        Our experts have magic hands which picked fresh flower just for you, The best way to say that we care.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 mb-8 mb-lg-0">
                  <div class="card shadow-2-strong h-100">
                    <div
                      class="d-flex justify-content-center"
                      style={{ marginTop: "-43px" }}
                    >
                      <div class="p-4 bg-primary rounded-circle shadow-5-strong d-inline-block">
                        <i
                          class="fas fa-snowflake fa-4x text-white"
                          aria-controls="#picker-editor"
                        ></i>
                      </div>
                    </div>
                    <div class="card-body">
                      <h5 class="card-title text-danger">Making beautiful flower a part of your life</h5>
                      <p class="card-text text-dark">
                        We take flower personally and we bring you happiness. To share flowers is to share happiness.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
        <div
          data-draggable="true"
          class="container"
          style={{ position: "relative" }}
          draggable="false"
        >
          <section draggable="false" class="container pt-5" data-v-271253ee="">
            <section class="mb-10 text-center text-light">
              <h1 class="fw-bold mb-5 text-dark">Our Hardworking Team</h1>
              <div
                id="carouselExampleControls"
                class="carousel slide carousel-dark carousel-fade"
                data-mdb-ride="carousel"
              >
                <div class="carousel-inner px-5 px-md-0"style={{background: "hsla(0, 0%, 100%, 0.7)",
                    backdropFilter: "blur(110px)"}} >
                  <div class="carousel-item active">
                    <img
                      class="rounded-circle shadow-1-strong mb-4 mt-4"
                      src="http://localhost:5000/images/kumkum2.jpeg"
                      alt="avatar"
                      style={{ width: "150px", height: "150px" }}
                      aria-controls="#picker-editor"
                      draggable="false"
                    />
                    <div class="row d-flex justify-content-center">
                      <div class="col-lg-8">
                        <h4 class="mb-3 text-dark">Kumkum Srivastava</h4>
                        <h5  class="text-dark">Web Developer</h5>
                        <p class="text-muted">
                          <i class="fas fa-quote-left pe-2"></i>
                          <span class="text-dark">
                            In ac turpis justo. Vivamus auctor quam vitae odio
                            feugiat pulvinar. Sed semper ligula sed lorem
                            tincidunt dignissim. Nam sed cursus lectus. Proin
                            non rutrum magna. Proin gravida, justo et imperdiet
                            tristique, turpis nisi viverra est, nec posuere ex
                            arcu sit amet erat. Sed a dictum sem. Duis pretium
                            condimentum nulla.
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      class="rounded-circle shadow-1-strong mb-4 mt-4"
                      src="http://localhost:5000/images/abhishek.jpeg"
                      alt="avatar"
                      style={{ width: "150px", height: "150px" }}
                      aria-controls="#picker-editor"
                      draggable="false"
                    />
                    <div class="row d-flex justify-content-center">
                      <div class="col-lg-8">
                        <h4 class="mb-3 text-dark">Abhishek Gupta</h4>
                        <h5 class="text-dark">UX/UI Developer</h5>
                        <p class="text-muted">
                          <i class="fas fa-quote-left pe-2"></i>
                          <span>
                            Maecenas auctor, quam eget tincidunt pretium, felis
                            diam semper turpis, sed scelerisque diam libero
                            facilisis libero. Quisque vitae semper metus.
                            Aliquam eu dui aliquam, faucibus metus quis,
                            elementum nunc. .
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      class="rounded-circle shadow-1-strong mb-4 mt-4"
                      src="http://localhost:5000/images/geetanjali.jpeg"
                      alt="avatar"
                      style={{ width: "150px", height: "150px" }}
                      aria-controls="#picker-editor"
                      draggable="false"
                    />
                    <div class="row d-flex justify-content-center">
                      <div class="col-lg-8">
                        <h4 class="mb-3 text-dark">Geetanjali Chaubey</h4>
                        <h5 class="text-dark">Cyber Security Engineer</h5>
                        <p class="text-muted">
                          <i class="fas fa-quote-left pe-2"></i>
                          <span>
                            Duis sagittis, turpis in ullamcorper venenatis,
                            ligula nibh porta dui, sit amet rutrum enim massa in
                            ante. Curabitur in justo at lorem laoreet ultricies.
                            Nunc ligula felis, sagittis eget nisi vitae.
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      class="rounded-circle shadow-1-strong mb-4 mt-4"
                      src="http://localhost:5000/images/adarsh.jpeg"
                      alt="avatar"
                      style={{ width: "150px", height: "150px" }}
                      aria-controls="#picker-editor"
                      draggable="false"
                    />
                    <div class="row d-flex justify-content-center">
                      <div class="col-lg-8">
                        <h5 class="mb-3 text-dark">Adarsh Tripathi</h5>
                        <p class="text-dark">Photographer</p>
                        <p class="text-muted">
                          <i class="fas fa-quote-left pe-2"></i>
                          <span>
                            Maecenas auctor, quam eget tincidunt pretium, felis
                            diam semper turpis, sed scelerisque diam libero
                            facilisis libero. Quisque vitae semper metus.
                            Aliquam eu dui aliquam, faucibus metus quis,
                            elementum nunc. .
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-mdb-target="#carouselExampleControls"
                  data-mdb-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-mdb-target="#carouselExampleControls"
                  data-mdb-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </section>
          </section>
        </div>
        <div data-draggable="true" class="" style={{ position: "relative" }}>
          <section draggable="false" class="container pt-5" data-v-271253ee="">
            <section class="mb-10 background-radial-gradient">
              <div class="container px-4 py-5 px-md-5 text-center text-lg-start">
                <div class="row gx-lg-5 align-items-center">
                  <div class="col-lg-6 mb-5 mb-lg-0">
                    <h1
                      class="my-4 display-3 fw-bold ls-tight"
                      style={{ color: "hsl(218, 81%, 95%)" }}
                    >
                      <span class="text-dark" style={{fontFamily:"Tapestry,serif"}}>Do not miss</span> <br />
                      <span style={{ color: "purple", fontFamily:"Calligraffitti, cursive" }}>
                        any updates
                      </span>
                    </h1>
                    <p
                      class="mb-4 opacity-70 lead"
                      style={{ color: "black",fontSize:"30px",fontWeight:"500px" }}
                    >
                      Catch us on Social Media 
                      <br/>
                      <Stack direction="row" spacing={1} sx={{ml:7}}>
                        <IconButton aria-label="Instagram"onClick={(e) => navigate("")} size="large" style={{cursor:"pointer", color:"black"}}>
                          < InstagramIcon />
                        </IconButton>
                        <IconButton aria-label="facebook" onClick={(e) => navigate("")} size="large" style={{cursor:"pointer" ,color:"black"}}>
                          < FacebookIcon/>
                        </IconButton>
                        </Stack>

                    </p>
                  </div>
                  <div class="col-lg-6 mb-5 mb-lg-0">
                    <div class="card bg-glass">
                      <div class="card-body py-5 px-md-5">
                        <div class="mb-5 text-center">
                          <h2 class="fw-bold mb-3">
                            Tell us Your Needs
                          </h2>
                        </div>
                        <form>
                          <div class="form-outline mb-4">
                            <input
                              type="text"
                              id="form5Example1"
                              class="form-control"
                            />
                            <label
                              class="form-label"
                              for="form5Example1"
                              style={{ marginLeft: "0px" }}
                            >
                              Name
                            </label>
                            <div class="form-notch">
                              <div
                                class="form-notch-leading"
                                style={{ width: "9px" }}
                              ></div>
                              <div
                                class="form-notch-middle"
                                style={{ width: "42.4px" }}
                              ></div>
                              <div class="form-notch-trailing"></div>
                            </div>
                          </div>
                          <div class="form-outline mb-4">
                            <input
                              type="message"
                              id="form5Example2"
                              class="form-control"
                            />
                            <label
                              class="form-label"
                              for="form5Example2"
                              style={{ marginLeft: "0px" }}
                            >
                             Message
                            </label>
                            <div class="form-notch">
                              <div
                                class="form-notch-leading"
                                style={{ width: "9px" }}
                              ></div>
                              <div
                                class="form-notch-middle"
                                style={{ width: "88.8px" }}
                              ></div>
                              <div class="form-notch-trailing"></div>
                            </div>
                          </div>
                          <button
                            type="submit"
                            class="btn btn-secondary btn-block mb-md-4"
                            aria-controls="#picker-editor"
                          >
                            Send
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
