import { Container, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";
import computerPerson from "../../asset/images/person-computer (1).jpg";
import image1 from "../../asset/images/image-1.jpg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import Video from "./Video";
import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const names = ["Operate", "Scale", "Outsource"];
const FirstSection = () => {
  const navigate = useNavigate();
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.5 } },
  };
  const [newName, setnewName] = useState("");

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * names.length);
    setnewName(names[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 1500);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  const itemVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2 } },
  };
  const firstsectionVariants = {
    offscreen: {
      x: 300,
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.6,
        duration: 0.9,
        damping: 30,
        stiffness: 80,
      },
    },
  };
  const seconndsectionVariants = {
    offscreen: {
      y: 300,
      opacity: 0.3,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.6,
        duration: 1.2,
        damping: 30,
        stiffness: 80,
      },
    },
  };
  const textsectionVariants = {
    offscreen: {
      x: 300,
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.6,
        duration: 1.2,
        damping: 30,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="bg-[#FFFFF0] relative">
      <Video />
      <div className=" absolute  top-0 left-0 w-full ">
        <Container
          disableGutters={true}
          maxWidth="lg"
          sx={{ px: { xs: "10px", lg: "0px" } }}
        >
          <Grid sx={{ justifyContent: "center" }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="min-h-[65vh] md:max-h-[80vh] lg:min-h-screen xl:min-h-[90vh] 2xl:min-h-[80vh] flex flex-col gap-6 justify-center"
              >
                <motion.div variants={itemVariants}>
                  <div className="flex gap-3 items-center">
                    <p className="md:text-2xl tracking-wide text-[#ffd735] uppercase  ultra-medium">
                      let there be light
                    </p>

                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <p className="text-3xl md:text-6xl text-white ultra-dark uppercase">
                    Effectively
                    <span className="text-[#ffd735] px-3">{newName}</span>
                    <br />
                    your Business <span className="text-[#ffd735]">. . .</span>
                  </p>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <p className="md:text-lg text-[#f5f1e4] font-normal">
                    In our customer-centric BPO approach, we elevate service while maximizing lead generation.
                  </p>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <div className="flex flex-col md:flex-row justify-start gap-5 md:items-center">
                    <Button
                      className="raleway"
                      variant="contained"
                      onClick={() => navigate("/contactus")}
                      sx={{
                        background:
                          "linear-gradient(71.17deg, #FEAF00 19.35%, #F8D442 90.12%)",
                        color: "#121212",
                        borderRadius: "100px",
                        px: 5,
                        py: 1,
                        border: "2px solid #121212",
                        textTransform: "capitalize",
                        letterSpacing: "2px",

                        fontSize: "1.1rem",
                        fontWeight: "bold",
                      }}
                    >
                      Apply now
                    </Button>
                    <Button
                      onClick={() => navigate("/outbound")}
                      className="raleway"
                      variant="outlined"
                      sx={{
                        borderRadius: "100px",
                        px: 5,
                        py: 1,
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        textTransform: "capitalize",
                        letterSpacing: "2px",
                        border: "2px solid  #FEAF00 ",
                        color: "#f5f1e4",
                        "&:hover": {
                          color: "#121212",
                          border: "2px solid #322C2B",
                          background:
                            "linear-gradient(71.17deg, #FEAF00 19.35%, #F8D442 90.12%)",
                        },
                      }}
                    >
                      Services
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div className="bg-gray-300 ">
        <Container
          disableGutters={true}
          maxWidth="lg"
          sx={{ px: { xs: "10px", lg: "0px" } }}
        >
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.05 }}
                className="flex flex-col-reverse md:flex-row-reverse mb-16 gap-2 justify-between mt-16  md:mt-28 items-start"
              >
                <div className="w-full min-h-[15rem] md:min-h-0 md:w-2/4 ">
                  <div className="relative">
                    <motion.div
                      variants={firstsectionVariants}
                      style={{
                        background:
                          "linear-gradient(71.17deg, #FEAF00 19.35%, #F8D442 90.12%)",
                      }}
                      className="absolute rounded-2xl left-1 w-32 md:w-60 h-36 md:h-72 z-10"
                    ></motion.div>
                    <motion.img
                      variants={seconndsectionVariants}
                      src={computerPerson}
                      alt="Your image"
                      className="absolute top-3 left-4 md:min-h-[400px] lg:min-h-[450px] w-11/12  object-cover object-center rounded-xl z-20"
                    />
                    <p style={{ background: "linear-gradient(71.17deg, #FEAF00 19.35%, #F8D442 90.12%)" }}
                      className="px-4 md:px-8 py-5 text-[#121212] rounded-lg md:text-lg absolute z-20 top-52 md:top-80 lg:top-96 w-10/12 md:left-12 md:w-4/5 lg:left-28 border border-[#2e2a2a] shadow  ultra-medium md:ultra-medium">
                      <EnergySavingsLeafIcon sx={{ fontSize: "40px", color: "#121212" }} />
                      There are over 150+ seats presently operational across
                      multiple locations, generating over 25,000+ transfers per
                      month.
                    </p>
                  </div>
                </div>
                <motion.div
                  variants={textsectionVariants}
                  className="md:w-2/4 md:pl-5 md:mt-10 mb-16"
                >
                  <p className="text-2xl md:text-4xl text-center md:text-start  ultra-bold tracking-tighter uppercase">
                    Tailored{" "}
                    <span className="text-[#FEAF00]">Lightning-Speed</span>{" "}
                    Solutions for Every Business
                  </p>
                  <p className="text-sm text-[#2e2a2a]  md:line-clamp-6 lg:line-clamp-none md:text-base md:raleway tracking-wide  mt-5">
                    With a combined leadership experience of 12 years within the
                    industry, our team excels in managing large-scale
                    businesses, cultivating extensive teams, and fostering
                    valuable relationships. At Light Communications, we have
                    emerged as pioneers in the Contact Center sector,
                    specializing in supporting customer interactions across
                    diverse channels such as Web collaboration, Web chat, and
                    the rapidly evolving landscape of social media interactions,
                    setting us apart from the competition.
                  </p>
                  <div className="flex flex-col lg:flex-row justify-start mt-5 gap-2 md:items-start">
                    <div>
                      <div className="flex gap-2 items-center mb-1 justify-start ">
                        <CheckCircleIcon sx={{ color: "#FEAF00" }} />
                        <p className="ultra text-lg">Lead generation</p>
                      </div>
                      <div className="flex gap-2 items-center justify-start ">
                        <CheckCircleIcon sx={{ color: "#FEAF00" }} />
                        <p className="ultra text-lg">
                          Inbound Customer Services
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="flex gap-2 mb-1 items-center justify-start">
                        <CheckCircleIcon sx={{ color: "#FEAF00" }} />
                        <p className="ultra text-lg">Life Insurance Sales</p>
                      </div>
                      <div className="flex gap-2 items-center justify-start">
                        <CheckCircleIcon sx={{ color: "#FEAF00" }} />
                        <p className="ultra text-lg">
                          Outbound customer services
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <Button
                      variant="contained"
                      className="raleway"
                      onClick={() => navigate("/contactus")}
                      sx={{
                        background:
                          "linear-gradient(71.17deg, #FEAF00 19.35%, #F8D442 90.12%)",
                        color: "#121212",
                        borderRadius: "100px",
                        px: 3,
                        py: 1,
                        textTransform: "capitalize",
                        letterSpacing: "2px",
                        "&:hover": {
                          color: "#121212",
                          backgroundColor: "#322C2B",
                        },
                        fontSize: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      get free consultation
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                variants={containerVariants}
                viewport={{ once: true, amount: 0.05 }}
                className="flex flex-col-reverse md:flex-row justify-between mt-32 md:mt-32 items-start"
              >
                <div className="w-full min-h-[18rem] mt-10 md:min-h-[28rem] md:w-2/4 ">
                  <div className="relative">
                    <motion.div
                      variants={firstsectionVariants}
                      style={{
                        background:
                          "linear-gradient(71.17deg, #FEAF00 19.35%, #F8D442 90.12%)",
                      }}
                      className="absolute rounded-2xl left-1 w-32 md:w-60 h-36 md:h-72 z-10"
                    ></motion.div>
                    <motion.img
                      variants={seconndsectionVariants}
                      src={image1}
                      alt="Your image"
                      className="absolute top-3 left-4 md:min-h-[400px] lg:min-h-[450px] w-11/12  object-cover object-center rounded-xl z-20"
                    />
                  </div>
                </div>
                <motion.div
                  variants={textsectionVariants}
                  className="md:w-2/4 md:pl-5 mt-16 md:mt-28"
                >
                  <p className="text-2xl md:text-4xl  ultra-bold tracking-tighter uppercase">
                    Advantages <span className="text-[#FEAF00]">light communications</span> offers
                  </p>
                  <ul className="text-base text-[#2e2a2a] md:line-clamp-6 lg:line-clamp-none md:text-base md:raleway tracking-wide mt-5">
                    <li className="mt-3 text-lg list-inside list-disc">
                      End-to-end services and robust platforms to support
                      outsourced services.
                    </li>
                    <li className="mt-3 text-lg list-inside list-disc">
                      Cut down your operations cost by as much as 50%.
                    </li>
                    <li className="mt-3 text-lg list-inside list-disc">
                      Access to expert talent pool.
                    </li>
                    <li className="mt-3 text-lg list-inside list-disc">
                      Scalability and agility to meet your business needs.
                    </li>
                    <li className="mt-3 list-inside list-disc">
                      Turn your fixed overhead costs to operational costs.
                    </li>
                  </ul>
                  <div className="mt-5">
                    <Button
                      variant="contained"
                      className="raleway"
                      onClick={() => navigate("/about-us")}
                      sx={{
                        background:
                          "linear-gradient(71.17deg, #FEAF00 19.35%, #F8D442 90.12%)",
                        color: "#121212",
                        borderRadius: "100px",
                        px: 3,
                        py: 1,
                        textTransform: "capitalize",
                        letterSpacing: "2px",
                        "&:hover": {
                          color: "#121212",
                          backgroundColor: "#322C2B",
                        },
                        fontSize: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      learn more about us
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default FirstSection;
