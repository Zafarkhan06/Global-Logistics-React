import React, { useRef, useState } from "react";
import { Container, Grid, Modal, Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import computerPerson from "../../asset/images/image-7.webp";
import { ReactTyped } from "react-typed";
import ClearIcon from "@mui/icons-material/Clear";
import useScrollTriggeredCountUp from "../components/useScrollTriggerCountUp";
import { useNavigate } from "react-router";

function Services() {
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
      name: "Healthcare and Medical",
      description:
        "Our outbound lead generation services for Healthcare and Medical providers are tailored to drive targeted leads and expand client acquisition.",
      icon: (
        <svg height="35"
          width="40"
          fill="#FEAF00" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M96 352V96c0-35.3 28.7-64 64-64H416c35.3 0 64 28.7 64 64V293.5c0 17-6.7 33.3-18.7 45.3l-58.5 58.5c-12 12-28.3 18.7-45.3 18.7H160c-35.3 0-64-28.7-64-64zM272 128c-8.8 0-16 7.2-16 16v48H208c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V256h48c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H320V144c0-8.8-7.2-16-16-16H272zm24 336c13.3 0 24 10.7 24 24s-10.7 24-24 24H136C60.9 512 0 451.1 0 376V152c0-13.3 10.7-24 24-24s24 10.7 24 24l0 224c0 48.6 39.4 88 88 88H296z" /></svg>
      ),
    },
    {
      name: "Finance and Insurance ",
      description:
        "Our outbound lead generation services for medical insurance and finance providers are tailored to drive targeted leads and expand client acquisition. With a strategic approach and personalized outreach, we help you reach qualified prospects and enhance your market presence.",

      icon: (
        <svg
          height="35"
          width="40"
          fill="#FEAF00"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96v32V480H384V128 96 56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM96 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H96V96zM416 480h32c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H416V480zM224 208c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H288v48c0 8.8-7.2 16-16 16H240c-8.8 0-16-7.2-16-16V320H176c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h48V208z" />
        </svg>
      ),
    },

    {
      name: "Technology and Software",
      description:
        "Unlock the potential of your business with our expert Technology and Software services. We specialize in connecting you with qualified leads, ensuring a steady flow of prospects interested in your offerings. ",
      icon: (
        <svg height="35"
          width="40"
          fill="#FEAF00" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64c-35.3 0-64 28.7-64 64H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64c0 35.3 28.7 64 64 64v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448c35.3 0 64-28.7 64-64h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V176h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448c0-35.3-28.7-64-64-64V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H176V24zM160 128H352c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm192 32H160V352H352V160z" /></svg>
      ),
    },
    {
      name: "Education and Training ",
      description: "Comprehensive and extensive support empowering educational institutions and professionals through tailored training solutions.",
      icon: (
        <svg height="35"
          width="40"
          fill="#FEAF00" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M337.8 5.4C327-1.8 313-1.8 302.2 5.4L166.3 96H48C21.5 96 0 117.5 0 144V464c0 26.5 21.5 48 48 48H256V416c0-35.3 28.7-64 64-64s64 28.7 64 64v96H592c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48H473.7L337.8 5.4zM96 192h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V208c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V208zM96 320h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V336zM232 176a88 88 0 1 1 176 0 88 88 0 1 1 -176 0zm88-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H336V144c0-8.8-7.2-16-16-16z" /></svg>
      ),
    },
    {
      name: "Real Estate and Construction ",
      description:
        "Find your dream home or investment property with our personalized residential real estate services. From concept to completion, we specialize in creating exceptional residential and commercial developments that redefine spaces.",
      icon: (
        <svg height="35"
          width="40"
          fill="#FEAF00" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M256 32c-17.7 0-32 14.3-32 32v2.3 99.6c0 5.6-4.5 10.1-10.1 10.1c-3.6 0-7-1.9-8.8-5.1L157.1 87C83 123.5 32 199.8 32 288v64H544l0-66.4c-.9-87.2-51.7-162.4-125.1-198.6l-48 83.9c-1.8 3.2-5.2 5.1-8.8 5.1c-5.6 0-10.1-4.5-10.1-10.1V66.3 64c0-17.7-14.3-32-32-32H256zM16.6 384C7.4 384 0 391.4 0 400.6c0 4.7 2 9.2 5.8 11.9C27.5 428.4 111.8 480 288 480s260.5-51.6 282.2-67.5c3.8-2.8 5.8-7.2 5.8-11.9c0-9.2-7.4-16.6-16.6-16.6H16.6z" /></svg>
      ),
    },
    {
      name: "Manufacturing and Logistics ",
      description:
        "Customized BPO services optimizing manufacturing and logistics processes, ensuring seamless operations and enhanced productivity.",
      icon: (
        <svg height="35"
          width="40"
          fill="#FEAF00" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" /></svg>
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

  return (
    <div className="pb-5 bg-[#2e2a2a]">
      <div className="second-background py-28 md:py-56">
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
                <p className="text-2xl md:text-4xl text-center text-white ultra-dark uppercase">
                  Drive High-Quality Leads and Boost Conversions with Our Proven Strategies
                </p>
                <p className="md:text-xl tracking-wide text-center font-medium mt-2 text-[#f5f1e4] raleway">
                  We have expertise across many industries. Therefore, we will
                  save you time and money.
                  <br /> While maintaining your organizational performance and
                  productivity goals!
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
                our outbound services
              </p>
              <ReactTyped
                className="text-2xl md:h-32 md:text-5xl  text-center md:mt-8 ultra-dark uppercase"
                startWhenVisible
                strings={[
                  "We take great pride in leveraging our expertise to support businesses in the following areas.",
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
                    className="absolute bg-[#121212] top-3 left-4 md:max-h-[400px] lg:min-h-[450px] w-11/12  object-cover object-center rounded-xl z-20"
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
                    <p className="ultra md:text-2xl">{service.name}</p>
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
            <div className="mt-24 md:mt-32">
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.05 }}
                className="flex  md:justify-between gap-x-10 gap-y-10 flex-col-reverse md:flex-row lg:flex-nowrap items-center relative"
              >
                <motion.div
                  variants={inboundLeft}
                  className="md:max-w-[350px] w-full relative z-10 "
                >
                  <svg
                    className="ml-auto"
                    width="86"
                    height="86"
                    viewBox="0 0 86 86"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="43" cy="43" r="43" fill="#FEAF00"></circle>
                  </svg>
                  <div className="my-4 md:max-w-[350px] w-full hover:shadow-xl hover:shadow-[#F8D442]  bg-[#121212] rounded-r-3xl rounded-l-[60px] relative py-7 h-[120px] px-8 shadow-md flex items-center justify-center">
                    <div className="text-white text-center font-Raleway text-2xl font-semibold">
                      Healthcare and Medical
                    </div>
                  </div>
                  <svg
                    width="86"
                    height="86"
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
                    Our outbound lead generation services for Healthcare and Medical providers are tailored to drive targeted leads and expand client acquisition.
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
                    Our outbound lead generation services for medical insurance and finance providers are tailored to drive targeted leads and expand client acquisition.
                  </div>
                </motion.div>
                <motion.div
                  variants={inboundRight}
                  className="md:max-w-[350px] w-full relative z-10 "
                >
                  <svg
                    width="86"
                    height="86"
                    viewBox="0 0 86 86"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="43" cy="43" r="43" fill="#FEAF00"></circle>
                  </svg>
                  <div className="my-4 md:max-w-[350px] w-full hover:shadow-xl hover:shadow-[#F8D442] bg-[#121212] rounded-r-3xl rounded-l-[60px] relative py-7 h-[120px] px-8 shadow-md flex items-center justify-center">
                    <div className="text-white font-Raleway text-2xl text-center font-semibold">
                      Finance and Insurance
                    </div>
                  </div>
                  <svg
                    className="ml-auto"
                    width="86"
                    height="86"
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
                className="flex  md:justify-between gap-x-10 gap-y-10 flex-col-reverse md:flex-row lg:flex-nowrap items-center relative"
              >
                <motion.div
                  variants={inboundLeft}
                  className="md:max-w-[350px] w-full relative z-10 "
                >
                  <svg
                    className="ml-auto"
                    width="86"
                    height="86"
                    viewBox="0 0 86 86"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="43" cy="43" r="43" fill="#FEAF00"></circle>
                  </svg>
                  <div className="my-4 md:max-w-[350px] w-full hover:shadow-xl hover:shadow-[#F8D442] bg-[#121212] rounded-r-3xl rounded-l-[60px] relative py-7 h-[120px] px-8 shadow-md flex items-center justify-center">
                    <div className="text-white text-center font-Raleway text-2xl font-semibold">
                      Technology and Software
                    </div>
                  </div>
                  <svg
                    width="86"
                    height="86"
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
                    Unlock the potential of your business with our expert Technology and Software services. We specialize in connecting you with qualified leads, ensuring a steady flow of prospects interested in your offerings.
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
                  Comprehensive and extensive support empowering educational institutions and professionals through tailored training solutions.                  </div>
                </motion.div>
                <motion.div
                  variants={inboundRight}
                  className="md:max-w-[350px] w-full relative z-10 "
                >
                  <svg
                    width="86"
                    height="86"
                    viewBox="0 0 86 86"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="43" cy="43" r="43" fill="#FEAF00"></circle>
                  </svg>
                  <div className="my-4 md:max-w-[350px] w-full hover:shadow-xl hover:shadow-[#F8D442] bg-[#121212] rounded-r-3xl rounded-l-[60px] relative py-7 h-[120px] px-8 shadow-md flex items-center justify-center">
                    <div className="text-white font-Raleway text-2xl text-center font-semibold">
                    Education and Training
                    </div>
                  </div>
                  <svg
                    className="ml-auto"
                    width="86"
                    height="86"
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
                className="flex  md:justify-between gap-x-10 gap-y-10 flex-col-reverse md:flex-row lg:flex-nowrap items-center relative"
              >
                <motion.div
                  variants={inboundLeft}
                  className="md:max-w-[350px] w-full relative z-10 "
                >
                  <svg
                    className="ml-auto"
                    width="86"
                    height="86"
                    viewBox="0 0 86 86"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="43" cy="43" r="43" fill="#FEAF00"></circle>
                  </svg>
                  <div className="my-4 md:max-w-[350px] w-full hover:shadow-xl hover:shadow-[#F8D442] bg-[#121212] rounded-r-3xl rounded-l-[60px] relative py-7 h-[120px] px-8 shadow-md flex items-center justify-center">
                    <div className="text-white text-center font-Raleway text-2xl font-semibold">
                    Real Estate and Construction
                    </div>
                  </div>
                  <svg
                    width="86"
                    height="86"
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
                  Find your dream home or investment property with our personalized residential real estate services.                  </div>
                </motion.div>
              </motion.div>
            </div>
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
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.05 }}
              className="flex flex-col md:flex-row gap-3 md:mt-16 md:gap-8 justify-between items-center"
            >
              <motion.div variants={textsectionVariants} className="md:w-2/5">
                <p className="text-2xl md:text-5xl  ultra-bold uppercase">
                  why we should be your top choice in the industry
                </p>
              </motion.div>
              <motion.div variants={textsectionVariants} className="md:w-3/5">
                <p className="font-Raleway md:text-base text-[#f5f1e4] ">
                  Our comprehensive oversight of operations allows businesses to
                  manage most aspects directly, ensuring greater control and
                  efficiency. Additionally, trusted networks facilitate the
                  implementation of specific programs, leading to seamless
                  integration and optimized performance.
                </p>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
      <div className="py-20 md:py-32 pb-64 md:pb-72 textured-background">
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

export default Services;
