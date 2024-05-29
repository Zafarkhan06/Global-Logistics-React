import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Container, Grid, Button, TextField } from "@mui/material";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import WorkIcon from '@mui/icons-material/Work';
function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
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
  const smallportionVariants = {
    offscreen: {
      y: 100,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.6,
        duration: 1,
        damping: 30,
        stiffness: 100,
      },
    },
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    sendCopy: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const { name, email, message, sendCopy } = formData;
      const subject = "Message from Contact Form";
      const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
      let mailtoLink = `mailto:hr@thelightcommunications.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      // Append "cc" parameter if sendCopy is checked
      if (sendCopy) {
        mailtoLink += `&cc=${encodeURIComponent(email)}`;
      }

      // Open the mailto link in a new tab
      window.open(mailtoLink, "_blank");
    }
  };

  return (
    <div className="bg-[#2e2a2a]">
      <div className="fourth-background py-36 md:py-56">
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
                <p className="text-3xl md:text-6xl text-white ultra-dark uppercase">
                  GET IN TOUCH with us
                </p>
                <p className="text-xl tracking-wide mt-2 text-[#f5f1e4] raleway">
                  Need an expert? you are more than welcomed <br />to leave your contact info and we will be in touch shortly.
                </p>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </div>
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
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col md:flex-row mt-10 md:mt-20"
            >
              <motion.div
                variants={smallportionVariants}
                className="md:w-1/3 border-b flex items-center gap-5 md:border-b-0 md:border-r border-[#FEAF00] py-5"
              >
                <div className="bg-[#FEAF00] rounded-full p-4">
                  <AddLocationAltOutlinedIcon
                    sx={{
                      color: "#121212 ",
                      fontSize: { sm: "35px", md: "45px" },
                    }}
                  />
                </div>
                <div>
                  <p className="text-xl text-start border-[#FEAF00] text-white ultra  capitalize">
                    Office Location
                  </p>
                  <p className="raleway mt-2 text-sm  text-[#f5f1e4] ">
                  Office #247, 2nd Floor, Main Saidpur Road, Rawalpindi.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={smallportionVariants}
                className="md:w-1/3 border-b md:border-b-0 flex items-center gap-5 md:border-r md:pl-5 border-[#FEAF00] py-5"
              >
                <div className="bg-[#FEAF00] rounded-full p-4">
                  <SupportAgentOutlinedIcon
                    sx={{
                      color: "#121212 ",
                      fontSize: { sm: "35px", md: "45px" },
                    }}
                  />
                </div>
                <div>
                  <p className="text-xl text-start border-[#FEAF00 ] text-white ultra capitalize">
                    Phone Number
                  </p>
                  <p className="raleway mt-2 text-sm   text-[#f5f1e4] ">
                    0312-7777129
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={smallportionVariants}
                className="md:w-1/3  md:pl-5  py-5 flex items-center gap-5"
              >
                <div className="bg-[#FEAF00] rounded-full p-4">
                  <MarkEmailReadOutlinedIcon
                    sx={{
                      color: "#121212 ",
                      fontSize: { sm: "35px", md: "45px" },
                    }}
                  />
                </div>
                <div>
                  <p className="text-xl text-start border-[#FEAF00] ultra text-white capitalize">
                    Email Address
                  </p>
                  <a href="mailto:zee@thelightcommunications.com">
                    <p className="raleway mt-2 text-sm  text-[#f5f1e4] ">
                      Zee@thelightcommunications.com
                    </p>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
      <div className="bg-[#2e2a2a]  md:mt-16">
        <Container
          disableGutters={true}
          maxWidth="lg"
          sx={{ px: { xs: "10px", lg: "0px" } }}
        >
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className="mt-10 md:mt-24 ">
                <section className=" text-center">
                  <div className="lg:py-12">
                    <div className="container mx-auto md:px-10">
                      <div className="grid items-center lg:grid-cols-2">
                        <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                          <div className="relative z-[1] block rounded-lg bg-[#121212] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[#121212] dark:shadow-black/20 md:px-12 lg:-mr-14">
                            <h2 className="mb-12 text-4xl ultra text-white font-bold">
                              Contact us
                            </h2>
                            <form onSubmit={handleSubmit}>
                              {/* Name Input */}
                              <div className="flex flex-col items-start mb-6">
                                <label
                                  className="text-white text-start"
                                  htmlFor="exampleInput90"
                                >
                                  Name
                                </label>
                                <input
                                  type="text"
                                  className="peer block min-h-[auto] w-full rounded border-0 bg-white py-[0.32rem] px-3 leading-[1.6]  transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                  id="exampleInput90"
                                  placeholder="Name"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                />
                                {errors.name && (
                                  <span className="text-red-500">
                                    {errors.name}
                                  </span>
                                )}
                              </div>

                              {/* Email Input */}
                              <div className="flex items-start flex-col mb-6">
                                <label
                                  className="text-white text-start"
                                  htmlFor="exampleInput91"
                                >
                                  Email
                                </label>
                                <input
                                  type="email"
                                  className="peer block min-h-[auto] w-full rounded border-0 bg-white py-[0.32rem] px-3 leading-[1.6]  transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                  id="exampleInput91"
                                  placeholder="Email address"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                />
                                {errors.email && (
                                  <span className="text-red-500">
                                    {errors.email}
                                  </span>
                                )}
                              </div>

                              {/* Message Input */}
                              <div className="flex flex-col items-start mb-6">
                                <label
                                  className="text-white text-start"
                                  htmlFor="exampleFormControlTextarea1"
                                >
                                  Message
                                </label>
                                <textarea
                                  className="peer block min-h-[auto] w-full rounded border-0 bg-white py-[0.32rem] px-3 leading-[1.6]  transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                  id="exampleFormControlTextarea1"
                                  rows="3"
                                  placeholder="Your message"
                                  name="message"
                                  value={formData.message}
                                  onChange={handleChange}
                                ></textarea>
                                {errors.message && (
                                  <span className="text-red-500">
                                    {errors.message}
                                  </span>
                                )}
                              </div>

                              {/* Send Copy Checkbox */}
                              <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                                <input
                                  className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                  type="checkbox"
                                  value=""
                                  id="exampleCheck96"
                                  checked={formData.sendCopy}
                                  name="sendCopy"
                                  onChange={handleChange}
                                />
                                <label
                                  className="inline-block text-white pl-[0.15rem] hover:cursor-pointer"
                                  htmlFor="exampleCheck96"
                                >
                                  Send me a copy of this message
                                </label>
                              </div>

                              {/* Submit Button */}
                              <Button
                                onClick={handleSubmit}
                                fullWidth
                                variant="outlined"
                                sx={{
                                  borderRadius: "100px",
                                  px: 5,
                                  py: 1,
                                  fontSize: "1.2rem",
                                  fontWeight: "bold",
                                  textTransform: "capitalize",
                                  letterSpacing: "2px",
                                  border: "2px solid white",
                                  color: "white",
                                  "&:hover": {
                                    color: "white",
                                    border: "2px solid #322C2B",
                                    backgroundColor: "#FEAF00",
                                  },
                                }}
                              >
                                Send
                              </Button>
                            </form>
                          </div>
                        </div>
                        <div className="md:mb-12 lg:mb-0">
                          <div className="relative h-[700px] rounded-lg shadow-lg dark:shadow-black/20">

                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3322.019612311458!2d73.06759257569847!3d33.63073347331868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDM3JzUwLjYiTiA3M8KwMDQnMTIuNiJF!5e0!3m2!1sen!2s!4v1715280763620!5m2!1sen!2s"
                              className="absolute left-0 top-0 h-full w-full rounded-lg"
                              allowfullscreen=""
                              loading="lazy"
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div id="career-section">
                <div className=" w-full mx-auto pt-6 ">
                  <p className="lg:text-[60px] raleway md:text-[38px] text-[36px] text-white lg:leading-[100px] font-extrabold tracking-[2.7px] text-center ">
                    Careers
                  </p>

                </div>
                {/* new careers */}

                <div className="relative flex flex-col justify-center overflow-hidden  py-6 sm:py-12">
                  <div
                    className="group relative w-full cursor-pointer overflow-hidden bg-[#121212] px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:rounded-lg sm:px-10">
                    <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#FEAF00] transition-all duration-300 group-hover:scale-[50]"></span>
                    <div className="relative w-full z-10 mx-auto ">
                      <div className="flex flex-col md:flex-row items-start gap-20">
                        <span className="grid h-20 w-20 place-items-center rounded-full bg-[#FEAF00] transition-all duration-300 group-hover:bg-black">

                          <WorkIcon sx={{
                            color: "white", fontSize: "40px",
                          }} />
                        </span>
                        <div>
                          <p className="font-Raleway font-bold text-4xl text-center text-white group-hover:text-black capitalize">We will be your light in the darkness</p>
                          <p className="font-Raleway font-bold mt-3 text-xl text-white group-hover:text-black capitalize text-center">We Have multiple Job openings available , apply now</p>

                          <div className="flex gap-5 mt-6">
                            <div className="bg-[#FEAF00] group-hover:bg-[#121212] px-5 py-2 rounded-2xl">
                              <p className="font-Raleway font-bold text-xl text-white group-hover:text-white capitalize text-center">Customer Support </p>
                            </div>
                            <div className="bg-[#FEAF00] group-hover:bg-[#121212] px-5 py-2 rounded-2xl">
                              <p className="font-Raleway font-bold text-xl text-white group-hover:text-white capitalize text-center">Inbound Expert </p>
                            </div>
                            <div className="bg-[#FEAF00] group-hover:bg-[#121212] px-5 py-2 rounded-2xl">
                              <p className="font-Raleway font-bold text-xl text-white group-hover:text-white capitalize text-center">Taxi Dispatcher </p>
                            </div>
                            <div className="bg-[#FEAF00] group-hover:bg-[#121212] px-5 py-2 rounded-2xl">
                              <p className="font-Raleway font-bold text-xl text-white group-hover:text-white capitalize text-center">Chat Support </p>
                            </div>

                          </div>
                        </div>
                      </div>

                      <div
                        className="space-y-6 pt-9 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                        <div className="flex gap-3 justify-center">

                          <p className="font-Raleway font-bold mt-3 text-xl text-white group-hover:text-black capitalize text-center">We Have multiple Job openings available </p>
                          <a href="https://docs.google.com/forms/d/1GxOKaEKOd91IyWAbcGoU5Z_w0E-B4NGvIxVo7clakfM/edit" target="_blank">
                            <button type="button" className="bg-[#FEAF00] group-hover:bg-black rounded-lg px-5 py-2 text-[#121212] font-Raleway font-semibold text-lg group-hover:text-white">Apply Now</button>
                          </a></div>


                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
        <Container
          disableGutters={true}
          maxWidth="lg"
          sx={{ px: { xs: "10px", lg: "0px" }, pb: 8 }}
        >
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className=" py-8  items-center -mb-48 md:-mb-32 px-8 md:mt-28  rounded-3xl border-2 gap-5 flex flex-col md:flex-row justify-between  w-full bg-[#121212] border-[#FEAF00]">
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
      </div>
    </div>
  );
}

export default ContactUs;
