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
function Home() {
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
                  <h1 className="text-2xl lg:text-3xl xl:text-[40px] tracking-normal font-bold italic text-[#292929] font-Raleway leading-tight text-center md:text-start mt-10">Welcome to the <span className="underline decoration-[#ff914c]">Most Reliable</span>  Dispatch Company in  North America.
                  </h1>
                  <p className="text-center md:text-start text-base lg:text-base xl:text-lg text-[#292929] font-Raleway mt-4 lg:mt-8">We find the best paying loads in the market.
                  </p>
                  <p className="text-center md:text-start  text-base lg:text-base xl:text-lg text-[#292929] font-Raleway">Get a dedicated dispatcher assigned for you and don't worry <br /> any more about spending time looking for loads or empty miles.
                  </p>
                  <div className="mt-6 flex justify-center md:justify-start lg:mt-10">
                    <Button variant="contained" className="font-Raleway" sx={{

                      py: 1,
                      boxShadow: "none",
                      fontSize: { sm: "0.75rem", md: "1rem", lg: "1rem", xl: "1rem" },
                      fontWeight: "bold",
                      width: "220px",
                      letterSpacing: "0px",
                      fontFamily: "Raleway",
                      textTransform: "none",

                      background:
                        "#ff914c",
                      color: "white",
                      "&:hover": {
                        background:
                          "#ff914c",
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
                  <p className="md:text-3xl text-xl lg:text-4xl font-bold font-Raleway italic text-[#292929] ">Dry Vans, Reefers, <br /> and Flatbeds Only.</p>
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
                  <p className="md:text-3xl text-2xl lg:text-4xl font-bold font-Raleway text-center md:text-start italic text-[#292929] ">Hit the road on your terms, you're the boss
                  </p>
                  <p className="md:text-base text-sm lg:text-xl font-normal font-Raleway text-center md:text-start text-[#292929] ">Loads, rates and routes are your choice, no force dispatching. We make sure you get the best freight at the best rate and get paid on time. Documentation, prices and fees are disclosed upfront.
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

                      background:
                        "#ff914c",
                      color: "white",
                      "&:hover": {
                        background:
                          "#ff914c",
                        boxShadow: "none",
                      },
                    }}> Click here to change routes</Button>
                  </div>
                </div>
                <SvgComponent className="absolute -bottom-3 right-10 w-32  opacity-60 " />
              </div>
              <div className="truck-bg rounded-2xl shadow-2xl mt-20 realtive">
                <div className="py-20 px-6 md:px-20 flex flex-col  md:items-end">

                  <p className="md:text-3xl text-2xl lg:text-4xl font-bold font-Raleway text-center md:text-right italic text-white">Call us today, get loaded <br /> & be profitable now
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
                      px: 5,
                      background:
                        "#ff914c",
                      color: "white",
                      "&:hover": {
                        background:
                          "#ff914c",
                        boxShadow: "none",
                      },
                    }}> Call Now!</Button>
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
                    <p className="md:text-base text-sm font-bold lg:text-lg font-Raleway text-start text-[#E87700]">
                      Lopez Hauling Inc
                    </p>
                    <p className="text-[#E87700] text-xs md:text-sm">
                      Our company, Lopez Hauling, just started back in July of 2021 and Genius Dispatch has been with us since the beginning. They have been so helpful with us being a start-up company and not knowing much about the industry to knowing where the money is and what we need to do to get it! Jessica, especially has been so amazing and her along with many others are very quick to respond and always take care of any issue we run into. To the point I don’t have to worry about much but making money!
                    </p>
                  </div>
                  <div className="w-full lg:w-1/4">
                    <Rating name="read-only" value={5} readOnly />
                    <p className="md:text-base text-sm font-bold lg:text-lg font-Raleway  text-start text-[#E87700]">
                      Spartan Cargo LLC
                    </p>
                    <p className="text-[#E87700] text-xs md:text-sm">
                      I can’t say enough to express my positive experience with this dispatch service. With the challenges of expenses going through the roof these days, having support from a dedicated staff is very important.
                    </p>
                  </div>
                  <div className="w-full lg:w-1/4">
                    <Rating name="read-only" value={5} readOnly />
                    <p className="md:text-base text-sm font-bold lg:text-lg font-Raleway text-start text-[#E87700]">
                      National Brothers Inc
                    </p>
                    <p className="text-[#E87700] text-xs md:text-sm">
                      Our trucking company was in need of a dispatching company to dispatch our fleet of trucks and found Genius Dispatching in an article written about top dispatching companies. We have only worked with Genius for a short time but thus far, they have not disappointed. David and Jessica have both been readily available to answer questions our members have regarding their process. They have been nothing but professional and are quick to reach out to our team about concerns and/or issues. We look forward to continuing a great profitable relationship with their team.
                    </p>
                  </div>
                  <div className="w-full lg:w-1/4">
                    <Rating name="read-only" value={5} readOnly />
                    <p className="md:text-base text-sm font-bold lg:text-lg font-Raleway text-start text-[#E87700]">
                      Venados Logistics LLC
                    </p>
                    <p className="text-[#E87700] text-xs md:text-sm">
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
                <p className="md:text-3xl text-2xl lg:text-4xl font-bold font-Raleway text-center  italic text-[#292929]">Getting started is easy
                </p>
                <div className="mt-16 flex flex-col md:flex-row gap-10 lg:gap-28 items-start">
                  <div className="flex justify-center items-center flex-col">
                    <FolderCopyIcon sx={{ fontSize: "70px", color: "#ff914c" }} />
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
                          "#ff914c",
                        color: "white",
                        "&:hover": {
                          background:
                            "#ff914c",
                          boxShadow: "none",
                        },
                      }}> Send Documents</Button>
                    </div>
                  </div>
                  <div className="flex justify-center items-center flex-col">
                    <HandshakeIcon sx={{ fontSize: "70px", color: "#ff914c" }} />
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
                          "#ff914c",
                        color: "white",
                        "&:hover": {
                          background:
                            "#ff914c",
                          boxShadow: "none",
                        },
                      }}> Request Agreement</Button>
                    </div>
                  </div>
                  <div className="flex justify-center items-center flex-col">
                    <LocalShippingIcon sx={{ fontSize: "70px", color: "#ff914c" }} />
                    <p className="md:text-xl text-lg mt-5 mb-4 lg:text-2xl font-semibold font-Raleway text-center  text-[#292929]">Hit the road

                    </p>
                    <p className="text-lg font-Raleway text-center  italic text-[#292929]">We start dispatching<br /> your truck immediately.
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
                          "#ff914c",
                        color: "white",
                        "&:hover": {
                          background:
                            "#ff914c",
                          boxShadow: "none",
                        },
                      }}> Hire a Dispatcher</Button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default Home;
