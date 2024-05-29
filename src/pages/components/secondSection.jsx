import React, { useRef, useEffect } from "react";
import { Container, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";
import useScrollTriggeredCountUp from "./useScrollTriggerCountUp";
import { useNavigate } from "react-router-dom";

const SecondSection = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const headcount = useScrollTriggeredCountUp(ref, 150);
  const experience = useScrollTriggeredCountUp(ref, 12);
  const sales = useScrollTriggeredCountUp(ref, 9000);
  const leads = useScrollTriggeredCountUp(ref, 25000);

  const textsectionVariants = {
    offscreen: {
      x: -300,
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
    <div className="bg-gray-300 lg:pt-28 z-30">
      <Container
        disableGutters={true}
        maxWidth="lg"
        sx={{ px: { xs: "10px", lg: "0px" }, mb: 5 }}
      >
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}></Grid>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            className="xl:max-w-[1250px] w-full container mx-auto px-4 md:mt-10 mt-12 py-20 relative"
          >
            <svg
              className="arrow-left absolute left-[37%] top-5"
              width="86"
              height="86"
              viewBox="0 0 86 86"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="43" cy="43" r="43" fill="#FEAF00 " />
            </svg>
            <div className="flex justify-center gap-4 items-center">
              <p className=" z-40 text-2xl md:text-4xl text-center md:text-start  ultra-bold tracking-tighter uppercase">
                Our services
              </p>
            </div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.1 }}
              className="flex pt-20 md:justify-between gap-x-10 gap-y-16 flex-wrap"
            >
              <motion.div
                variants={smallportionVariants}
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
              >
                <div style={{background: "linear-gradient(71.17deg, #FEAF00 19.35%, #F8D442 90.12%)"}}
 className="cursor-pointer md:max-w-[350px] w-full  rounded-t-3xl rounded-b-[100px] relative py-7 md:h-[330px] h-[250px] px-8 shadow shadow-slate-600 transition-all duration-500 ease-in-out hover:shadow-2xl hover:shadow-[#F8D442]">
                  <div className="text-[#121212] raleway text-2xl font-semibold mt-4">
                    Inbound Customer Service{" "}
                    <p className="text-[#2e2a2a] raleway lg:text-lg text-base font-normal mt-4">
                      Handling incoming calls from customers who need assistance
                      with a product or service.
                    </p>
                    <div className="md:w-[138px] border md:h-[138px] w-[100px] h-[100px]  rounded-full bg-[#FEAF00] flex justify-center items-center absolute md:-right-10 right-0 -top-10">
                      <svg
                        className="tilt-animation"
                        width="37"
                        height="33"
                        viewBox="0 0 37 33"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.5 6.27376C0.5 4.85928 1.0619 3.50272 2.0621 2.50253C3.06229 1.50233 4.41885 0.94043 5.83333 0.94043L30.7222 0.94043C32.1367 0.94043 33.4933 1.50233 34.4935 2.50253C35.4937 3.50272 36.0556 4.85928 36.0556 6.27376V20.496C36.0556 21.9105 35.4937 23.267 34.4935 24.2672C33.4933 25.2674 32.1367 25.8293 30.7222 25.8293H23.6111V29.3849H25.3889C25.8604 29.3849 26.3126 29.5722 26.646 29.9056C26.9794 30.239 27.1667 30.6912 27.1667 31.1627C27.1667 31.6341 26.9794 32.0863 26.646 32.4197C26.3126 32.7531 25.8604 32.9404 25.3889 32.9404L11.1667 32.9404C10.6952 32.9404 10.243 32.7531 9.90959 32.4197C9.57619 32.0863 9.38889 31.6341 9.38889 31.1627C9.38889 30.6912 9.57619 30.239 9.90959 29.9056C10.243 29.5722 10.6952 29.3849 11.1667 29.3849L12.9444 29.3849L12.9444 25.8293L5.83333 25.8293C4.41885 25.8293 3.06229 25.2674 2.0621 24.2672C1.0619 23.267 0.5 21.9105 0.5 20.496L0.5 6.27376ZM16.5 25.8293L16.5 29.3849H20.0556V25.8293H16.5ZM5.83333 4.49599C5.36184 4.49599 4.90965 4.68329 4.57625 5.01668C4.24286 5.35008 4.05556 5.80227 4.05556 6.27376L4.05556 20.496C4.05556 20.9675 4.24286 21.4197 4.57625 21.7531C4.90965 22.0865 5.36184 22.2738 5.83333 22.2738L30.7222 22.2738C31.1937 22.2738 31.6459 22.0865 31.9793 21.7531C32.3127 21.4197 32.5 20.9675 32.5 20.496V6.27376C32.5 5.80227 32.3127 5.35008 31.9793 5.01668C31.6459 4.68329 31.1937 4.49599 30.7222 4.49599L5.83333 4.49599Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={smallportionVariants}
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
              >
                <div style={{background: "linear-gradient(71.17deg, #FEAF00 19.35%, #F8D442 90.12%)"}}
 className="md:max-w-[350px] cursor-pointer w-full  rounded-b-3xl rounded-t-[100px] relative py-7 md:h-[330px] h-[250px] px-8 shadow  shadow-slate-600 transition-all duration-500 ease-in-out hover:shadow-2xl hover:shadow-[#F8D442]">
                  <div className="text-[#121212] text-2xl font-semibold mt-5">
                    Outbound Sales Calls{" "}
                    <p className="text-[#2e2a2a] raleway lg:text-lg text-base font-normal mt-4">
                      Light communications: Quick technical solutions for smooth
                      operations and enhanced customer satisfaction.
                    </p>
                    <div className="md:w-[138px] border md:h-[138px] w-[100px] h-[100px] rounded-full bg-[#FEAF00] flex justify-center items-center absolute md:-left-10 left-0 -bottom-10">
                      <svg
                        className="arrow-right "
                        width="45"
                        height="46"
                        viewBox="0 0 45 46"
                        fill="transparent"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.49731 10.4C1.49731 8.17218 2.38231 6.03561 3.95762 4.4603C5.53292 2.885 7.6695 2 9.89731 2H35.0973C37.3251 2 39.4617 2.885 41.037 4.4603C42.6123 6.03561 43.4973 8.17218 43.4973 10.4V20.9H1.49731V10.4Z"
                          stroke="white"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M36.1474 32.45H29.8474"
                          stroke="white"
                          stroke-width="3"
                          stroke-linecap="round"
                        />
                        <path
                          d="M22.4973 20.8999H43.4973V35.5999C43.4973 37.8277 42.6123 39.9643 41.037 41.5396C39.4617 43.1149 37.3251 43.9999 35.0973 43.9999H22.4973V20.8999Z"
                          stroke="white"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M22.4973 20.8999H1.49731V35.5999C1.49731 37.8277 2.38231 39.9643 3.95762 41.5396C5.53292 43.1149 7.6695 43.9999 9.89731 43.9999H22.4973V20.8999Z"
                          stroke="white"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.9974 32.4503L8.84741 29.3003M8.84741 35.6003L11.9974 32.4503L8.84741 35.6003ZM11.9974 32.4503L15.1474 29.3003L11.9974 32.4503ZM11.9974 32.4503L15.1474 35.6003L11.9974 32.4503Z"
                          stroke="white"
                          stroke-width="3"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={smallportionVariants}
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
              >
                <div style={{background: "linear-gradient(71.17deg, #FEAF00 19.35%, #F8D442 90.12%)"}}
 className="md:max-w-[350px] cursor-pointer w-full  rounded-b-[100px] rounded-t-3xl shadow-slate-600 relative py-7 md:h-[330px] h-[250px] px-8 shadow-md transition-all duration-500 ease-in-out hover:shadow-2xl hover:shadow-[#F8D442]">
                  <div className="text-[#121212] text-2xl font-semibold mt-4">
                    Technical Support{" "}
                    <p className="text-[#2e2a2a] font-Raleway lg:text-lg text-base font-normal mt-2">
                      Streamlined Medical Billing Services for efficient claims
                      processing, compliance management, and optimized revenue
                      cycles.​
                    </p>
                    <div className="md:w-[138px] border md:h-[138px] w-[100px] h-[100px]  rounded-full bg-[#FEAF00] flex justify-center items-center absolute md:-right-10 right-0 -bottom-10">
                      <svg
                        className="tilt1-animation"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        width="45"
                        height="46"
                        x="0"
                        y="0"
                        viewBox="0 0 512 512"
                      >
                        <g>
                          <path
                            d="M366 396c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10z"
                            fill="white"
                            opacity="1"
                            data-original="#000000"
                            class
                          ></path>
                          <path
                            d="m390.622 363.663-47.53-15.84-17.063-34.127c15.372-15.646 26.045-36.348 29.644-57.941L357.801 243H376c16.542 0 30-13.458 30-30v-63C406 67.29 338.71 0 256 0c-82.922 0-150 67.097-150 150v63c0 13.036 8.361 24.152 20 28.28V253c0 16.542 13.458 30 30 30h8.782a108.487 108.487 0 0 0 16.774 25.974 103.947 103.947 0 0 0 4.406 4.741l-17.054 34.108-47.531 15.841C66.112 382.092 26 440.271 26 502c0 5.523 4.477 10 10 10h440c5.522 0 10-4.477 10-10 0-61.729-40.111-119.908-95.378-138.337zM386 213c0 5.514-4.486 10-10 10h-15.262c2.542-19.69 4.236-40.643 4.917-61.28.02-.582.036-1.148.054-1.72H386v53zm-250 10c-5.514 0-10-4.486-10-10v-53h20.298c.033 1.043.068 2.091.107 3.146l.004.107v.009c.7 20.072 2.372 40.481 4.856 59.737H136V223zm20 40c-5.514 0-10-4.486-10-10v-10h8.198l2.128 12.759a105.57 105.57 0 0 0 1.482 7.241H156zm-9.983-123H126.38C131.445 72.979 187.377 20 256 20c68.318 0 124.496 52.972 129.619 120h-19.635c-.72-55.227-45.693-100-101.033-100h-17.9c-55.339 0-100.315 44.773-101.034 100zM247.05 60h17.9c44.809 0 81.076 36.651 81.05 81.41 0 3.147-.025 5.887-.078 8.38l-.001.098-12.508-1.787c-33.98-4.852-66.064-20.894-90.342-45.172A10.003 10.003 0 0 0 236 100c-26.856 0-52.564 12.236-69.558 32.908C170.63 92.189 205.053 60 247.05 60zm-68.51 203c-5.006-16.653-10.734-65.653-12-97.053l13.459-17.946c12.361-16.476 31.592-26.713 52.049-27.888 26.917 25.616 61.739 42.532 98.537 47.786l14.722 2.104c-.984 20.885-2.995 41.843-5.876 61.118l-.003.02c-.916 6.197-1.638 10.185-3.482 21.324-5.296 31.765-28.998 60.49-60.287 68.313a81.338 81.338 0 0 1-39.313 0c-19.537-4.884-37.451-18.402-49.012-37.778h20.386c4.128 11.639 15.243 20 28.28 20h20c16.575 0 30-13.424 30-30 0-16.542-13.458-30-30-30h-20c-13.327 0-24.278 8.608-28.297 20H178.54zm56.619 78.016A101.171 101.171 0 0 0 256 343.2c5.471 0 10.943-.458 16.353-1.346l-17.67 18.687-19.524-19.525zm5.776 34.063-31.718 33.542a381.013 381.013 0 0 1-22.389-51.917l11.911-23.822 42.196 42.197zm70.631-45.585 13.604 27.209a380.908 380.908 0 0 1-22.392 51.933l-33.948-33.948 42.736-45.194zM226 273c0-5.521 4.478-10 10-10h20c5.514 0 10 4.486 10 10 0 5.522-4.479 10-10 10h-20c-5.514 0-10-4.486-10-10zM46.4 492c3.963-49.539 36.932-94.567 81.302-109.363l42.094-14.028a400.869 400.869 0 0 0 28.463 61.74l.056.101.001.002a400.974 400.974 0 0 0 27.372 41.799L237.99 492H46.4zm209.6-8.914-13.562-21.773a10.133 10.133 0 0 0-.486-.711 381.284 381.284 0 0 1-22.532-33.662l35.663-37.714 37.578 37.578A380.863 380.863 0 0 1 270.05 460.6c-.49.653.205-.376-14.05 22.486zM274.01 492l12.301-19.748a400.826 400.826 0 0 0 27.564-42.132c.05-.088.097-.178.147-.266l.018-.032a400.543 400.543 0 0 0 28.164-61.213l42.093 14.028c44.371 14.796 77.34 59.824 81.303 109.363H274.01z"
                            fill="white"
                            opacity="1"
                            data-original="#000000"
                            class
                          ></path>
                          <path
                            d="M435.546 451.531c-6.683-13.377-16.472-25.261-28.309-34.367-4.378-3.369-10.656-2.55-14.023 1.828-3.368 4.378-2.549 10.656 1.828 14.024 9.454 7.273 17.272 16.766 22.611 27.453 2.473 4.949 8.483 6.941 13.415 4.477 4.94-2.468 6.945-8.474 4.478-13.415z"
                            fill="white"
                            opacity="1"
                            data-original="#000000"
                            class
                          ></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </Grid>
      </Container>

      <div className="pt-16 pb-10 mt-20 building">
        <Container
          disableGutters={true}
          maxWidth="lg"
          sx={{ px: { xs: "10px", lg: "0px" }, mb: 5 }}
        >
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className="flex flex-col-reverse md:flex-row ">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-10 py-8 flex flex-col justify-center bg-white  min-h-[400px] rounded-l-lg"
                >
                  <p className="text-2xl md:text-4xl text-[#121212]  ultra-bold tracking-tighter uppercase">
                    Our Vision
                  </p>
                  <p className="text-sm md:text-base text-[#121212] font-Raleway leading-normal  mt-5">
                    As a leading contributor to driving change, we understand
                    the importance of continued self-reinvention. We accomplish
                    this by investing in next-generation capabilities that
                    enhance our differentiation in key growth areas and by
                    investing in talent to ensure we have specialized skills to
                    resolve business problems. Backed by our expertise and
                    diverse global workforce.
                  </p>
                  <div className=" mt-10 flex flex-col md:flex-row justify-center md:gap-10 md:items-center">
                    <div className="flex gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-36 animate-pulse text-xl font-black"
                      >
                        <circle
                          cx="256"
                          cy="256"
                          r="208"
                          fill="white"
                          stroke=" #FEAF00"
                          strokeWidth="40"
                        />
                        <text
                          x="50%"
                          y="50%"
                          textAnchor="middle"
                          alignmentBaseline="middle"
                          className="ultra text-[80px] text-white leading-4 font-black"
                        >
                          100%
                        </text>
                      </svg>
                      <p className="raleway text-[#121212] font-medium">
                        client retention
                      </p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-36 animate-pulse text-xl font-black"
                      >
                        <circle
                          cx="256"
                          cy="256"
                          r="208"
                          fill="white"
                          stroke="#FEAF00"
                          strokeWidth="40"
                        />
                        <text
                          x="50%"
                          y="50%"
                          textAnchor="middle"
                          alignmentBaseline="middle"
                          className="ultra text-[80px] leading-4 font-black"
                        >
                          100%
                        </text>
                      </svg>
                      <p className="raleway text-[#121212] font-medium">
                        success chances
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-10 py-8 flex flex-col min-h-[400px] justify-center bg-[#2e2a2a]  rounded-r-lg"
                >
                  <p className="text-2xl md:text-4xl  ultra-bold tracking-tighter uppercase">
                    Embracing a Culture of Success
                  </p>
                  <p className="text-sm md:text-base text-[#f5f1e4] font-Raleway leading-normal  mt-5">
                    Light Communications places utmost importance on client
                    satisfaction and a positive work culture. Our commitment to
                    excellence ensures 100% client satisfaction, as evidenced by
                    testimonials from delighted clients. We prioritize fostering
                    a positive company culture that motivates our dedicated
                    employees to achieve our objectives. Leveraging our
                    extensive expertise and diverse global workforce, we excel
                    in resolving a wide range of business challenges with
                    unmatched professionalism.
                  </p>
                  <div className=" mt-3 flex flex-col md:flex-row md:gap-10 justify-center md:items-center">
                    <div className="flex gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-36 animate-pulse text-xl font-black"
                      >
                        <circle
                          cx="256"
                          cy="256"
                          r="208"
                          fill="white"
                          stroke=" #FEAF00"
                          strokeWidth="40"
                        />
                        <text
                          x="50%"
                          y="50%"
                          textAnchor="middle"
                          alignmentBaseline="middle"
                          className="ultra text-[80px] text-white leading-4 font-black"
                        >
                          100%
                        </text>
                      </svg>
                      <p className="raleway">Client Feedback</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-36 animate-pulse text-xl font-black"
                      >
                        <circle
                          cx="256"
                          cy="256"
                          r="208"
                          fill="white"
                          stroke="#FEAF00"
                          strokeWidth="40"
                        />
                        <text
                          x="50%"
                          y="50%"
                          textAnchor="middle"
                          alignmentBaseline="middle"
                          className="ultra text-[80px] leading-4 font-black"
                        >
                          100%
                        </text>
                      </svg>
                      <p className="raleway text-[#f5f1e4] font-medium">
                        employee satisfication
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="py-20 md:py-32 pt-28 md:pt-44 textured-background">
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
        <Container
          disableGutters={true}
          maxWidth="lg"
          sx={{ px: { xs: "10px", lg: "0px" }, pt: 18, marginBottom: "-100px" }}
        >
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className="flex flex-col justify-around gap-10 items-center">
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "100px",
                    px: 5,
                    py: { sm: 1, md: 2 },
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    textTransform: "capitalize !important",
                    letterSpacing: "2px",
                    border: "2px solid white",
                    color: "white",
                    "&:hover": {
                      color: "white",
                      border: "2px solid #322C2B",
                      backgroundColor: "#322C2B",
                    },
                  }}
                >
                  Contact our sales
                </Button>
                <div className=" px-3 items-center md:px-10 py-8 -mb-28 rounded-3xl border-2 gap-5 flex flex-col md:flex-row justify-between  w-full bg-[#121212] border-[#FEAF00]">
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
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default SecondSection;
