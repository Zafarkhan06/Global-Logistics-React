import React, { useRef } from "react";
import {
  Container,
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
} from "@mui/material";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import ConnectWithoutContactOutlinedIcon from "@mui/icons-material/ConnectWithoutContactOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import professionalPhoto from "../../asset/images/professional-photo.jpg";
import Avatar from "@mui/material/Avatar";
import useScrollTriggeredCountUp from "../components/useScrollTriggerCountUp";
import { useNavigate } from "react-router";
import zeeshan from "../../asset/images/Zeeshan-Shafique.jpg";
import sean from "../../asset/images/sean-waaz.jpg";
import shaloom from "../../asset/images/shaloom-qiaser.jpg";
import azeem from "../../asset/images/azeem.jpg";
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import PeopleIcon from '@mui/icons-material/People';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

function AboutUs() {
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
  const textsectionVariants = {
    offscreen: {
      x: 100,
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
      y: 150,
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
  const cardsData = [
    {
      image: zeeshan,
      title: "Zeeshan Shafique (CEO)",
      description:
        "Light communications CEO, with vision and drives excellence in the BPO industry.",
    },
    {
      image: sean,
      title: "Sean Waaz (CMO)",
      description:
        "Light communications CMO,is a dynamic leader shaping innovative marketing strategies.",
    },
    {
      image: shaloom,
      title: "Shaloom Qaiser (OM)",
      description:
        "Light communications OM,  ensures seamless operations and exceptional service delivery.",
    },
    {
      image: azeem,
      title: "Azeem Zulfiqar (CFO)",
      description:
        "Light communications CFO, oversees financial strategies with precision, ensuring success.",
    },
  ];
  return (
    <div className="bg-[#2e2a2a]">
      <div className="first-background py-28 md:py-52">
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
                  About us
                </p>
                <p className="text-xl tracking-wide mt-2 text-[#f5f1e4] raleway">
                  We <strong>Learn</strong> and <strong>Grow</strong>{" "}
                  tremendously. <br />
                  Our vast knowledge, experience, & strategies
                  <br /> allow us to achieve extraordinary results for our
                  clients.
                </p>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className=" py-16 md:py-36">
        <Container
          disableGutters={true}
          maxWidth="lg"
          sx={{ px: { xs: "10px", lg: "0px" } }}
        >
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className="flex flex-col-reverse md:flex-row gap-16  justify-between items-start">
                <motion.div
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.1 }}
                  className="flex flex-col md:w-1/2 gap-5"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    variants={smallportionVariants}
                    className="bg-[#121212]   px-7 py-3 rounded-xl border  border-[#FEAF00] gap-5 flex items-start shadow"
                  >
                    <motion.div className="bg-[#FEAF00] rounded-full p-4">
                      <AdsClickIcon
                        sx={{ fontSize: "40px", color: "#2e2a2a" }}
                      />
                    </motion.div>
                    <div>
                      <p className="text-xl md:text-2xl text-white  raleway font-semibold  capitalize">
                        Cost Savings
                      </p>
                      <p className="raleway text-sm text-[#f5f1e4]">
                        We believe in providing cost-effective solutions with no
                        compromise on quality.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    variants={smallportionVariants}
                    className="bg-[#121212]   px-7 py-3 rounded-xl border-[#FEAF00]  border gap-5 flex items-start shadow"
                  >
                    <motion.div className="bg-[#FEAF00] rounded-full p-4">
                      <ConnectWithoutContactOutlinedIcon
                        sx={{ fontSize: "40px", color: "text-[#2e2a2a]" }}
                      />
                    </motion.div>
                    <div>
                      <p className="text-xl md:text-2xl text-white raleway font-semibold  capitalize">
                        Customer Satisfaction
                      </p>
                      <p className="raleway text-[#f5f1e4] text-sm">
                        The satisfaction of our clients is our utmost priority
                        and this truly is the basis of our success.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    variants={smallportionVariants}
                    className="bg-[#121212]   px-7 py-3  border-[#FEAF00]  rounded-xl border gap-5 flex items-start shadow"
                  >
                    <motion.div className="bg-[#FEAF00] rounded-full p-4">
                      <MonetizationOnOutlinedIcon
                        sx={{ fontSize: "40px", color: "#2e2a2a" }}
                      />
                    </motion.div>
                    <div>
                      <p className="text-xl md:text-2xl text-white raleway font-semibold capitalize">
                        Increase in Sales
                      </p>
                      <p className="raleway text-[#f5f1e4] text-sm">
                        Our experts at Light communications apply tested market
                        strategies tailored to your business to bring more
                        revenue.
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
                <motion.div
                  initial="offscreen"
                  whileInView="onscreen"
                  variants={textsectionVariants}
                  viewport={{ once: true, amount: 0.4 }}
                  className="md:w-1/2"
                >
                  <p className="text-3xl md:text-5xl ultra-dark uppercase">
                    Why ‘light communications’
                  </p>
                  <p className="raleway text-[#f5f1e4] text-base md:text-lg mt-3">
                    At the heart of our mission lies an unwavering dedication to
                    client satisfaction, paralleled by an uncompromising
                    commitment to the highest standards of excellence that
                    define our business. We are steadfast in our pursuit of
                    creating an environment where top-tier talent not only
                    thrives but is also inspired to excel. Backed by rigorous
                    training and unwavering dedication, our proficient team
                    members are adept at addressing our clients' diverse needs,
                    consistently surpassing expectations.
                  </p>
                  <div className="mt-5">
                    <Button
                      onClick={() => navigate("/contactus")}
                      className="raleway"
                      variant="contained"
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
                      consult with us
                    </Button>
                  </div>
                </motion.div>
              </div>

              <div className="flex flex-col md:flex-row gap-16  justify-between items-center mt-20 md:mt-36">
                <motion.div
                  initial="offscreen"
                  whileInView="onscreen"
                  variants={textsectionVariants}
                  viewport={{ once: true, amount: 0.4 }}
                  className="md:w-1/2"
                >
                  <p className="text-3xl md:text-5xl ultra-dark uppercase">
                    Our Story
                  </p>
                  <p className="raleway text-[#f5f1e4] text-base md:text-lg mt-3">
                    Light Communications was founded in 2022 with a vision to create jobs, stimulate economic growth,
                    and empower individuals and communities to break the cycle of poverty. Since then, we've grown into a
                    team of 4 dedicated professionals passionate about Customer Services.

                  </p>
                  <div className="mt-5">
                    <Button
                      onClick={() => navigate("/contactus")}
                      className="raleway"
                      variant="contained"
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
                      consult with us
                    </Button>
                  </div>
                </motion.div>
                {/* big section */}
                <motion.div
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.1 }}
                  className="flex flex-col md:w-1/2 gap-5"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    variants={smallportionVariants}
                    className="bg-[#121212]   px-7 py-3 rounded-xl border  border-[#FEAF00] gap-5 flex items-start shadow"
                  >
                    <motion.div className="bg-[#FEAF00] rounded-full p-2">
                      <EmojiObjectsIcon
                        sx={{ fontSize: "30px", color: "#2e2a2a" }}
                      />
                    </motion.div>
                    <div>
                      <p className="text-xl md:text-2xl text-white  raleway font-semibold  capitalize">
                        Innovation
                      </p>
                      <p className="raleway text-sm text-[#f5f1e4]">
                        We embrace creativity and cutting-edge solutions.

                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    variants={smallportionVariants}
                    className="bg-[#121212]   px-7 py-3 rounded-xl border-[#FEAF00]  border gap-5 flex items-start shadow"
                  >
                    <motion.div className="bg-[#FEAF00] rounded-full p-2">
                      <ConnectWithoutContactOutlinedIcon
                        sx={{ fontSize: "30px", color: "text-[#2e2a2a]" }}
                      />
                    </motion.div>
                    <div>
                      <p className="text-xl md:text-2xl text-white raleway font-semibold  capitalize">
                        Excellence
                      </p>
                      <p className="raleway text-[#f5f1e4] text-sm">
                        We strive for exceptional quality and results.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    variants={smallportionVariants}
                    className="bg-[#121212]   px-7 py-3  border-[#FEAF00]  rounded-xl border gap-5 flex items-start shadow"
                  >
                    <motion.div className="bg-[#FEAF00] rounded-full p-2">
                      <IntegrationInstructionsIcon
                        sx={{ fontSize: "30px", color: "#2e2a2a" }}
                      />
                    </motion.div>
                    <div>
                      <p className="text-xl md:text-2xl text-white raleway font-semibold capitalize">
                        Integrity
                      </p>
                      <p className="raleway text-[#f5f1e4] text-sm">
                        We operate with transparency and ethical standards.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    variants={smallportionVariants}
                    className="bg-[#121212]   px-7 py-3  border-[#FEAF00]  rounded-xl border gap-5 flex items-start shadow"
                  >
                    <motion.div className="bg-[#FEAF00] rounded-full p-2">
                      <PeopleIcon
                        sx={{ fontSize: "30px", color: "#2e2a2a" }}
                      />
                    </motion.div>
                    <div>
                      <p className="text-xl md:text-2xl text-white raleway font-semibold capitalize">
                        Community
                      </p>
                      <p className="raleway text-[#f5f1e4] text-sm">
                        We foster collaboration and support
                      </p>
                    </div>
                  </motion.div>
                </motion.div>


              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="pb-20">
        <Container
          disableGutters={true}
          maxWidth="lg"
          sx={{ px: { xs: "10px", lg: "0px" } }}
        >
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <p className="text-3xl text-center mb-7 md:text-5xl  ultra-dark uppercase">
                Meet With Our Team
              </p>
              <div className="flex md:flex-row flex-col justify-center gap-10 md:gap-5 lg:gap-10">
                {cardsData.map((card, index) => (
                  <Card
                    key={index}
                    sx={{
                      maxWidth: { lg: 250, sm: "100%" },
                      backgroundColor: "#121212",
                      border: "1px solid #FEAF00 ",
                    }}
                  >
                    <CardActionArea>
                      {/* <CardMedia
                        component="img"
                        height="100"
                        width="400"
                        image={card.image}
                        alt="Card Image"
                      /> */}
                      <img
                        loading="lazy"
                        src={card.image}
                        className="h-48 w-full object-cover object-center"
                        alt=""
                      />
                      <CardContent sx={{ borderTop: "1px solid #FEAF00" }}>
                        <Typography
                          gutterBottom
                          variant="h7"
                          component="div"
                          className="raleway  font-semibold capitalize tracking-tighter text-white"
                        >
                          {card.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "#f5f1e4" }}>
                          {card.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                ))}
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="py-16 building">
        <Container
          disableGutters={true}
          maxWidth="lg"
          sx={{ px: { xs: "10px", lg: "0px" } }}
        >
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className="flex  md:justify-end items-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-10 py-8 flex flex-col bg-[#2e2a2a] md:w-7/12 rounded-lg"
                >
                  <p className="text-2xl md:text-4xl  ultra-bold tracking-tighter uppercase">
                    Embracing a Culture of Success{" "}
                  </p>
                  <p className="text-sm md:text-base text-[#f5f1e4] raleway leading-normal  mt-3">
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
                  <div className=" mt-3 flex flex-col md:flex-row justify-center md:items-center">
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
                      <p className="raleway">Employee satisfaction</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="">
        <Container
          disableGutters={true}
          maxWidth="lg"
          sx={{ px: { xs: "10px", lg: "0px" }, mt: 5 }}
        >
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className="flex items-center justify-center py-5">
                <div className="w-full px-5 py-16 md:py-16 text-[#f5f1e4]">
                  <div className="w-full max-w-6xl mx-auto">
                    <div className="text-center max-w-xl mx-auto">
                      <h1 className="text-2xl md:text-5xl font-bold mb-5 text-white">
                        What people are saying.
                      </h1>
                      <h3 className="text-xl mb-5 font-light">
                        We have a team that is appreciated by thousands of
                        customer.
                      </h3>
                      <div className="text-center mb-10">
                        <span className="inline-block w-1 h-1 rounded-full bg-[#FEAF00] ml-1"></span>
                        <span className="inline-block w-3 h-1 rounded-full bg-[#FEAF00] ml-1"></span>
                        <span className="inline-block w-40 h-1 rounded-full bg-[#FEAF00]"></span>
                        <span className="inline-block w-3 h-1 rounded-full bg-[#FEAF00] ml-1"></span>
                        <span className="inline-block w-1 h-1 rounded-full bg-[#FEAF00] ml-1"></span>
                      </div>
                    </div>
                    <div className="-mx-3 md:flex items-start">
                      <div className="px-3 md:w-1/3">
                        <div className="w-full mx-auto rounded-lg bg-[#121212] p-5 text-gray-800 font-light mb-6">
                          <div className="w-full flex mb-4 items-center">
                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                              <img
                                loading="lazy"
                                src="https://i.pravatar.cc/100?img=1"
                                alt=""
                              />
                            </div>
                            <div className="flex-grow pl-3">
                              <h6 className="font-bold text-sm uppercase text-white">
                                Kenzie Edgar.
                              </h6>
                            </div>
                          </div>
                          <div className="w-full">
                            <p className="text-sm leading-tight text-[#f5f1e4]">
                              <span className="text-lg leading-none italic font-bold text-[#FEAF00] mr-1">
                                "
                              </span>
                              Our experience with Light communications has been
                              nothing short of outstanding. The team's
                              professionalism, attention to detail, and
                              commitment to delivering results have made them an
                              invaluable partner for our business.
                              <span className="text-lg leading-none italic font-bold text-[#FEAF00] ml-1">
                                "
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="w-full mx-auto rounded-lg bg-[#121212] p-5 text-gray-800 font-light mb-6">
                          <div className="w-full flex mb-4 items-center">
                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                              <img
                                loading="lazy"
                                src="https://i.pravatar.cc/100?img=2"
                                alt=""
                              />
                            </div>
                            <div className="flex-grow pl-3">
                              <h6 className="font-bold text-sm uppercase text-white">
                                Stevie Tifft.
                              </h6>
                            </div>
                          </div>
                          <div className="w-full">
                            <p className="text-sm leading-tight text-[#f5f1e4]">
                              <span className="text-lg leading-none italic font-bold text-[#FEAF00] mr-1">
                                "
                              </span>
                              We've been working with Light communications for
                              inbound services for over a year now, and they
                              have consistently impressed us.
                              <span className="text-lg leading-none italic font-bold text-[#FEAF00] ml-1">
                                "
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="px-3 md:w-1/3">
                        <div className="w-full mx-auto rounded-lg bg-[#121212] p-5 text-[#f5f1e4] font-light mb-6">
                          <div className="w-full flex mb-4 items-center">
                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                              <img
                                loading="lazy"
                                src="https://i.pravatar.cc/100?img=3"
                                alt=""
                              />
                            </div>
                            <div className="flex-grow pl-3">
                              <h6 className="font-bold text-sm uppercase text-white">
                                Tommie Ewart.
                              </h6>
                            </div>
                          </div>
                          <div className="w-full">
                            <p className="text-sm leading-tight">
                              <span className="text-lg leading-none italic font-bold text-[#FEAF00] mr-1">
                                "
                              </span>
                              Light communications has been instrumental in
                              executing our outbound campaigns with precision
                              and effectiveness.
                              <span className="text-lg leading-none italic font-bold text-[#FEAF00] ml-1">
                                "
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="w-full mx-auto rounded-lg bg-[#121212] p-5 text-[#f5f1e4] font-light mb-6">
                          <div className="w-full flex mb-4 items-center">
                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                              <img
                                loading="lazy"
                                src="https://i.pravatar.cc/100?img=4"
                                alt=""
                              />
                            </div>
                            <div className="flex-grow pl-3">
                              <h6 className="font-bold text-sm uppercase text-white">
                                Charlie Howse.
                              </h6>
                            </div>
                          </div>
                          <div className="w-full">
                            <p className="text-sm leading-tight">
                              <span className="text-lg leading-none italic font-bold text-[#FEAF00] mr-1">
                                "
                              </span>
                              We cannot recommend Light communications highly
                              enough for their exceptional lead generation
                              services. Their strategic approach, combined with
                              cutting-edge technology, has helped us identify
                              quality leads and accelerate our sales growth.
                              <span className="text-lg leading-none italic font-bold text-[#FEAF00] ml-1">
                                "
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="px-3 md:w-1/3">
                        <div className="w-full mx-auto rounded-lg bg-[#121212] p-5 text-[#f5f1e4] font-light mb-6">
                          <div className="w-full flex mb-4 items-center">
                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                              <img
                                loading="lazy"
                                src="https://i.pravatar.cc/100?img=5"
                                alt=""
                              />
                            </div>
                            <div className="flex-grow pl-3">
                              <h6 className="font-bold text-sm uppercase text-white">
                                Nevada Herbertson.
                              </h6>
                            </div>
                          </div>
                          <div className="w-full">
                            <p className="text-sm leading-tight">
                              <span className="text-lg leading-none italic font-bold text-[#FEAF00] mr-1">
                                "
                              </span>
                              Our experience collaborating with Light
                              communications on complex projects has been
                              remarkable. Their team's expertise in handling
                              intricate tasks, combined with their streamlined
                              processes, ensured smooth project execution from
                              start to finish.
                              <span className="text-lg leading-none italic font-bold text-[#FEAF00] ml-1">
                                "
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="w-full mx-auto rounded-lg bg-[#121212] p-5 text-[#f5f1e4] font-light mb-6">
                          <div className="w-full flex mb-4 items-center">
                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                              <img
                                loading="lazy"
                                src="https://i.pravatar.cc/100?img=6"
                                alt=""
                              />
                            </div>
                            <div className="flex-grow pl-3">
                              <h6 className="font-bold text-sm uppercase text-white">
                                Kris Stanton.
                              </h6>
                            </div>
                          </div>
                          <div className="w-full">
                            <p className="text-sm leading-tight">
                              <span className="text-lg leading-none italic font-bold text-[#FEAF00] mr-1">
                                "
                              </span>
                              Working with Light communications has been a
                              refreshing experience. We're grateful for their
                              partnership and look forward to future.
                              <span className="text-lg leading-none italic font-bold text-[#FEAF00] ml-1">
                                "
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="text-center ">
        <ReactTyped
          className="ultra-bold text-3xl md:text-5xl text-center"
          startWhenVisible
          strings={["Our results speak for itself"]}
          typeSpeed={40}
        />
        <div className="py-20 md:py-44 mt-20  textured-background">
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
                      <p className="ultra-bold text-4xl md:text-6xl">
                        {sales}+
                      </p>
                      <p className="ultra-medium text-center text-[#f5f1e4] ">
                        Insurance Sales per month
                      </p>
                    </motion.div>
                    <motion.div
                      ref={ref}
                      className="border-r border-[#FEAF00] md:border-0 flex flex-col items-center px-5 py-5 text-start "
                    >
                      <p className="ultra-bold text-4xl md:text-6xl">
                        {leads}+
                      </p>
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
      </div>
    </div>
  );
}

export default AboutUs;
