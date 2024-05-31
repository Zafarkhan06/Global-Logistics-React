import { useState, useRef, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import logo from "../../asset/images/PGL WHITE BG PNG.png";
import { Container, Grid, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import {  useLocation } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [nav, setNav] = useState(false);
  const menuRef = useRef(null); // Ref for the menu icon container

  // Toggle function to handle the navbar's display
  const handleNav = (event) => {
    // Stop event propagation to prevent handleClickOutside from being triggered
    event.stopPropagation();
    setNav(!nav);
  };
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setNav(false);
    }
  };
  useEffect(() => {
    // Add event listener when component mounts
    document.addEventListener("click", handleClickOutside);
    return () => {
      // Remove event listener when component unmounts
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className=" bg-white border-b">
        <Container
          disableGutters={true}
          maxWidth="lg"
          sx={{ px: { xs: "10px", lg: "0px" } }}
        >
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className="flex justify-between py-2 items-center  mb-3 lg:mb-0 ">
                <div className="w-2/6">
                  <LazyLoadImage
                    onClick={() => navigate("/")}
                    src={logo}
                    alt="muntazim logo"
                    className="w-3/6 md:w-1/6 cursor-pointer"
                  />
                </div>
                <div className="lg:flex hidden gap-20 items-center ">
                  <motion.p
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.04 }}
                    onClick={() => navigate("/")}
                    className={`${location.pathname === "/"
                      ? "text-[#cc3333]"
                      : "text-black"
                      } font-Raleway font-medium capitalize cursor-pointer hover:text-[#757575]`}
                  >
                    Home
                  </motion.p>
                  <motion.p
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.04 }}
                    onClick={() => navigate("/price-and-plans")}
                    className={` ${window.location.href.includes("/price-and-plans")
                      ? "text-[#cc3333]"
                      : "text-black"
                      } font-Raleway font-medium  capitalize cursor-pointer hover:text-[#757575]`}
                  >
                    Price & Plans
                  </motion.p>

                  <motion.p
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.04 }}
                    onClick={() => navigate("/contactus")}
                    className={` ${window.location.href.includes("/contactus")
                      ? "text-[#cc3333]"
                      : "text-black"
                      } font-Raleway font-medium  capitalize cursor-pointer hover:text-[#757575]`}
                  >
                    Contact Us
                  </motion.p>
                </div>
                <div className="hidden lg:block">
                  <a href="tel:+18442644453">
                  <Button variant="contained" className="font-Monts" sx={{
                    px: 3,
                    py: 1,
                    boxShadow: "none",
                    fontSize: "1rem",
                    fontWeight: "bold",
                   
                    textTransform: "capitalize",
                    letterSpacing: "2px",
                    background:
                      "#cc3333",
                    color: "white",
                    "&:hover": {
                      background:
                        "#cc3333",
                      boxShadow: "none",
                    },
                  }}> +1(844)264-4453</Button>
                  </a>
                </div>

                {/* Mobile Navigation Icon */}
                <div
                  ref={menuRef}
                  className="block lg:hidden"
                  onClick={handleNav}
                >
                  {nav ? (
                    <CloseIcon
                      size={40}
                      sx={{ fontSize: "40px", color: "black" }}
                    />
                  ) : (
                    <MenuIcon sx={{ fontSize: "40px", color: "black" }} />
                  )}
                  {nav ? (
                    <div className="fixed lg:hidden left-0 top-[82px] w-full max-h-fit border-b rounded-b-xl py-5 bg-white ease-in-out duration-500">
                      <p
                        onClick={() => navigate("/")}
                        className={`text-sm ${location.pathname === "/"
                          ? "text-[#cc3333]"
                          : "text-black"
                          }  hover:text-[#757575] py-2 tracking-wider cursor-pointer px-8 font-medium hover:bg-[#2e2a2a]`}
                      >
                        Home
                      </p>
                      <p
                        onClick={() => navigate("/price-and-plans")}
                        className={`text-sm mt-3 ${window.location.href.includes("/price-and-plans")
                          ? "text-[#cc3333]"
                          : "text-black"
                          }  hover:text-[#757575] py-2 tracking-wider cursor-pointer px-8 font-medium hover:bg-[#2e2a2a]`}
                      >
                        Price & Plans
                      </p>

                      <p
                        onClick={() => navigate("/contactus")}
                        className={`text-sm mt-3 ${window.location.href.includes("/contactus")
                          ? "text-[#cc3333]"
                          : "text-black"
                          }  hover:text-[#757575] py-2 tracking-wider cursor-pointer px-8 font-medium hover:bg-[#2e2a2a]`}
                      >
                        Contact Us
                      </p>
                      <div className="px-5 pt-5 flex justify-center" >
                      <a href="tel:+18442644453">
                        <Button variant="contained" sx={{
                          px: 5,
                          py: 1,
                          fontSize: "1rem",
                          fontWeight: "semibold",
                          
                          textTransform: "capitalize",
                          letterSpacing: "2px",
                          background:
                            "#cc3333",
                          color: "#f5f1e4",
                          "&:hover": {
                            color: "#121212",
                            background:
                              "#cc3333",
                          },
                        }}> +1 (844) 264-4453
                        </Button>
                        </a>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default NavBar;
