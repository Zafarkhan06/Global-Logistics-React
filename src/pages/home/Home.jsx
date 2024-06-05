import { Container, Grid, Button, Rating } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import truck from "../../asset/images/first-truck.webp";
import usaFlag from "../../asset/images/usa-flag.webp";
import SvgComponent from "../components/SvgComponent";
import capPerson from "../../asset/images/cap-person.webp";
import threeTrucks from "../../asset/images/three-trucks.webp"
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import HandshakeIcon from '@mui/icons-material/Handshake';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import talkingGirl from "../../asset/images/talking-girl.png";
import { useNavigate } from "react-router";
import Face4Icon from '@mui/icons-material/Face4';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen bg-white">
        <Container
          disableGutters={true}
          maxWidth="lg"
          sx={{ px: { xs: "10px", lg: "0px" } }}
        >
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className="flex pt-6 items-center  flex-col lg:flex-row lg:items-start">
                <div className="lg:w-6/12 lg:mt-10">
                  <h1 className="text-2xl lg:text-3xl xl:text-[40px] tracking-normal font-bold italic text-[#292929] font-Monts leading-tight text-center md:text-start mt-10">Welcome to the <span className="underline decoration-[#cc3333]">Most Reliable</span>  Dispatch Company in  North America.
                  </h1>
                  <p className="text-center md:text-start text-base lg:text-base xl:text-lg text-[#292929] font-Raleway mt-4 lg:mt-8">We find the best paying loads in the market.
                  </p>
                  <p className="text-center md:text-start  text-base lg:text-base xl:text-lg text-[#292929] font-Raleway">Get a dedicated dispatcher assigned for you and don't worry <br /> any more about spending time looking for loads or empty miles.
                  </p>
                  <div className="mt-6 flex justify-center md:justify-start lg:mt-10">
                    <Button variant="contained" onClick={() => navigate("/contactus")}
                      className="font-Raleway" sx={{

                        py: 1,
                        boxShadow: "none",
                        fontSize: { sm: "0.75rem", md: "1rem", lg: "1rem", xl: "1rem" },
                        fontWeight: "bold",
                        width: "220px",
                        letterSpacing: "0px",
                        fontFamily: "Raleway",
                        textTransform: "none",

                        background:
                          "#cc3333",
                        color: "white",
                        "&:hover": {
                          background:
                            "#cc3333",
                          boxShadow: "none",
                        },
                      }}> Hire a Dispatcher today</Button>
                  </div>
                </div>
                <div className="lg:w-6/12 mt-32 md:mt-28 relative">
                  <SvgComponent className="absolute top-0 w-1/3 opacity-10 z-0 left-10 " />
                  <SvgComponent className="absolute -top-32 w-20 opacity-20 z-0 -left-5 " />
                  <SvgComponent className="absolute -top-32 w-20 opacity-30 z-0 left-96 " />
                  <LazyLoadImage
                    src={truck}
                    alt="muntazim logo"
                    className="w-full md:w-full lg:w-full z-20"
                  />
                  <LazyLoadImage
                    src={usaFlag}
                    alt="muntazim logo"
                    className=" absolute md:-top-20 lg:-top-32 -top-32 z-10 transform -rotate-12 left-36 md:left-44 lg:left-36 w-52 cursor-pointer"
                  />
                  <SvgComponent className="absolute top-56 w-20 opacity-30 z-0 -left-32 " />
                </div>

              </div>
              <div className="flex justify-center gap-10 flex-col md:flex-row py-10 items-center md:items-end relative" >
                <SvgComponent className="absolute top-0 w-1/3 opacity-40 z-0 -left-20" />
                <div className="flex items-end gap-4 mt-10">
                  <p className="md:text-7xl text-6xl lg:text-8xl font-black font-Inter text-[#292929] ">53'</p>
                  <p className="md:text-3xl text-xl lg:text-4xl font-bold font-Monts italic text-[#292929] ">Dry Vans, Reefers, <br /> and Flatbeds Only.</p>
                </div>
                <p className="text-lg font-medium font-Raleway text-center md:text-start text-[#292929] ">A Bigger <br className="hidden md:block" /> Equipment makes  <br className="hidden md:block" /> you more Money!</p>
                <SvgComponent className="absolute top-30 w-1/3 opacity-40 z-0 " />
              </div>
              <div className="md:mt-24 flex  flex-col relative md:flex-row items-center justify-between">
                <SvgComponent className="absolute -top-10 right-96 w-20 opacity-40 z-0 " />
                <div className="md:w-1/2">
                  <LazyLoadImage
                    src={capPerson}
                    alt="muntazim logo"
                    className="w-full md:w-full lg:w-full z-20"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <p className="md:text-3xl text-2xl lg:text-4xl font-bold font-Monts text-center md:text-start italic text-[#292929] ">Hit the road on your terms, you're the boss
                  </p>
                  <p className="md:text-base text-sm lg:text-xl font-normal font-Raleway text-center mt-5 md:text-start text-[#292929] ">Loads, rates and routes are your choice, no force dispatching. We make sure you get the best freight at the best rate and get paid on time. Documentation, prices and fees are disclosed upfront.
                  </p>
                  <div className="mt-6 flex justify-center md:justify-start lg:mt-10">
                    <Button variant="contained" onClick={() => navigate("/price-and-plans")} className="font-Raleway" sx={{

                      py: 1,
                      boxShadow: "none",
                      fontSize: { sm: "0.75rem", md: "1rem", lg: "1rem", xl: "1rem" },
                      fontWeight: "bold",

                      letterSpacing: "0px",
                      fontFamily: "Raleway",
                      textTransform: "none",

                      background:
                        "#cc3333",
                      color: "white",
                      "&:hover": {
                        background:
                          "#cc3333",
                        boxShadow: "none",
                      },
                    }}> Click here to change routes</Button>
                  </div>
                </div>
                <SvgComponent className="absolute -bottom-3 right-10 w-32  opacity-60 " />
              </div>
              <div className="truck-bg rounded-2xl shadow-2xl mt-20 realtive">
                <div className="py-20 px-6 md:px-20 flex flex-col  md:items-end">

                  <p className="md:text-3xl text-2xl lg:text-4xl font-bold font-Monts text-center md:text-right italic text-white">Call us today, get loaded <br /> & be profitable now
                  </p>
                  <div className="mt-6 flex justify-center md:justify-start lg:mt-10">
                    <a href="tel:+18442644453">
                      <Button variant="contained" className="font-Raleway" sx={{

                        py: 1,
                        boxShadow: "none",
                        fontSize: { sm: "0.75rem", md: "1rem", lg: "1rem", xl: "1rem" },
                        fontWeight: "bold",

                        letterSpacing: "0px",
                        fontFamily: "Raleway",
                        textTransform: "none",
                        px: 5,
                        background:
                          "#cc3333",
                        color: "white",
                        "&:hover": {
                          background:
                            "#cc3333",
                          boxShadow: "none",
                        },
                      }}> Call Now!</Button>
                    </a>
                  </div>
                </div>

              </div>
            </Grid>
          </Grid>
        </Container>
        <div className="flex py-20 md:py-32 justify-center mt-20 bg-[#f0dac2] items-start">
          <Container
            disableGutters={true}
            maxWidth="lg"
            sx={{ px: { xs: "10px", lg: "0px" } }}
          >
            <Grid container sx={{ justifyContent: "center" }}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className="flex justify-center gap-8 md:gap-16 items-start flex-col lg:flex-row">
                  <div className="w-full lg:w-1/4">
                    <Rating name="read-only" value={5} readOnly />
                    <p className="md:text-base text-sm font-bold lg:text-lg font-Raleway text-start text-[#cc3333]">
                      Lopez Hauling Inc
                    </p>
                    <p className="text-[#cc3333] text-xs md:text-sm">
                      Our company, Lopez Hauling, just started back in July of 2021 and Genius Dispatch has been with us since the beginning. They have been so helpful with us being a start-up company and not knowing much about the industry to knowing where the money is and what we need to do to get it! Jessica, especially has been so amazing and her along with many others are very quick to respond and always take care of any issue we run into. To the point I don’t have to worry about much but making money!
                    </p>
                  </div>
                  <div className="w-full lg:w-1/4">
                    <Rating name="read-only" value={5} readOnly />
                    <p className="md:text-base text-sm font-bold lg:text-lg font-Raleway  text-start text-[#cc3333]">
                      Spartan Cargo LLC
                    </p>
                    <p className="text-[#cc3333] text-xs md:text-sm">
                      I can’t say enough to express my positive experience with this dispatch service. With the challenges of expenses going through the roof these days, having support from a dedicated staff is very important.
                    </p>
                  </div>
                  <div className="w-full lg:w-1/4">
                    <Rating name="read-only" value={5} readOnly />
                    <p className="md:text-base text-sm font-bold lg:text-lg font-Raleway text-start text-[#cc3333]">
                      National Brothers Inc
                    </p>
                    <p className="text-[#cc3333] text-xs md:text-sm">
                      Our trucking company was in need of a dispatching company to dispatch our fleet of trucks and found Genius Dispatching in an article written about top dispatching companies. We have only worked with Genius for a short time but thus far, they have not disappointed. David and Jessica have both been readily available to answer questions our members have regarding their process. They have been nothing but professional and are quick to reach out to our team about concerns and/or issues. We look forward to continuing a great profitable relationship with their team.
                    </p>
                  </div>
                  <div className="w-full lg:w-1/4">
                    <Rating name="read-only" value={5} readOnly />
                    <p className="md:text-base text-sm font-bold lg:text-lg font-Raleway text-start text-[#cc3333]">
                      Venados Logistics LLC
                    </p>
                    <p className="text-[#cc3333] text-xs md:text-sm">
                      Excellent service that they provide in all aspects, Elisa who is my dispatch assigned always on the lookout for having the best-paid loads, always waiting for me to be loaded and unloaded on time and also pending along with Jessica who always pays us the total on time of the load plus the extra charges that we have for lumper or detention.
                    </p>
                  </div>
                </div>

                <div className="relative flex justify-center">
                  <SvgComponent className="absolute left-0 w-36 top-10 opacity-60 " />
                  <LazyLoadImage
                    src={threeTrucks}
                    alt="muntazim logo"
                    className="w-full absolute top-0 md:w-full lg:w-3/6 z-20"
                  />
                  <SvgComponent className="absolute right-0 w-36 top-52 opacity-30 " />
                </div>
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
              <div className="lg:mt-44 md:mt-60 mt-36 flex flex-col justify-center items-center">
                <p className="md:text-3xl text-2xl lg:text-4xl font-bold font-Monts text-center  italic text-[#292929]">Getting started is easy
                </p>
                <div className="mt-16 flex flex-col md:flex-row gap-10 lg:gap-28 items-start">
                  <div className="flex justify-center items-center flex-col">
                    <FolderCopyIcon sx={{ fontSize: "70px", color: "#cc3333" }} />
                    <p className="md:text-xl text-lg mt-5 mb-4 lg:text-2xl font-semibold font-Raleway text-center   text-[#292929]">Send Documents
                    </p>
                    <p className="text-lg font-Raleway text-center  italic text-[#292929]">MC Authority, Certificate of <br /> Insurance and W-9 Form
                    </p>
                    <div className="mt-6 flex justify-center md:justify-start lg:mt-10">
                      <Button variant="contained" className="font-Raleway" sx={{

                        py: 1,
                        boxShadow: "none",
                        fontSize: { sm: "0.75rem", md: "1rem", lg: "1rem", xl: "1rem" },
                        fontWeight: "bold",

                        letterSpacing: "0px",
                        fontFamily: "Raleway",
                        textTransform: "none",
                        px: 6,
                        background:
                          "#cc3333",
                        color: "white",
                        "&:hover": {
                          background:
                            "#cc3333",
                          boxShadow: "none",
                        },
                      }}> Send Documents</Button>
                    </div>
                  </div>
                  <div className="flex justify-center items-center flex-col">
                    <HandshakeIcon sx={{ fontSize: "70px", color: "#cc3333" }} />
                    <p className="md:text-xl text-lg mt-5 mb-4 lg:text-2xl font-semibold font-Raleway text-center   text-[#292929]">Sign Agreement
                    </p>
                    <p className="text-lg font-Raleway text-center  italic text-[#292929]">Sign a quick and easy dispatch <br /> service level agreement.

                    </p>
                    <div className="mt-6 flex justify-center md:justify-start lg:mt-10">
                      <Button variant="contained" className="font-Raleway" sx={{

                        py: 1,
                        boxShadow: "none",
                        fontSize: { sm: "0.75rem", md: "1rem", lg: "1rem", xl: "1rem" },
                        fontWeight: "bold",

                        letterSpacing: "0px",
                        fontFamily: "Raleway",
                        textTransform: "none",
                        px: 6,
                        background:
                          "#cc3333",
                        color: "white",
                        "&:hover": {
                          background:
                            "#cc3333",
                          boxShadow: "none",
                        },
                      }}> Request Agreement</Button>
                    </div>
                  </div>
                  <div className="flex justify-center items-center flex-col">
                    <LocalShippingIcon sx={{ fontSize: "70px", color: "#cc3333" }} />
                    <p className="md:text-xl text-lg mt-5 mb-4 lg:text-2xl font-semibold font-Raleway text-center  text-[#292929]">Hit the road

                    </p>
                    <p className="text-lg font-Raleway text-center  italic text-[#292929]">We start dispatching<br /> your truck immediately.
                    </p>
                    <div className="mt-6 flex justify-center md:justify-start lg:mt-10">
                      <Button onClick={() => navigate("/contactus")} variant="contained" className="font-Raleway" sx={{
                        py: 1,
                        boxShadow: "none",
                        fontSize: { sm: "0.75rem", md: "1rem", lg: "1rem", xl: "1rem" },
                        fontWeight: "bold",

                        letterSpacing: "0px",
                        fontFamily: "Raleway",
                        textTransform: "none",
                        px: 6,
                        background:
                          "#cc3333",
                        color: "white",
                        "&:hover": {
                          background:
                            "#cc3333",
                          boxShadow: "none",
                        },
                      }}> Hire a Dispatcher</Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" mt-20 md:mt-24 flex  flex-col relative md:flex-row items-start justify-between">
                <SvgComponent className="absolute -top-10 right-96 w-20 opacity-40 z-0 " />

                <div className="w-full md:w-5/12">
                  <p className="md:text-3xl text-2xl lg:text-4xl font-bold font-Monts text-center md:text-start italic text-[#292929] ">Top dedicated truck <br />dispatch service
                  </p>
                  <p className="md:text-sm mt-6 text-xs lg:text-base font-normal font-Raleway text-center md:text-start text-[#292929] ">As truck dispatchers providing freight dispatching services, we take a low percentage of your rate. This is an incentive to negotiate high rates for you. The more money you make, the more money we make.
                  </p>
                  <p className="md:text-sm mt-3 text-xs lg:text-base font-normal font-Raleway text-center md:text-start text-[#292929] ">There are NO contracts. It is difficult to be profitable and that is why we charge only a small Percentage Fee for any premium load we find. Other dispatchers and brokers charge much higher fees and do not care about the service they provide to their drivers, we believe in long term relationships, our main focus is a great truck dispatch and customer service.
                  </p>
                  <div className="mt-6 flex justify-center md:justify-start lg:mt-10">
                    <Button onClick={() => navigate("/price-and-plans")} variant="contained" className="font-Raleway" sx={{

                      py: 1,
                      boxShadow: "none",
                      fontSize: { sm: "0.75rem", md: "1rem", lg: "1rem", xl: "1rem" },
                      fontWeight: "bold",
                      px: 3,
                      letterSpacing: "0px",
                      fontFamily: "Raleway",
                      textTransform: "none",

                      background:
                        "#cc3333",
                      color: "white",
                      "&:hover": {
                        background:
                          "#cc3333",
                        boxShadow: "none",
                      },
                    }}> Hire a dispatcher today</Button>
                  </div>
                </div>
                <div className="md:w-7/12 mt-10">
                  <LazyLoadImage
                    src={talkingGirl}
                    alt="muntazim logo"
                    className="w-full md:w-full lg:w-full "
                  />

                </div>
                <SvgComponent className="absolute -bottom-3 -right-10 md:right-10 w-32  opacity-60 " />
              </div>
            </Grid>
          </Grid>
        </Container>

        <div className="flex py-16 md:py-20 justify-center bg-[#cc3333] items-start">
          <Container
            disableGutters={true}
            maxWidth="lg"
            sx={{ px: { xs: "10px", lg: "0px" } }}
          >
            <Grid container sx={{ justifyContent: "center" }}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <p className="md:text-3xl text-2xl lg:text-4xl font-bold font-Monts text-center italic text-white ">What is truck dispatch service?
                </p>
                <p className="md:text-sm mt-6 text-xs lg:text-base font-normal font-Raleway text-center text-white md: px-16 px-8 lg:px-28">A truck dispatch services help truck drivers and owner operators who have their own trucking company manage the load booking and back-office processes of running a trucking company. Some dispatchers specialize only in booking loads, while others, like Genius Dispatch, offer a wide variety of services such as invoice management and detention requests.
                </p>
                <div className="mt-6 flex justify-center lg:mt-10">
                  <Button onClick={() => navigate("/contactus")} variant="outlined" className="font-Raleway" sx={{

                    py: 1,
                    boxShadow: "none",
                    fontSize: { sm: "0.75rem", md: "1rem", lg: "1rem", xl: "1rem" },
                    fontWeight: "bold",
                    px: 3,
                    border: "2px solid white",
                    letterSpacing: "0px",
                    fontFamily: "Raleway",
                    textTransform: "none",

                    background:
                      "#cc3333",
                    color: "white",
                    "&:hover": {
                      background:
                        "#cc3333",
                      boxShadow: "none",
                      border: "2px solid black"
                    },
                  }}> Hire a Genius Dispatcher</Button>
                </div>

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
              <div className="py-16 bg-white">
                <div className="max-w-screen-lg mx-auto flex flex-col justify-between">

                  <div className="text-center">
                    <p className="mt-4 text-base font-Monts leading-7 text-[#292929] font-normal">
                      F.A.Q
                    </p>
                    <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight font-Monts text-[#292929]">
                      Frequently Asked <span className="text-[#cc3333]">Questions</span>
                    </h3>

                  </div>

                  <div className="mt-10">
                    <ul className="">

                      <li className="text-left mb-10">
                        <div className="flex flex-row items-start mb-5">
                          <div
                            className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-[#cc3333] text-white border-4 border-white text-xl font-semibold">
                            <QuestionMarkIcon sx={{ color: "white" }} />
                          </div>
                          <div className="bg-[#e8e6e6] p-5 px-10 w-full flex items-center">
                            <h4 className="text-md leading-6 font-medium font-Monts text-[#292929]">Where does PGL Dispatch find freight?</h4>
                          </div>
                        </div>

                        <div className="flex flex-row items-start">
                          <div className="bg-[#f0dac2] p-5 px-10 w-full flex items-center">
                            <p className="text-[#292929] font-Monts text-sm">Through loadboards ,brokers, shippers and connections developed through our professional networks over time.
                            </p>
                          </div>
                          <div
                            className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                            <Face4Icon sx={{ fontSize: "30px" }} />

                          </div>
                        </div>
                      </li>
                      <li className="text-left mb-10">
                        <div className="flex flex-row items-start mb-5">
                          <div
                            className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-[#cc3333] text-white border-4 border-white text-xl font-semibold">
                            <QuestionMarkIcon sx={{ color: "white" }} />
                          </div>
                          <div className="bg-[#e8e6e6] p-5 px-10 w-full flex items-center">
                            <h4 className="text-md leading-6 font-medium font-Monts text-[#292929]">Can I use your service for a week or two?</h4>
                          </div>
                        </div>

                        <div className="flex flex-row items-start">
                          <div className="bg-[#f0dac2] p-5 px-10 w-full flex items-center">
                            <p className="text-[#292929] font-Monts text-sm">Yes, we can assist you whether it's for a single load or for as long as you like. With no contracts, you can continue using our dedicated dispatch services as long as you need.
                            </p>
                          </div>
                          <div
                            className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                            <Face4Icon sx={{ fontSize: "30px" }} />

                          </div>
                        </div>
                      </li>

                      <li className="text-left mb-10">
                        <div className="flex flex-row items-start mb-5">
                          <div
                            className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-[#cc3333] text-white border-4 border-white text-xl font-semibold">
                            <QuestionMarkIcon sx={{ color: "white" }} />
                          </div>
                          <div className="bg-[#e8e6e6] p-5 px-10 w-full flex items-center">
                            <h4 className="text-md leading-6 font-medium font-Monts text-[#292929]">Will PGL Dispatch negotiate freight for me?</h4>
                          </div>
                        </div>

                        <div className="flex flex-row items-start">
                          <div className="bg-[#f0dac2] p-5 px-10 w-full flex items-center">
                            <p className="text-[#292929] font-Monts text-sm">Yes, our experienced team will secure the best loads at maximum rates. The more money you make, the more we make.
                            </p>
                          </div>
                          <div
                            className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                            <Face4Icon sx={{ fontSize: "30px" }} />

                          </div>
                        </div>
                      </li>
                      <li className="text-left mb-10">
                        <div className="flex flex-row items-start mb-5">
                          <div
                            className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-[#cc3333] text-white border-4 border-white text-xl font-semibold">
                            <QuestionMarkIcon sx={{ color: "white" }} />
                          </div>
                          <div className="bg-[#e8e6e6] p-5 px-10 w-full flex items-center">
                            <h4 className="text-md leading-6 font-medium font-Monts text-[#292929]">How do I sign up for this service?</h4>
                          </div>
                        </div>

                        <div className="flex flex-row items-start">
                          <div className="bg-[#f0dac2] p-5 px-10 w-full flex items-center">
                            <p className="text-[#292929] font-Monts text-sm">To sign up, simply give us a call at the number listed on our website or send us an email. Our dedicated onboarding specialist will guide you through the process. We'll provide you with a simple setup packet to fill out with your company information and attach the required documents. Let's get started!

                            </p>
                          </div>
                          <div
                            className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                            <Face4Icon sx={{ fontSize: "30px" }} />

                          </div>
                        </div>
                      </li>
                      <li className="text-left mb-10">
                        <div className="flex flex-row items-start mb-5">
                          <div
                            className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-[#cc3333] text-white border-4 border-white text-xl font-semibold">
                            <QuestionMarkIcon sx={{ color: "white" }} />
                          </div>
                          <div className="bg-[#e8e6e6] p-5 px-10 w-full flex items-center">
                            <h4 className="text-md leading-6 font-medium font-Monts text-[#292929]">What are the required documents to get started?</h4>
                          </div>
                        </div>

                        <div className="flex flex-row items-start">
                          <div className="bg-[#f0dac2] p-5 px-10 w-full ">
                            <p className="text-[#292929] font-Monts text-lg font-medium">To get started, you'll need to provide the following documents:
                            </p>
                            <ul>
                              <li className="list-disc list-inside	">Certificate of MC Authority</li>
                              <li className="list-disc list-inside	">Certificate of Insurance</li>
                              <li className="list-disc list-inside">W-9 Form</li>
                              <li className="list-disc list-inside">Notice of Assignment from factoring or voided check if you prefer quickpay or standard payment directly from the broker.
                              </li>
                              <li className="list-disc list-inside	">Once we have these documents, we can swiftly proceed with setting up with our expert dispatchers to start getting you the best loads.
                              </li>
                            </ul>
                          </div>
                          <div
                            className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                            <Face4Icon sx={{ fontSize: "30px" }} />

                          </div>
                        </div>
                      </li>

                      <li className="text-left mb-10">
                        <div className="flex flex-row items-start mb-5">
                          <div
                            className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-[#cc3333] text-white border-4 border-white text-xl font-semibold">
                            <QuestionMarkIcon sx={{ color: "white" }} />
                          </div>
                          <div className="bg-[#e8e6e6] p-5 px-10 w-full flex items-center">
                            <h4 className="text-md leading-6 font-medium font-Monts text-[#292929]">How much do you charge?</h4>
                          </div>
                        </div>

                        <div className="flex flex-row items-start">
                          <div className="bg-[#f0dac2] p-5 px-10 w-full ">
                            <p className="text-[#292929] font-Monts text-sm">At PGL Dispatch, we believe in fair and transparent pricing. While other companies typically charge between 8% to 10% per load, we charge even less – the minimum possible without compromising service quality.
                            </p>
                            <p className="text-[#292929] font-Monts text-sm">We're committed to supporting hardworking owner-operators and carriers by providing a dispatch service at a reasonable rate. We work with box trucks at 7% and with semi-trucks at 6%. If you have two or more trucks, we provide a flat fee of just 5% per load.</p>
                            <p className="text-[#292929] font-Monts text-sm">Partner with PGL Dispatch and keep more of your hard-earned money in your pocket!
                            </p>
                          </div>
                          <div
                            className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                            <Face4Icon sx={{ fontSize: "30px" }} />

                          </div>
                        </div>
                      </li>



                      <li className="text-left mb-10">
                        <div className="flex flex-row items-start mb-5">
                          <div
                            className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-[#cc3333] text-white border-4 border-white text-xl font-semibold">
                            <QuestionMarkIcon sx={{ color: "white" }} />
                          </div>
                          <div className="bg-[#e8e6e6] p-5 px-10 w-full flex items-center">
                            <h4 className="text-md leading-6 font-medium font-Monts text-[#292929]">Do you cover all 48 states?
                            </h4>
                          </div>
                        </div>

                        <div className="flex flex-row items-start">
                          <div className="bg-[#f0dac2] p-5 px-10 w-full flex items-center">
                            <p className="text-[#292929] font-Monts text-sm">Yes.  We can find you the best freight available all over the 48 states!

                            </p>
                          </div>
                          <div
                            className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                            <Face4Icon sx={{ fontSize: "30px" }} />

                          </div>
                        </div>
                      </li>
                      <li className="text-left mb-10">
                        <div className="flex flex-row items-start mb-5">
                          <div
                            className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-[#cc3333] text-white border-4 border-white text-xl font-semibold">
                            <QuestionMarkIcon sx={{ color: "white" }} />
                          </div>
                          <div className="bg-[#e8e6e6] p-5 px-10 w-full flex items-center">
                            <h4 className="text-md leading-6 font-medium font-Monts text-[#292929]">Can I reject a load you offered me?
                            </h4>
                          </div>
                        </div>

                        <div className="flex flex-row items-start">
                          <div className="bg-[#f0dac2] p-5 px-10 w-full flex items-center">
                            <p className="text-[#292929] font-Monts text-sm">Absolutely! You're the Boss!
                              At PGL Dispatch, we understand that you're in charge of your business. You have the freedom to
                              decide which loads to accept or reject, ensuring that every decision aligns with your preferences and priorities.
                            </p>
                          </div>
                          <div
                            className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                            <Face4Icon sx={{ fontSize: "30px" }} />
                          </div>
                        </div>
                      </li>
                      <li className="text-left mb-10">
                        <div className="flex flex-row items-start mb-5">
                          <div
                            className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-[#cc3333] text-white border-4 border-white text-xl font-semibold">
                            <QuestionMarkIcon sx={{ color: "white" }} />
                          </div>
                          <div className="bg-[#e8e6e6] p-5 px-10 w-full flex items-center">
                            <h4 className="text-md leading-6 font-medium font-Monts text-[#292929]">Do you offer fuel advances?
                            </h4>
                          </div>
                        </div>

                        <div className="flex flex-row items-start">
                          <div className="bg-[#f0dac2] p-5 px-10 w-full flex items-center">
                            <p className="text-[#292929] font-Monts text-sm">No, we don't directly offer fuel advances. However, we can facilitate the process by requesting fuel advances from the broker, shipper, or your factoring company on your behalf.

                            </p>
                          </div>
                          <div
                            className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                            <Face4Icon sx={{ fontSize: "30px" }} />

                          </div>
                        </div>
                      </li>



                      <li className="text-left mb-10">
                        <div className="flex flex-row items-start mb-5">
                          <div
                            className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-[#cc3333] text-white border-4 border-white text-xl font-semibold">
                            <QuestionMarkIcon sx={{ color: "white" }} />
                          </div>
                          <div className="bg-[#e8e6e6] p-5 px-10 w-full flex items-center">
                            <h4 className="text-md leading-6 font-medium font-Monts text-[#292929]">Do you work with new carriers?

                            </h4>
                          </div>
                        </div>

                        <div className="flex flex-row items-start">
                          <div className="bg-[#f0dac2] p-5 px-10 w-full flex items-center">
                            <p className="text-[#292929] font-Monts text-sm">Yes, we specialize in supporting new carriers looking to grow their business. With our expertise and experience working with new carriers and growing their business, we understand the unique challenges new carriers face in the market and assist them every step of the way!

                            </p>
                          </div>
                          <div
                            className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                            <Face4Icon sx={{ fontSize: "30px" }} />
                          </div>
                        </div>
                      </li>
                      <li className="text-left mb-10">
                        <div className="flex flex-row items-start mb-5">
                          <div
                            className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-[#cc3333] text-white border-4 border-white text-xl font-semibold">
                            <QuestionMarkIcon sx={{ color: "white" }} />
                          </div>
                          <div className="bg-[#e8e6e6] p-5 px-10 w-full flex items-center">
                            <h4 className="text-md leading-6 font-medium font-Monts text-[#292929]">How quickly can I expect my trucks to be dispatched once I sign up with PGL Dispatch?

                            </h4>
                          </div>
                        </div>

                        <div className="flex flex-row items-start">
                          <div className="bg-[#f0dac2] p-5 px-10 w-full flex items-center">
                            <p className="text-[#292929] font-Monts text-sm">Upon signing up with PGL Dispatch, we're ready to start making you money as soon as possible. Once you've completed our setup packet and agreement, our dedicated dispatch team springs into action. We'll promptly reach out to you to discuss your preferences and gather essential details about your trucks and drivers, ensuring a seamless and efficient start to our partnership.

                            </p>
                          </div>
                          <div
                            className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                            <Face4Icon sx={{ fontSize: "30px" }} />
                          </div>
                        </div>
                      </li>

                      <li className="text-left mb-10">
                        <div className="flex flex-row items-start mb-5">
                          <div
                            className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-[#cc3333] text-white border-4 border-white text-xl font-semibold">
                            <QuestionMarkIcon sx={{ color: "white" }} />
                          </div>
                          <div className="bg-[#e8e6e6] p-5 px-10 w-full flex items-center">
                            <h4 className="text-md leading-6 font-medium font-Monts text-[#292929]">What kind of support does PGL Dispatch provide in case of emergencies or late at night?

                            </h4>
                          </div>
                        </div>

                        <div className="flex flex-row items-start">
                          <div className="bg-[#f0dac2] p-5 px-10 w-full flex items-center">
                            <p className="text-[#292929] font-Monts text-sm">Rest assured, our dispatch team is active and available 24/7 to provide support whenever you need it. Whether it's a late-night emergency or an unforeseen issue, we're here to assist you every step of the way.

                            </p>
                          </div>
                          <div
                            className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                            <Face4Icon sx={{ fontSize: "30px" }} />
                          </div>
                        </div>
                      </li>

                    </ul>
                  </div>

                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
        <div className="person-bg py-16 realtive">
          <Container
            disableGutters={true}
            maxWidth="lg"
            sx={{ px: { xs: "10px", lg: "0px" } }}
          >
            <Grid container sx={{ justifyContent: "center" }}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className=" flex flex-col  md:items-start">
                  <p className="md:text-3xl text-2xl lg:text-4xl font-bold font-Monts text-center md:text-start italic text-white">Genius Dispatch is your<br /> freight planning solution.
                  </p>
                  <p className="text-base text-white w-full lg:w-2/6 mt-10">
                    Our services are mainly for owner operators, independent truckers & carriers with their own DOT or MC authority. It’s in our best interest for us to find the best paying loads available for you. We dispatch dry-vans, reefers , flatbeds. We find you the best truck loads in the US. We help you improve your profits and experience. Whether you are looking for your next load or you need a load that takes you home, Genius Dispatch is committed to your goals. For us to be successful, you must be successful first. We are the best dispatch service in the US.
                  </p>
                  <div className="mt-6 flex justify-center md:justify-start lg:mt-10">
                    <Button onClick={() => navigate("/price-and-plans")} variant="contained" className="font-Raleway" sx={{

                      py: 1,
                      boxShadow: "none",
                      fontSize: { sm: "0.75rem", md: "1rem", lg: "1rem", xl: "1rem" },
                      fontWeight: "bold",

                      letterSpacing: "0px",
                      fontFamily: "Raleway",
                      textTransform: "none",
                      px: 5,
                      background:
                        "#cc3333",
                      color: "white",
                      "&:hover": {
                        background:
                          "#cc3333",
                        boxShadow: "none",
                      },
                    }}> Start Today</Button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>


      </div>
    </>
  );
}

export default Home;
