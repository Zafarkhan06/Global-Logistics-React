import { useState, useRef, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import logo from "../../asset/images/PGL BLACK BG PNG.png";
import { Container, Grid, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
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
  const handleScrollToFAQ = () => {
    navigate("/#faq");
  };
  return (
    <>
      <div className=" bg-black">
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
                <div className="lg:flex hidden gap-10 items-center ">
                  <motion.p
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.04 }}
                    onClick={() => navigate("/")}
                    className={`${location.pathname === "/" && location.hash === ""
                      ? "text-[#cc3333]"
                      : "text-white"
                      } font-Raleway font-normal tracking-widest capitalize cursor-pointer hover:text-[#757575]`}
                  >
                    Home
                  </motion.p>
                  <motion.p
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.04 }}
                    onClick={() => navigate("/pricing")}
                    className={` ${window.location.href.includes("/pricing")
                      ? "text-[#cc3333]"
                      : "text-white"
                      } font-Raleway font-normal   capitalize tracking-widest cursor-pointer hover:text-[#757575]`}
                  >
                    Pricing
                  </motion.p>
                  <Link to="/#faq">
                    <motion.p
                      whileTap={{ scale: 0.9 }}
                      whileHover={{ scale: 1.04 }}
                      //onClick={handleScrollToFAQ}
                      className={` ${location.hash === "#faq" ? "text-[#cc3333]" : "text-white"} font-Raleway font-normal capitalize tracking-widest cursor-pointer hover:text-[#757575]`}
                    >
                      FAQ's
                    </motion.p>
                  </Link>

                  <Link to="/#whoweare">
                    <motion.p
                      whileTap={{ scale: 0.9 }}
                      whileHover={{ scale: 1.04 }}
                      //onClick={handleScrollToFAQ}
                      className={` ${location.hash === "#whoweare" ? "text-[#cc3333]" : "text-white"} font-Raleway font-normal capitalize tracking-widest cursor-pointer hover:text-[#757575]`}
                    >
                      Who We Are
                    </motion.p>
                  </Link>

                  <motion.p
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.04 }}
                    onClick={() => navigate("/contactus")}
                    className={` ${window.location.href.includes("/contactus")
                      ? "text-[#cc3333]"
                      : "text-white"
                      } font-Raleway font-normal   capitalize tracking-widest cursor-pointer hover:text-[#757575]`}
                  >
                    Contact Us
                  </motion.p>
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
                      }}> (844) 264-4453</Button>
                    </a>
                  </div>
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
                    <div className="fixed lg:hidden left-0 top-[82px] w-full max-h-fit border-b rounded-b-xl py-5 bg-black ease-in-out duration-500">
                      <p
                        onClick={() => navigate("/")}
                        className={`text-sm ${location.pathname === "/"
                          ? "text-[#cc3333]"
                          : "text-white"
                          }  hover:text-[#757575]   py-2 tracking-widest cursor-pointer px-8 font-medium hover:bg-[#2e2a2a]`}
                      >
                        Home
                      </p>
                      <p
                        onClick={() => navigate("/pricing")}
                        className={`text-sm mt-3 ${window.location.href.includes("/pricing")
                          ? "text-[#cc3333]"
                          : "text-white"
                          }  hover:text-[#757575] py-2   tracking-widest cursor-pointer px-8 font-medium hover:bg-[#2e2a2a]`}
                      >
                        Pricing
                      </p>
                      <Link to="/#faq">
                        <p

                          //onClick={handleScrollToFAQ}
                          className={` ${location.hash === "#faq" ? "text-[#cc3333]" : "text-white"} text-sm mt-3 hover:text-[#757575] py-2   tracking-widest cursor-pointer px-8 font-medium hover:bg-[#2e2a2a]`}
                        >
                          FAQ's
                        </p>
                      </Link>

                      <Link to="/#whoweare">
                        <p

                          //onClick={handleScrollToFAQ}
                          className={` ${location.hash === "#whoweare" ? "text-[#cc3333]" : "text-white"} text-sm mt-3 hover:text-[#757575] py-2   tracking-widest cursor-pointer px-8 font-medium hover:bg-[#2e2a2a]`}
                        >
                          Who We Are
                        </p>
                      </Link>

                      <p
                        onClick={() => navigate("/contactus")}
                        className={`text-sm mt-3 ${window.location.href.includes("/contactus")
                          ? "text-[#cc3333]"
                          : "text-white"
                          }  hover:text-[#757575] py-2   tracking-widest cursor-pointer px-8 font-medium hover:bg-[#2e2a2a]`}
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
      </div >
    </>
  );
};

export default NavBar;
