import React from "react";
import logo from "../../asset/images/logo-news.png";
import { Container, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
function Footer() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#cc3333] pt-24">
      <Container
        disableGutters={true}
        maxWidth="lg"
        sx={{ px: { xs: "10px", lg: "0px" } }}
      >
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className=" flex flex-col pb-16 gap-8 items-center justify-center">
              <p className="raleway uppercase text-[#f5f1e4] text-center text-pretty">
                up skill for a better future
              </p>
              <p className="text-3xl md:text-5xl text-white text-center font-bold font-Raleway uppercase">
              Always loaded and profitable
              </p>
              <p className="text-sm tracking-tighter md:text-sm raleway lowercase text-center  text-[#eaecf3]">
              Having some idea of what your company needs or what are your hauling plans and desires will help us provide the best dispatch service <br/> solution for your trucking company.​
Complete the form now and start today!
              </p>
              <motion.div
                whileTap={{ scale: 0.9 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 1 },
                  scale: 1.2,
                }}
              >
                <Button
                  onClick={() => navigate("/contactus")}
                  className="raleway"
                  variant="outlined"
                  sx={{
                    borderRadius: "100px",
                    px: 5,
                    py: 1,
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    textTransform: "capitalize !important",
                    letterSpacing: "2px",
                    border: "2px solid white",
                    color: "white",
                    "&:hover": {
                      border: "2px solid white",
                    },
                    width: { sm: "300px", md: "330px" },
                  }}
                >
                  Contact us
                </Button>
              </motion.div>
              {/* <p className="text-[#d8d9dd] font-Raleway text-xs">
                &copy;2024 Light Communications , LLC
              </p> */}
            </div>
            <hr />
            <div className="flex flex-col md:flex-row gap-3 justify-between items-center py-4">
              <div className="md:w-4/12">
                <LazyLoadImage  onClick={() => navigate("/home")} src={logo} alt="muntazim logo" className="h-20 cursor-pointer" />
              </div>
              <div className="flex flex-col gap-3 pb-4 md:w-8/12 md:flex-row items-center justify-between">
                <div className=" flex flex-wrap gap-8">
                  <motion.p
                    whileInView={{
                      opacity: 1,
                      transition: { duration: 1 },
                      scale: 1.12,
                    }}
                    onClick={() => navigate("/home")}
                    whileTap={{ scale: 0.9 }}
                    className="font-Raleway cursor-pointer hover:text-[#F8D442] text-white capitalize"
                  >
                    Home
                  </motion.p>
                  <motion.p
                    whileInView={{
                      opacity: 1,
                      transition: { duration: 1 },
                      scale: 1.12,
                    }}
                    onClick={() => navigate("/outbound")}
                    whileTap={{ scale: 0.9 }}
                    className="hover:text-[#F8D442] cursor-pointer font-Raleway text-white capitalize"
                  >
                    Price & Plans
                  </motion.p>
                  
                  <motion.p
                    whileInView={{
                      opacity: 1,
                      transition: { duration: 1 },
                      scale: 1.12,
                    }}
                    onClick={() => navigate("/contactus")}
                    whileTap={{ scale: 0.9 }}
                    className="hover:text-[#F8D442] cursor-pointer font-Raleway text-white capitalize"
                  >
                    contact us
                  </motion.p>
                </div>
                <div className="flex gap-8">
                  <a
                    href="https://www.linkedin.com/company/light-communications4/"
                    target="_blank"
                  >
                    <svg
                      width="45"
                      height="45"
                      viewBox="0 0 45 45"
                      fill="black"
                      className="animate-pulse cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.25"
                        d="M43.875 22.5C43.875 34.3051 34.3051 43.875 22.5 43.875C10.6949 43.875 1.125 34.3051 1.125 22.5C1.125 10.6949 10.6949 1.125 22.5 1.125C34.3051 1.125 43.875 10.6949 43.875 22.5Z"
                        stroke="white"
                        stroke-width="2.25"
                      />
                      <path
                        d="M17.6875 19.375C18.6195 19.375 19.375 18.6195 19.375 17.6875C19.375 16.7555 18.6195 16 17.6875 16C16.7555 16 16 16.7555 16 17.6875C16 18.6195 16.7555 19.375 17.6875 19.375Z"
                        fill="white"
                      />
                      <path
                        d="M19.0938 20.5H16.2812C16.126 20.5 16 20.626 16 20.7812V29.2188C16 29.374 16.126 29.5 16.2812 29.5H19.0938C19.249 29.5 19.375 29.374 19.375 29.2188V20.7812C19.375 20.626 19.249 20.5 19.0938 20.5Z"
                        fill="white"
                      />
                      <path
                        d="M27.4733 20.1125C26.2712 19.7007 24.7677 20.0624 23.866 20.711C23.8351 20.59 23.7248 20.5 23.5938 20.5H20.7812C20.626 20.5 20.5 20.626 20.5 20.7813V29.2188C20.5 29.374 20.626 29.5 20.7812 29.5H23.5938C23.749 29.5 23.875 29.374 23.875 29.2188V23.155C24.3295 22.7635 24.9151 22.6387 25.3943 22.8423C25.8589 23.0386 26.125 23.5178 26.125 24.1563V29.2188C26.125 29.374 26.251 29.5 26.4062 29.5H29.2188C29.374 29.5 29.5 29.374 29.5 29.2188V23.5898C29.4679 21.2785 28.3806 20.423 27.4733 20.1125Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61553107270941&mibextid=ZbWKwL"
                    target="_blank"
                  >
                    <svg
                      width="45"
                      height="45"
                      className="animate-pulse"
                      viewBox="0 0 45 45"
                      fill="black"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.25"
                        d="M44 22.5C44 34.3741 34.3741 44 22.5 44C10.6259 44 1 34.3741 1 22.5C1 10.6259 10.6259 1 22.5 1C34.3741 1 44 10.6259 44 22.5Z"
                        stroke="white"
                        stroke-width="2"
                      />
                      <path
                        d="M20.699 29.393L20.6786 23.0961H18V20.3974H20.6786V18.5983C20.6786 16.1702 22.171 15 24.3209 15C25.3507 15 26.2358 15.0772 26.4937 15.1118V17.6493L25.0026 17.65C23.8334 17.65 23.607 18.2097 23.607 19.0312V20.3974H26.9286L26.0357 23.0961H23.607V29.393H20.699Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/light.communications?igsh=c2pqaHlsNG12NHB2"
                    target="_blank"
                  >
                    <svg
                      width="45"
                      height="45"
                      className="animate-pulse"
                      viewBox="0 0 45 45"
                      fill="black"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.25"
                        d="M44 22.5C44 34.3741 34.3741 44 22.5 44C10.6259 44 1 34.3741 1 22.5C1 10.6259 10.6259 1 22.5 1C34.3741 1 44 10.6259 44 22.5Z"
                        stroke="white"
                        stroke-width="2"
                      />
                      <path
                        d="M25.8678 19.9423C26.2986 19.9423 26.6478 19.5931 26.6478 19.1623C26.6478 18.7315 26.2986 18.3823 25.8678 18.3823C25.437 18.3823 25.0878 18.7315 25.0878 19.1623C25.0878 19.5931 25.437 19.9423 25.8678 19.9423Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.25 22.5C19.25 24.2924 20.7076 25.75 22.5 25.75C24.2924 25.75 25.75 24.2924 25.75 22.5C25.75 20.7076 24.2924 19.25 22.5 19.25C20.7076 19.25 19.25 20.7076 19.25 22.5ZM20.875 22.5C20.875 21.6038 21.6038 20.875 22.5 20.875C23.3962 20.875 24.125 21.6038 24.125 22.5C24.125 23.3962 23.3962 24.125 22.5 24.125C21.6038 24.125 20.875 23.3962 20.875 22.5Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.25 29H25.75C27.4205 29 29 27.4205 29 25.75V19.25C29 17.5795 27.4205 16 25.75 16H19.25C17.5795 16 16 17.5795 16 19.25V25.75C16 27.4205 17.5795 29 19.25 29ZM17.625 19.25C17.625 18.4903 18.4903 17.625 19.25 17.625H25.75C26.5097 17.625 27.375 18.4903 27.375 19.25V25.75C27.375 26.5097 26.5097 27.375 25.75 27.375H19.25C18.4757 27.375 17.625 26.5243 17.625 25.75V19.25Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
