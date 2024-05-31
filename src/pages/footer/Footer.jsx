import logo from "../../asset/images/logo-news.png";
import { Container, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import docusign from "../../asset/images/docu-sign.png";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';
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
            <div className="flex justify-between items-center">
              <div>
                <p className="md:text-3xl text-2xl lg:text-4xl font-bold font-Monts text-center  italic text-white">Always loaded <br />and profitable
                </p>
              </div>
              <div>
                <div className=" flex flex-wrap gap-8">
                  <motion.p
                    whileInView={{
                      opacity: 1,
                      transition: { duration: 1 },
                      scale: 1.12,
                    }}
                    onClick={() => navigate("/")}
                    whileTap={{ scale: 0.9 }}
                    className="font-Raleway cursor-pointer hover:text-black text-white capitalize"
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
                    className="hover:text-black cursor-pointer font-Raleway text-white capitalize"
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
                    className="hover:text-black cursor-pointer font-Raleway text-white capitalize"
                  >
                    contact us
                  </motion.p>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-10">
              <div className="flex w-1/4 items-center justify-start">
                <div className="">
                  <LazyLoadImage onClick={() => navigate("/")} src={logo} alt="muntazim logo" className=" cursor-pointer" />
                </div>
                <div className="">
                  <LazyLoadImage onClick={() => navigate("/")} src={docusign} alt="muntazim logo" className="cursor-pointer" />
                </div>
              </div>
              <div><p className="hover:text-black cursor-pointer font-Raleway text-white">Email: info@perfectgloballogistics.com</p>
                <p className="hover:text-black cursor-pointer font-Raleway text-white text-right mt-3">Phone: +1 (844) 264-4453</p>
                
              </div>
            </div>
            <div className="flex justify-between">
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
            </div>
            <div>
            <p className="hover:text-black text-right cursor-pointer font-Raleway text-white mt-3">Working Hours: 24 hours</p>
                <p className="hover:text-black text-right cursor-pointer font-Raleway text-white mt-3">​Dispatchers: 24/7</p>
            </div>
            </div>
            <hr />
            <div className="flex flex-col md:flex-row gap-3 justify-between items-center py-4">
              <div className="md:w-4/12">
                <LazyLoadImage onClick={() => navigate("/")} src={logo} alt="muntazim logo" className="w-2/6 cursor-pointer" />
              </div>
              <div className=" flex flex-wrap gap-8">
                  <motion.p
                    whileInView={{
                      opacity: 1,
                      transition: { duration: 1 },
                      scale: 1.12,
                    }}
                    onClick={() => navigate("/")}
                    whileTap={{ scale: 0.9 }}
                    className="font-Raleway cursor-pointer hover:text-black text-white capitalize"
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
                    className="hover:text-black cursor-pointer font-Raleway text-white capitalize"
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
                    className="hover:text-black cursor-pointer font-Raleway text-white capitalize"
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
