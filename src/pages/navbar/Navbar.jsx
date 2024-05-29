import { useState, useRef, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import logo from "../../asset/images/3.png";
import { Container, Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
const NavBar = () => {
  const navigate = useNavigate();
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
      <div className=" py-3 md:py-4 bg-[#121212]">
        <Container
          disableGutters={true}
          maxWidth="lg"
          sx={{ px: { xs: "10px", lg: "0px" } }}
        >
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className="flex justify-between items-center  mb-3 lg:mb-0 ">
                <div className="w-2/6">
                  <LazyLoadImage
                  onClick={() => navigate("/home")}
                    src={logo}
                    alt="muntazim logo"
                    className="h-20 w-24 cursor-pointer"
                  />
                </div>
                <div className="lg:flex hidden  items-center w-4/6 space-x-4">
                  <motion.p
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.04 }}
                    onClick={() => navigate("/home")}
                    className={`text-sm w-44 ${
                      window.location.href.includes("/home")
                        ? "text-[#F8D442]"
                        : "text-white"
                    } raleway font-semibold cursor-pointer uppercase hover:text-[#F8D442]`}
                  >
                    Home112
                  </motion.p>
                  <motion.p
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.04 }}
                    onClick={() => navigate("/outbound")}
                    className={`text-sm w-44 ${
                      window.location.href.includes("/outbound")
                        ? "text-[#F8D442]"
                        : "text-white"
                    } raleway font-semibold cursor-pointer uppercase hover:text-[#F8D442]`}
                  >
                    outbound
                  </motion.p>
                  <motion.p
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.04 }}
                    onClick={() => navigate("/inbound")}
                    className={`text-sm w-44 ${
                      window.location.href.includes("/inbound")
                        ? "text-[#F8D442]"
                        : "text-white"
                    } raleway font-semibold cursor-pointer uppercase hover:text-[#F8D442]`}
                  >
                    inbound
                  </motion.p>
                  <motion.p
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.04 }}
                    onClick={() => navigate("/about-us")}
                    className={`text-sm w-44 ${
                      window.location.href.includes("/about-us")
                        ? "text-[#F8D442]"
                        : "text-white"
                    } raleway font-semibold cursor-pointer uppercase hover:text-[#F8D442]`}
                  >
                    About us
                  </motion.p>
                  <motion.p
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.04 }}
                    onClick={() => navigate("/contactus")}
                    className={`text-sm w-44 ${
                      window.location.href.includes("/contactus")
                        ? "text-[#F8D442]"
                        : "text-white"
                    } raleway font-semibold cursor-pointer uppercase hover:text-[#F8D442]`}
                  >
                    Contact Us
                  </motion.p>
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
                      sx={{ fontSize: "40px", color: "white" }}
                    />
                  ) : (
                    <MenuIcon sx={{ fontSize: "40px", color: "white" }} />
                  )}
                  {nav ? (
                    <div className="fixed lg:hidden left-0 top-[92px] w-full max-h-fit border-b rounded-b-xl py-5 bg-[#121212] ease-in-out duration-500">
                      <p
                        onClick={() => navigate("/home")}
                        className={`text-sm ${
                          window.location.href.includes("/home")
                            ? "text-[#F8D442]"
                            : "text-white"
                        }  hover:text-[#F8D442] py-2 tracking-wider cursor-pointer px-8 uppercase font-medium hover:bg-[#2e2a2a]`}
                      >
                        Home
                      </p>
                      <p
                        onClick={() => navigate("/outbound")}
                        className={`text-sm mt-3 ${
                          window.location.href.includes("/outbound")
                            ? "text-[#F8D442]"
                            : "text-white"
                        }  hover:text-[#F8D442] py-2 tracking-wider cursor-pointer px-8 uppercase font-medium hover:bg-[#2e2a2a]`}
                      >
                        outbound
                      </p>
                      <p
                        onClick={() => navigate("/inbound")}
                        className={`text-sm mt-3 ${
                          window.location.href.includes("/inbound")
                            ? "text-[#F8D442]"
                            : "text-white"
                        }  hover:text-[#F8D442] py-2 tracking-wider cursor-pointer px-8 uppercase font-medium hover:bg-[#2e2a2a]`}
                      >
                        Inbound
                      </p>
                      <p
                        onClick={() => navigate("/about-us")}
                        className={`text-sm mt-3 ${
                          window.location.href.includes("/about-us")
                            ? "text-[#F8D442]"
                            : "text-white"
                        }  hover:text-[#F8D442] py-2 tracking-wider cursor-pointer px-8 uppercase font-medium hover:bg-[#2e2a2a]`}
                      >
                        About us
                      </p>
                      <p
                        onClick={() => navigate("/contactus")}
                        className={`text-sm mt-3 ${
                          window.location.href.includes("/contactus")
                            ? "text-[#F8D442]"
                            : "text-white"
                        }  hover:text-[#F8D442] py-2 tracking-wider cursor-pointer px-8 uppercase font-medium hover:bg-[#2e2a2a]`}
                      >
                        Contact Us
                      </p>
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
