import logo from "../../asset/images/PGL BLACK BG PNG.png";
import { Container, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import docusign from "../../asset/images/docu-sign.png";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';
import truckstop from "../../asset/images/truckkstop.png";
import dat from "../../asset/images/2560px-DAT-Solutions-Logo.svg.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();
  return (
    <div className="bg-black pt-16 md:pt-32">
      <Container
        disableGutters={true}
        maxWidth="lg"
        sx={{ px: { xs: "10px", lg: "0px" } }}
      >
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className="flex flex-col md:flex-row  justify-between items-center">
              <div>
                <p className="md:text-3xl text-2xl lg:text-4xl mb-6 md:mb-0 font-bold font-Monts text-center  italic text-white">Always loaded <br />and profitable
                </p>
              </div>
              <div>
                <div className=" flex flex-wrap gap-8">
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
                    FAQ
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
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-between  items-center flex-col md:flex-row mt-16">
              <div className="flex flex-col  w-full md:w-2/4 items-center justify-center md:justify-start">
                <div className="flex justify-center md:justify-start mb-6">
                  <LazyLoadImage onClick={() => navigate("/")} src={logo} alt="muntazim logo" className="rounded-full w-2/12 cursor-pointer" />
                </div>
                <div className="flex gap-2 items-center">
                  <div>
                    <LazyLoadImage src={truckstop} alt="muntazim logo" className=" w-full " />
                  </div>
                  <div >
                    <LazyLoadImage src={dat} alt="muntazim logo" className=" w-1/2 " />
                  </div>
                </div>
              </div>
              <div>
                <a href="mailto:info@perfectgloballogistics.com">
                  <p className="hover:text-[#cc3333] cursor-pointer text-center md:text-right font-Raleway text-white">info@perfectgloballogistics.com</p></a>
                <a href="tel:+1(844)264-4453">
                  <p className="hover:text-[#cc3333] cursor-pointer font-Raleway text-white  text-center md:text-right mt-16">(844) 264-4453</p>
                </a>
                <p className="hover:text-[#cc3333] cursor-pointer font-Raleway text-white  text-center md:text-right mt-16">1603 Capitol Avenue Cheyenne, WY 82001, USA

                </p>
              </div>
            </div>
            <div className="flex justify-between md:flex-row flex-col items-center">
              <div className="flex gap-4 mt-10 mb-10">
                <a
                  href="https://www.facebook.com/perfectgloballogistics"
                  target="_blank"
                >
                  <FacebookRoundedIcon sx={{ color: "white", fontSize: "40px" }} />
                </a>
                <a
                  href="http://youtube.com/@perfectgloballogistics"
                  target="_blank"
                >
                  <SubscriptionsRoundedIcon sx={{ color: "white", fontSize: "40px" }} />
                </a>
               
                <a
                  href="https://www.instagram.com/pgldispatch?igsh=YnpxODNneTZ5czdt"
                  target="_blank"
                >
                  < InstagramIcon sx={{ color: "white", fontSize: "40px" }} />
                </a>
              </div>
              <div>
                <p className="hover:text-[#cc3333] text-center md:text-right cursor-pointer font-Raleway text-white mt-3">Working Hours: 24/7</p>
                {/* <p className="hover:text-[#cc3333] text-center md:text-right cursor-pointer font-Raleway text-white mt-3">​Dispatchers: 24/7</p> */}
              </div>
            </div>
            <hr className="mt-5" />
            <div className="flex justify-center items-center py-8">

              <div className=" flex flex-wrap gap-8">
                <motion.p
                  whileInView={{
                    opacity: 1,
                    transition: { duration: 1 },
                    scale: 1.12,
                  }}
                  onClick={() => navigate("/")}
                  whileTap={{ scale: 0.9 }}
                  className="font-Raleway cursor-pointer hover:text-[#cc3333] text-white capitalize"
                >
                  Home
                </motion.p>
                <motion.p
                  whileInView={{
                    opacity: 1,
                    transition: { duration: 1 },
                    scale: 1.12,
                  }}
                  onClick={() => navigate("/pricing")}
                  whileTap={{ scale: 0.9 }}
                  className="hover:text-[#cc3333] cursor-pointer font-Raleway text-white capitalize"
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
                    FAQ
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
                  whileInView={{
                    opacity: 1,
                    transition: { duration: 1 },
                    scale: 1.12,
                  }}
                  onClick={() => navigate("/contactus")}
                  whileTap={{ scale: 0.9 }}
                  className="hover:text-[#cc3333] cursor-pointer font-Raleway text-white capitalize"
                >
                  contact us
                </motion.p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
