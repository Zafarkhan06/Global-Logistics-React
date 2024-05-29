import React, { useRef, useState } from "react";
import { Container, Grid, Modal, Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import computerPerson from "../../asset/images/image-8.webp";
import { ReactTyped } from "react-typed";
import ClearIcon from "@mui/icons-material/Clear";
import useScrollTriggeredCountUp from "../components/useScrollTriggerCountUp";
import { useNavigate } from "react-router";
import image1 from "../../asset/images/image-1.jpg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
function Inbound() {
  const ref = useRef(null);
  const navigate = useNavigate();
  const headcount = useScrollTriggeredCountUp(ref, 150);
  const experience = useScrollTriggeredCountUp(ref, 12);
  const sales = useScrollTriggeredCountUp(ref, 9000);
  const leads = useScrollTriggeredCountUp(ref, 25000);
  const itemVariants = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
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
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [selectedService, setSelectedService] = React.useState(null);

  const handleOpen = (serviceName) => {
    setSelectedService(serviceName);
    setOpen(true);
  };
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.7 } },
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 380,
    bgcolor: "background.paper",
    boxShadow: 24,
    pl: 4,
    pb: 4,
    pr: 1,
    pt: 1,
  };
  const servicesData = [
    {
      name: "taxi dispatch",
      description:
        "Experience seamless taxi dispatch customer service with us. Our dedicated team ensures prompt and efficient handling of bookings, inquiries, and customer support round the clock. ",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="35"
          width="40"
          fill="#FEAF00"
          viewBox="0 0 512 512"
        >
          <path d="M192 0c-17.7 0-32 14.3-32 32V64c0 .1 0 .1 0 .2c-38.6 2.2-72.3 27.3-85.2 64.1L39.6 228.8C16.4 238.4 0 261.3 0 288V432v48c0 17.7 14.3 32 32 32H64c17.7 0 32-14.3 32-32V432H416v48c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V432 288c0-26.7-16.4-49.6-39.6-59.2L437.2 128.3c-12.9-36.8-46.6-62-85.2-64.1c0-.1 0-.1 0-.2V32c0-17.7-14.3-32-32-32H192zM165.4 128H346.6c13.6 0 25.7 8.6 30.2 21.4L402.9 224H109.1l26.1-74.6c4.5-12.8 16.6-21.4 30.2-21.4zM96 288a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm288 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
        </svg>
      ),
    },
    {
      name: "Truck Dispatch",
      description:
        "Experience seamless truck dispatch customer service tailored to your needs. Our dedicated team ensures prompt and efficient coordination, optimizing routes and schedules to enhance your operations. ",

      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="35"
          width="40"
          fill="#FEAF00"
          viewBox="0 0 640 512"
        >
          <path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
        </svg>
      ),
    },
    {
      name: "Chat Support",
      description:
        "We specialize in providing expert chat support services, ensuring seamless communication and exceptional customer experiences for our clients.",
      icon: (
        <svg
          height="30"
          width="40"
          fill="#FEAF00"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M373.5 27.1C388.5 9.9 410.2 0 433 0c43.6 0 79 35.4 79 79c0 22.8-9.9 44.6-27.1 59.6L277.7 319l-10.3-10.3-64-64L193 234.3 373.5 27.1zM170.3 256.9l10.4 10.4 64 64 10.4 10.4-19.2 83.4c-3.9 17.1-16.9 30.7-33.8 35.4L24.4 510.3l95.4-95.4c2.6 .7 5.4 1.1 8.3 1.1c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32c0 2.9 .4 5.6 1.1 8.3L1.7 487.6 51.5 310c4.7-16.9 18.3-29.9 35.4-33.8l83.4-19.2z" />
        </svg>
      ),
    },
    {
      name: "Operator and controller 24/7",
      description:
        "We specialize in providing expert Operator and controller 24/7 services, ensuring seamless communication and exceptional customer experiences for our clients.",
      icon: (
        <svg
          height="35"
          width="40"
          fill="#FEAF00"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M392 32H56C25.1 32 0 57.1 0 88v336c0 30.9 25.1 56 56 56h336c30.9 0 56-25.1 56-56V88c0-30.9-25.1-56-56-56zm-108.3 82.1c0-19.8 29.9-19.8 29.9 0v199.5c0 19.8-29.9 19.8-29.9 0V114.1zm-74.6-7.5c0-19.8 29.9-19.8 29.9 0v216.5c0 19.8-29.9 19.8-29.9 0V106.6zm-74.7 7.5c0-19.8 29.9-19.8 29.9 0v199.5c0 19.8-29.9 19.8-29.9 0V114.1zM59.7 144c0-19.8 29.9-19.8 29.9 0v134.3c0 19.8-29.9 19.8-29.9 0V144zm323.4 227.8c-72.8 63-241.7 65.4-318.1 0-15-12.8 4.4-35.5 19.4-22.7 65.9 55.3 216.1 53.9 279.3 0 14.9-12.9 34.3 9.8 19.4 22.7zm5.2-93.5c0 19.8-29.9 19.8-29.9 0V144c0-19.8 29.9-19.8 29.9 0v134.3z" />
        </svg>
      ),
    },
    {
      name: "Order taking and Processing",
      description:
        "We specialize in providing expert Order taking and Processing services, ensuring seamless communication and exceptional customer experiences for our clients.",
      icon: (
        <svg
          height="30"
          width="40"
          fill="#FEAF00"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M373.5 27.1C388.5 9.9 410.2 0 433 0c43.6 0 79 35.4 79 79c0 22.8-9.9 44.6-27.1 59.6L277.7 319l-10.3-10.3-64-64L193 234.3 373.5 27.1zM170.3 256.9l10.4 10.4 64 64 10.4 10.4-19.2 83.4c-3.9 17.1-16.9 30.7-33.8 35.4L24.4 510.3l95.4-95.4c2.6 .7 5.4 1.1 8.3 1.1c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32c0 2.9 .4 5.6 1.1 8.3L1.7 487.6 51.5 310c4.7-16.9 18.3-29.9 35.4-33.8l83.4-19.2z" />
        </svg>
      ),
    },

    {
      name: "Data Entry and Management",
      description:
        "Experience seamless Data Entry service tailored to your needs. Our dedicated team ensures prompt and efficient coordination, optimizing routes and schedules to enhance your operations. ",

      icon: (
        <svg height="35"
          width="40"
          fill="#FEAF00" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z" /></svg>
      ),
    },

    // Add more services here
  ];
  const smallportionVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.6,
        duration: 1.2,
        damping: 30,
        stiffness: 100,
      },
    },
  };

  const inboundLeft = {
    offscreen: {
      x: -200,
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
  const inboundRight = {
    offscreen: {
      x: 200,
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
    <div className="pb-5 bg-[#2e2a2a]">
      <div className="third-background py-28 md:py-56">
        <Container
          disableGutters={true}
          maxWidth="lg"
          sx={{ px: { xs: "10px", lg: "0px" } }}
        >
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={itemVariants}
              >
                <p className="text-3xl text-center md:text-6xl text-white ultra-dark uppercase">
                  Streamline Your Customer Experience
                </p>
                <p className="text-lg text-center tracking-wide font-medium mt-2 text-[#f5f1e4] raleway">
                  Our inbound services are designed to help you deliver exceptional customer
                  experiences, every time.
                  <br /> With our expertise and cutting-edge technology,
                  you can focus on what matters most -

                  <span className="text-[#FEAF00] text-xl">growing your business.</span>{" "}

                </p>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Container
        disableGutters={true}
        maxWidth="lg"
        sx={{ px: { xs: "10px", lg: "0px" }, mb: 5 }}
      >
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className="flex flex-col items-center">
              <p className="raleway text-[#f5f1e4] text-center mt-16 md:font-semibold mb-2 text-xl capitalize ">
                our inbound services
              </p>
              <ReactTyped
                className="text-2xl md:h-32 md:text-5xl  text-center md:mt-8 ultra-dark uppercase"
                startWhenVisible
                strings={[
                  "WE TAKE GREAT PRIDE IN LEVERAGING OUR EXPERTISE TO SUPPORT BUSINESSES IN THE FOLLOWING AREAS.",
                ]}
                typeSpeed={40}
              />
            </div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.05 }}
              className="flex flex-col-reverse md:min-h-fit md:flex-row-reverse justify-between mt-12 md:mt-16 items-start"
            >
              <div className="w-full min-h-[18rem]  md:min-h-0 md:w-2/4 ">
                <div className="relative">
                  <motion.div
                    variants={firstsectionVariants}
                    style={{
                      background:
                        "linear-gradient(71.17deg, #FEAF00 19.35%, #F8D442 90.12%)",
                    }}
                    className="absolute rounded-2xl left-1 w-32 md:w-60 h-36 md:h-72  z-10"
                  ></motion.div>
                  <motion.img
                    variants={seconndsectionVariants}
                    src={computerPerson}
                    alt="Your image"
                    className="absolute  top-3 left-4 bg-[#121212] md:max-h-[400px] lg:min-h-[450px] w-11/12  object-cover object-center rounded-xl z-20"
                  />
                </div>
              </div>
              <motion.div
                variants={textsectionVariants}
                className="md:w-2/4 flex flex-col mb-10 md:mb-0 pr-5 md:mt-5"
              >
                {servicesData.map((service, index) => (
                  <div
                    key={index}
                    onClick={() => handleOpen(service.name)}
                    className="flex border-b py-4 border-[#f5f1e4] items-center cursor-pointer gap-3"
                  >
                    {service.icon}
                    <p className="ultra text-xl md:text-2xl">{service.name}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
      <Container
        disableGutters={true}
        maxWidth="lg"
        sx={{ px: { xs: "10px", lg: "0px" }, mb: 5 }}
      >
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            {/* new section try */}
            <div className="mt-24 md:mt-32">
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.05 }}
                className="flex  md:justify-between gap-x-10 gap-y-10 flex-col-reverse md:flex-row  lg:flex-nowrap items-center relative"
              >
                <motion.div
                  variants={inboundLeft}
                  className="md:max-w-[350px] w-full relative z-10 "
                >
                  <svg
                    className="ml-auto"
                    width="66"
                    height="66"
                    viewBox="0 0 86 86"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="43" cy="43" r="43" fill="#FEAF00"></circle>
                  </svg>
                  <div className="my-4 md:max-w-[350px] w-full hover:shadow-xl hover:shadow-[#F8D442] bg-[#121212] rounded-r-3xl rounded-l-[60px] relative py-7 h-[120px] px-8 shadow-md flex items-center justify-center">
                    <div className="text-white font-Raleway text-2xl font-semibold">
                      Customer Service
                    </div>
                  </div>
                  <svg
                    width="66"
                    height="66"
                    viewBox="0 0 86 86"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="43" cy="43" r="43" fill="#FEAF00"></circle>
                  </svg>
                </motion.div>
                <motion.div
                  variants={inboundRight}
                  className="md:max-w-[620px] w-full relative z-10 "
                >
                  <div className="text-[#f5f1e4] md:text-xl font-Raleway text-base font-normal md:text-justify">
                    We specialize in delivering exceptional customer service
                    through both phone and chat support channels.
                  </div>
                </motion.div>
              </motion.div>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.05 }}
                className="flex md:justify-between gap-x-10 gap-y-10 flex-wrap my-5 lg:flex-nowrap items-center relative"
              >
                <motion.div
                  variants={inboundLeft}
                  className="md:max-w-[620px] w-full relative z-10 "
                >
                  <div className="text-[#f5f1e4] md:text-xl font-Raleway text-base font-normal md:text-justify">
                    Experience seamless taxi dispatch customer service with us.
                    Our dedicated team ensures prompt and efficient handling of
                    bookings, inquiries, and customer support round the clock.

                  </div>
                </motion.div>
                <motion.div
                  variants={inboundRight}
                  className="md:max-w-[350px] w-full relative z-10 "
                >
                  <svg
                    width="66"
                    height="66"
                    viewBox="0 0 86 86"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="43" cy="43" r="43" fill="#FEAF00"></circle>
                  </svg>
                  <div className="my-4 md:max-w-[350px] w-full hover:shadow-xl hover:shadow-[#F8D442] bg-[#121212] rounded-r-3xl rounded-l-[60px] relative py-7 h-[120px] px-8 shadow-md flex items-center justify-center">
                    <div className="text-white font-Raleway text-2xl text-center font-semibold">
                      Taxi Dispatch
                    </div>
                  </div>
                  <svg
                    className="ml-auto"
                    width="66"
                    height="66"
                    viewBox="0 0 86 86"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="43" cy="43" r="43" fill="#FEAF00"></circle>
                  </svg>
                </motion.div>
              </motion.div>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.05 }}
                className="flex  md:justify-between gap-x-10 gap-y-10 flex-col-reverse md:flex-row  lg:flex-nowrap items-center relative"
              >
                <motion.div
                  variants={inboundLeft}
                  className="md:max-w-[350px] w-full relative z-10 "
                >
                  <svg
                    className="ml-auto"
                    width="66"
                    height="66"
                    viewBox="0 0 86 86"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="43" cy="43" r="43" fill="#FEAF00"></circle>
                  </svg>
                  <div className="my-4 md:max-w-[350px] w-full hover:shadow-xl hover:shadow-[#F8D442] bg-[#121212] rounded-r-3xl rounded-l-[60px] relative py-7 h-[120px] px-8 shadow-md flex items-center justify-center">
                    <div className="text-white font-Raleway text-2xl font-semibold">
                      Truck Dispatch
                    </div>
                  </div>
                  <svg
                    width="66"
                    height="66"
                    viewBox="0 0 86 86"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="43" cy="43" r="43" fill="#FEAF00"></circle>
                  </svg>
                </motion.div>
                <motion.div
                  variants={inboundRight}
                  className="md:max-w-[620px] w-full relative z-10 "
                >
                  <div className="text-[#f5f1e4] md:text-xl font-Raleway text-base font-normal md:text-justify">
                    Experience seamless truck dispatch customer service tailored
                    to your needs.
                  </div>
                </motion.div>
              </motion.div>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.05 }}
                className="flex md:justify-between gap-x-10 gap-y-10 flex-wrap lg:flex-nowrap items-center relative"
              >
                <motion.div
                  variants={inboundLeft}
                  className="md:max-w-[620px] w-full relative z-10 "
                >
                  <div className="text-[#f5f1e4] md:text-xl font-Raleway text-base font-normal md:text-justify">
                    We specialize in providing expert chat support services, ensuring seamless communication and exceptional customer experiences for our clients.

                  </div>
                </motion.div>
                <motion.div
                  variants={inboundRight}
                  className="md:max-w-[350px] w-full relative z-10 "
                >
                  <svg
                    width="66"
                    height="66"
                    viewBox="0 0 86 86"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="43" cy="43" r="43" fill="#FEAF00"></circle>
                  </svg>
                  <div className="my-4 md:max-w-[350px] w-full hover:shadow-xl hover:shadow-[#F8D442] bg-[#121212] rounded-r-3xl rounded-l-[60px] relative py-7 h-[120px] px-8 shadow-md flex items-center justify-center">
                    <div className="text-white font-Raleway text-2xl text-center font-semibold">
                      Chat Support
                    </div>
                  </div>
                  <svg
                    className="ml-auto"
                    width="66"
                    height="66"
                    viewBox="0 0 86 86"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="43" cy="43" r="43" fill="#FEAF00"></circle>
                  </svg>
                </motion.div>
              </motion.div>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.05 }}
                className="flex  md:justify-between gap-x-10 gap-y-10 flex-col-reverse md:flex-row  lg:flex-nowrap items-center relative"
              >
                <motion.div
                  variants={inboundLeft}
                  className="md:max-w-[350px] w-full relative z-10 "
                >
                  <svg
                    className="ml-auto"
                    width="66"
                    height="66"
                    viewBox="0 0 86 86"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="43" cy="43" r="43" fill="#FEAF00"></circle>
                  </svg>
                  <div className="my-4 md:max-w-[350px] w-full hover:shadow-xl hover:shadow-[#F8D442] bg-[#121212] rounded-r-3xl rounded-l-[60px] relative py-7 h-[120px] px-8 shadow-md flex items-center justify-center">
                    <div className="text-white font-Raleway text-2xl font-semibold">
                      Data Entry and Management
                    </div>
                  </div>
                  <svg
                    width="66"
                    height="66"
                    viewBox="0 0 86 86"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="43" cy="43" r="43" fill="#FEAF00"></circle>
                  </svg>
                </motion.div>
                <motion.div
                  variants={inboundRight}
                  className="md:max-w-[620px] w-full relative z-10 "
                >
                  <div className="text-[#f5f1e4] md:text-xl font-Raleway text-base font-normal md:text-justify">
                    Experience seamless Data Entry service tailored to your needs. Our dedicated team ensures prompt and efficient coordination, optimizing routes and schedules to enhance your operations.
                  </div>
                </motion.div>
              </motion.div>


            </div>
            {/* new section end here */}
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
                    className="absolute bg-black top-3 left-4 md:min-h-[400px] lg:min-h-[450px] w-11/12  object-cover object-center rounded-xl z-20"
                  />

                </div>
              </div>
              <motion.div
                variants={textsectionVariants}
                className="md:w-2/4 md:pl-5 md:mt-10 mb-16"
              >
                <p className="text-2xl md:text-4xl text-center md:text-start  ultra-bold tracking-tighter uppercase">
                  Benefits of Our
                  <span className="text-[#FEAF00] ml-2">Inbound Services</span>{" "}
                </p>
                <p className="text-sm text-[#f5f1e4]  md:line-clamp-6 lg:line-clamp-none md:text-base md:raleway tracking-wide  mt-5">
                  At Light Communications, we have
                  emerged as pioneers in the Contact Center sector,
                  specializing in supporting customer interactions across
                  diverse channels such as Web collaboration, Web chat, and
                  the rapidly evolving landscape of social media interactions,
                  setting us apart from the competition.
                </p>
                <div className="flex flex-col justify-start mt-5 gap-3 md:items-start">
                  <div>
                    <div className="flex gap-2 items-center mb-2 justify-start ">
                      <CheckCircleIcon sx={{ color: "#FEAF00" }} />
                      <p className="ultra text-lg">Improved customer satisfaction</p>
                    </div>
                    <div className="flex gap-2 items-center justify-start ">
                      <CheckCircleIcon sx={{ color: "#FEAF00" }} />
                      <p className="ultra text-lg">
                        Enhanced brand reputation
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-2 items-center mb-2 justify-start ">
                      <CheckCircleIcon sx={{ color: "#FEAF00" }} />
                      <p className="ultra text-lg">Reduced operational costs</p>
                    </div>
                    <div className="flex gap-2 items-center justify-start ">
                      <CheckCircleIcon sx={{ color: "#FEAF00" }} />
                      <p className="ultra text-lg">
                        Scalable and flexible solutions
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-2 mb-2 items-center justify-start">
                      <CheckCircleIcon sx={{ color: "#FEAF00" }} />
                      <p className="ultra text-lg">10+ years of experience in inbound services</p>
                    </div>
                    <div className="flex gap-2 items-center justify-start">
                      <CheckCircleIcon sx={{ color: "#FEAF00" }} />
                      <p className="ultra text-lg">
                        Highly trained and experienced team available 24/7
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
                    get Started Today
                  </Button>
                </div>
              </motion.div>
            </motion.div>


          </Grid>
        </Grid>
      </Container>

      <div className="py-20 md:py-32  md:mt-32 pb-64 md:pb-72 textured-background">
        <Container
          disableGutters={true}
          maxWidth="lg"
          sx={{ px: { xs: "10px", lg: "0px" } }}
        >
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <motion.div
                whileDrag={{ scale: 0.9 }}
                whileTap={{ scale: 0.9 }}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.1 }}
                className="rounded-2xl bg-[#2e2a2a] border-yellow-400 border-4"
              >
                <motion.div
                  variants={textsectionVariants}
                  className="grid grid-cols-2 md:grid-cols-4 md:py-5 justify-center items-center"
                >
                  <motion.div
                    ref={ref}
                    className="border-r flex flex-col border-[#FEAF00] items-center border-b px-5 py-5 md:border-b-0"
                  >
                    <p className="ultra-bold text-4xl md:text-6xl">
                      {headcount}+
                    </p>
                    <p className="ultra-medium text-[#f5f1e4]">Headcount</p>
                  </motion.div>
                  <div
                    ref={ref}
                    className="border-r flex flex-col border-[#FEAF00] items-center border-b px-5 py-5 md:border-b-0"
                  >
                    <p className="ultra-bold text-4xl md:text-6xl">
                      {experience} +
                    </p>
                    <p className="ultra-medium text-[#f5f1e4]">Experience</p>
                  </div>
                  <motion.div
                    ref={ref}
                    className="border-r flex border-[#FEAF00] flex-col items-center px-5 py-5 text-start "
                  >
                    <p className="ultra-bold text-4xl md:text-6xl">{sales}+</p>
                    <p className="ultra-medium text-center text-[#f5f1e4] ">
                      Insurance Sales per month
                    </p>
                  </motion.div>
                  <motion.div
                    ref={ref}
                    className="border-r border-[#FEAF00] md:border-0 flex flex-col items-center px-5 py-5 text-start "
                  >
                    <p className="ultra-bold text-4xl md:text-6xl">{leads}+</p>
                    <p className="ultra-medium text-[#f5f1e4]">
                      Leads per month
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Container
        disableGutters={true}
        maxWidth="lg"
        sx={{ px: { xs: "10px", lg: "0px" }, mb: 5 }}
      >
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className=" py-6 items-center -mb-48 md:-mb-32 -mt-24 md:-mt-16 px-8  rounded-3xl border-2 gap-5 flex flex-col md:flex-row justify-between  w-full bg-[#121212] border-[#FEAF00]">
              <div>
                <p className="text-xl md:text-xl text-white  raleway font-bold tracking-normal uppercase">
                  Contact Us
                </p>
                <p className="text-sm md:text-base text-[#f5f1e4]  font-Raleway mt-3">
                  Light Communications is dedicated to providing an
                  extensive array of services and back-office support, led
                  by experienced professionals with a specialization in
                  managing industry-related businesses. Our team is
                  committed to delivering exceptional results and exceeding
                  client expectations. Contact us today to discuss how we
                  can support and optimize your business operations.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <Button
                  className="raleway"
                  variant="contained"
                  onClick={() => navigate("/contactus")}
                  sx={{
                    borderRadius: "100px",
                    px: 5,
                    py: 1,
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    textTransform: "capitalize !important",
                    letterSpacing: "2px",
                    background:
                      "linear-gradient(71.17deg, #FEAF00 19.35%, #F8D442 90.12%)",
                    color: "#2e2a2a",

                    width: "330px",

                    "&:hover": {
                      backgroundColor: "#322C2B",
                    },
                  }}
                >
                  Get Started
                </Button>
                <Button
                  className="raleway"
                  variant="contained"
                  onClick={() => navigate("/contactus")}
                  sx={{
                    borderRadius: "100px",
                    px: 5,
                    py: 1,
                    mt: 1,
                    backgroundColor: "#2e2a2a",
                    width: "330px",
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    textTransform: "capitalize !important",
                    letterSpacing: "2px",

                    color: "white",
                    "&:hover": {
                      color: "white",

                      backgroundColor: "#322C2B",
                    },
                  }}
                >
                  Get a consultation
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-end">
            <ClearIcon onClick={handleClose} className="cursor-pointer" />
          </div>
          <Typography
            className="ultra"
            id="modal-modal-title"
            sx={{ fontWeight: "bold", color: "#2e2a2a" }}
            variant="h5"
            component="h2"
          >
            {selectedService}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            {selectedService &&
              servicesData.find((service) => service.name === selectedService)
                .description}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default Inbound;
