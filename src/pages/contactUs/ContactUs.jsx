import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Container, Grid, Button, TextField } from "@mui/material";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import WorkIcon from '@mui/icons-material/Work';
import SvgComponent from "../components/SvgComponent";
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
    <div className="bg-[#e8e6e6] min-h-screen">

      <Container
        disableGutters={true}
        maxWidth="lg"
        sx={{ px: { xs: "10px", lg: "0px" } }}
      >
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className="relative">
            <SvgComponent className="absolute -top-10 -left-10 w-44 opacity-20 md:opacity-60 " />
            <SvgComponent className="absolute top-10 -right-10 w-44  opacity-10 md:opacity-40 " />
              <motion.div
                initial="hidden"
                animate="visible"
                variants={itemVariants}
              >
                <h1 className="text-2xl lg:text-3xl xl:text-[48px] tracking-normal font-bold italic text-[#292929] font-Monts leading-normal text-center   mt-20">Get in  <span className="text-[#cc3333]">Touch</span>  with us
                </h1>
                <p className="text-lg font-Raleway text-[#292929] text-center mt-10">Streamline Your Operations with Our Comprehensive FMCSA & DOT Compliance Solutions.</p>
                <p className="text-2xl font-semibold font-Raleway text-[#292929] text-center mt-5"> Need an expert <span className="text-[#cc3333]">Dispatcher</span> ? you are more than welcomed <br />to leave your contact info and we will be in touch shortly.</p>
              </motion.div>
            </div>
          </Grid>
        </Grid>
      </Container>

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
              className="flex flex-col md:flex-row relative gap-5  mt-10 md:mt-20"
            >
              <motion.div
                variants={smallportionVariants}
                className="md:w-1/3 border-b shadow-2xl flex items-center bg-[#cc3333] px-5 rounded-lg gap-5 md:border-b-0 md:border-r border-[#FEAF00] py-5"
              >
                <div className="bg-black rounded-full p-4">
                <SvgComponent className="absolute top-44 hidden md:block -right-20 w-96  opacity-40 " />
                <SvgComponent className="absolute top-44 hidden md:block left-60 w-20  opacity-40 " />
                <SvgComponent className="absolute top-96 -left-60 w-96  opacity-40 " />

                  <AddLocationAltOutlinedIcon
                    sx={{
                      color: "white ",
                      fontSize: { sm: "35px", md: "45px" },
                    }}
                  />
                </div>
                <div>
                  <p className="text-xl text-start border-[#FEAF00] text-white font-Monts  capitalize">
                    Office Location
                  </p>
                  <p className="raleway mt-2 text-sm  text-[#f5f1e4] ">
                    Office #247, 2nd Floor, Main Saidpur Road, Rawalpindi.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={smallportionVariants}
                className="md:w-1/3 border-b shadow-2xl md:border-b-0 bg-[#cc3333] px-5 rounded-lg flex items-center gap-5 md:border-r md:pl-5 border-[#FEAF00] py-5"
              >
                <div className="bg-black rounded-full p-4">
                  <SupportAgentOutlinedIcon
                    sx={{
                      color: "white",
                      fontSize: { sm: "35px", md: "45px" },
                    }}
                  />
                </div>
                <div>
                  <p className="text-xl text-start border-[#FEAF00 ] text-white font-Monts capitalize">
                    Phone Number
                  </p>
                  <p className="raleway mt-2 text-sm   text-[#f5f1e4] ">
                    0312-7777129
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={smallportionVariants}
                className="md:w-1/3  md:pl-5 shadow-2xl  py-5 flex bg-[#cc3333] px-5 rounded-lg items-center gap-5"
              >
                <div className="bg-black rounded-full p-4">
                  <MarkEmailReadOutlinedIcon
                    sx={{
                      color: "white ",
                      fontSize: { sm: "35px", md: "45px" },
                    }}
                  />
                </div>
                <div>
                  <p className="text-xl text-start border-[#FEAF00] font-Monts text-white capitalize">
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
      <div className="bg-[#e8e6e6]  md:mt-16">
        <Container
          disableGutters={true}
          maxWidth="lg"
          sx={{ px: { xs: "10px", lg: "0px" } }}
        >
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className="mt-10 md:mt-20 ">
                <section className=" text-center">
                  <div className="lg:py-12">
                    <div className="container mx-auto md:px-10">
                      <div className="grid items-center lg:grid-cols-2">
                        <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                          <div className="relative z-[1] block rounded-xl bg-[#cc3333] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[#cc3333] dark:shadow-black/20 md:px-12 lg:-mr-14">
                            <h2 className="mb-12 text-5xl font-Monts text-white font-semibold">
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
                                  className="peer block min-h-[auto] w-full rounded border border-black bg-white py-[0.32rem] px-3 leading-[1.6]  transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
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
                                  className="peer block min-h-[auto] w-full rounded border border-black bg-white py-[0.32rem] px-3 leading-[1.6]  transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
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
                                  className="peer block min-h-[auto] w-full rounded border border-black bg-white py-[0.32rem] px-3 leading-[1.6]  transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
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
                                    backgroundColor: "black",
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
              
            </Grid>
          </Grid>
        </Container>
        
      </div>
    </div>
  );
}

export default ContactUs;
