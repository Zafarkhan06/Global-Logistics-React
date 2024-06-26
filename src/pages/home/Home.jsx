import { Container, Grid, Button, Rating } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import truck from "../../asset/images/first-truck.webp";
import usaFlag from "../../asset/images/usa-flag.webp";
import SvgComponent from "../components/SvgComponent";
import capPerson from "../../asset/images/bg-truckk.webp";
import threeTrucks from "../../asset/images/three-trucks.webp"
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import HandshakeIcon from '@mui/icons-material/Handshake';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import talkingGirl from "../../asset/images/talking-girl.png";
import { useNavigate } from "react-router";
import FAQ from "./Faq";
import Testimonials from "./Reviews";
import videoTestimonial from "../../asset/videos/video-testimonial.mp4";



function Home() {
  const navigate = useNavigate();
  // const [hasScrolled, setHasScrolled] = useState(false);
  // const faqSectionRef = useRef(null);
  // const { hash } = useLocation();
  // useEffect(() => {
  //   if (faqSectionRef.current && hash === "#duvidas" && !hasScrolled) {
  //     faqSectionRef.current.scrollIntoView({
  //       behavior: "smooth",
  //       block: "center",
  //       inline: "center",
  //     });
  //     setHasScrolled(true);
  //   }
  // }, [hash, hasScrolled]);
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
                <div className="lg:w-7/12 lg:mt-10">
                  <h1 className="text-2xl lg:text-3xl xl:text-[40px] tracking-normal font-bold italic text-[#292929] font-Monts leading-relaxed text-center md:text-start mt-10">Welcome to the <span className="underline decoration-[#cc3333]">Most Reliable</span>   Freight Mangement Partner for your Trucking Business!
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
                            "white",
                          boxShadow: "none",
                          color: "#cc3333",
                          border: "1px solid #cc3333"
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
                <SvgComponent className="absolute top-0 w-1/3 opacity-40 z-0 -left-60" />
                <div className="flex items-center gap-4 mt-10">
                  <p className="md:text-7xl text-6xl lg:text-8xl font-black font-Raleway text-[#cc3333] ">Focus</p>
                  <p className="md:text-3xl text-xl lg:text-5xl font-bold font-Monts italic text-[#292929] ">on what matters most!</p>
                </div>

                {/* <p className="text-lg font-medium font-Raleway text-center md:text-start text-[#292929] ">A Bigger <br className="hidden md:block" /> Equipment makes  <br className="hidden md:block" /> you more Money!</p> */}

              </div>
              <div className='relative'>
                <p className="text-xl font-medium font-Raleway text-start text-[#292929] ">Let us take care of the rest. At <span className="text-[#cc3333] font-semibold">PGL Dispatch</span>, we understand your time is best spent on the road. That's why we handle everything else for you.</p>
                <p className="text-lg font-normal font-Raleway text-start text-[#292929] mt-3 ">We find the highest paying loads and plan your routes to ensure every mile counts. Our team keeps in touch with brokers and shippers, so you're always in the loop. We take care of setting up with new freight brokers, handle all the paperwork, and invoice to get you paid quickly, whether through your factoring company or directly from brokers. Our dispatch team is available 24/7 to assist you with any needs or concerns, or in case of emergencies whenever required.</p>
                <p className="text-lg font-normal font-Raleway text-start text-[#292929] ">With us, you can focus on driving and growing your business. Let <span className="text-[#cc3333] font-semibold">PGL Dispatch</span> be your trusted partner on the road to success, making your job easier and more profitable.</p>
                <SvgComponent className="absolute -bottom-48 -right-32 w-1/3 opacity-40 z-0 " />
              </div>
              <div className="md:mt-24 flex  flex-col relative md:flex-row items-center justify-between">
                <SvgComponent className="absolute -top-40 right-96 w-20 opacity-40 z-0 " />
                <div className="md:w-1/2 mt-10 md:mt-2">
                  <LazyLoadImage
                    src={capPerson}
                    alt="muntazim logo"
                    className="w-full md:w-full lg:w-10/12 rounded-2xl shadow-xl z-20"
                  />
                </div>
                <div className="w-full mt-10 md:mt-2 md:w-1/2">
                  <p className="md:text-3xl text-2xl lg:text-4xl font-bold font-Monts text-center md:text-start italic text-[#292929] ">You're the Boss

                  </p>
                  <p className="md:text-base text-sm lg:text-xl font-normal font-Raleway text-center mt-5 md:text-start text-[#292929] ">Hit the road on your terms – you call the shots. Loads, rates, and routes are your choice, with no force dispatching. At PGL Dispatch, everything we do is tailored to your preferences. We ensure you get the best freight at the best rate and get paid on time, every time. Drive with confidence knowing you're in control every step of the way. </p>
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
                          "white",
                        boxShadow: "none",
                        color: "#cc3333",
                        border: "1px solid #cc3333"
                      },
                    }}> Click here to change routes</Button>
                  </div>
                </div>
                <SvgComponent className="absolute -bottom-10 right-10 w-32  opacity-60 " />
              </div>
              {/* <div className="truck-bg rounded-2xl shadow-2xl mt-20 realtive">
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

              </div> */}
            </Grid>
          </Grid>
        </Container>
        <Container
          id="faq"
          disableGutters={true}
          maxWidth="lg"
          sx={{ px: { xs: "10px", lg: "0px" } }}
        >
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className="py-16 bg-white">
                <div className=" flex flex-col justify-between">

                  <div className="text-center">
                    <p className=" text-base font-Monts leading-7 text-[#292929] font-normal">
                      F.A.Q's
                    </p>
                    <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight font-Monts text-[#292929]">
                      Frequently Asked <span className="text-[#cc3333]">Questions</span>
                    </h3>

                  </div>
                  <FAQ />
                </div>
              </div>
              {/* <div>
                <Testimonials />
              </div> */}
            </Grid>
          </Grid>
        </Container>
        {/* <div className="flex py-20 md:py-32 justify-center mt-20 bg-[#f0dac2] items-start">
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
        </div> */}
        <Container
          disableGutters={true}
          maxWidth="lg"
          sx={{ px: { xs: "10px", lg: "0px" } }}
        >
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className="relative flex justify-center">
                <SvgComponent className="absolute left-0 w-36 top-10 opacity-60 " />
                <LazyLoadImage
                  src={threeTrucks}
                  alt="muntazim logo"
                  className="w-full   md:w-full lg:w-4/6 "
                />
                <SvgComponent className="absolute right-0 w-36 top-52 opacity-30 " />
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="md:text-3xl text-2xl lg:text-4xl font-bold font-Monts text-center  italic text-[#292929]">Getting started is easy
                </p>
                <p className="text-lg font-medium font-Monts mt-6 text-center text-[#292929] ">Simply get in touch with our onboarding specialist via phone, and they will guide you through the process. They'll gather the necessary details from you to send over the agreement via email. In the same document, you can attach the required documents in the designated space and fill in your company info. Once the agreement is signed, we'll connect you with your dedicated dispatcher, who will start finding loads according to your preferences. It's that simple - <span className="text-[#cc3333]">let's get you on the road to success!</span>
                </p>
                <div className="mt-16 flex flex-col md:flex-row gap-10 lg:gap-28 items-start">
                  <div className="flex justify-center  items-center w-full md:w-1/3 flex-col">
                    <FolderCopyIcon className="animate-bounce" sx={{ fontSize: "70px", color: "#cc3333" }} />

                    <div className="bg-[#cc3333] hover:shadow-black hover:shadow-2xl mt-3 px-5 py-3 rounded-xl  shadow-xl">
                      <p className="md:text-xl text-lg mt-5 mb-4 lg:text-2xl font-semibold font-Raleway text-center   text-white">Send Documents
                      </p>
                      <p className=" font-normal font-Monts mt-6 text-center pb-5 text-slate-100 ">Provide us with your MC Authority, Certificate of Insurance, and W-9 Form. These documents are essential for setting up your account with brokers and ensuring compliance.
                      </p>
                    </div>
                    {/* <p className="text-lg font-Raleway text-center  italic text-[#292929]">MC Authority, Certificate of <br /> Insurance and W-9 Form
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
                    </div> */}
                  </div>
                  <div className="flex w-full md:w-1/3 justify-center items-center flex-col">
                    <HandshakeIcon className="animate-bounce" sx={{ fontSize: "70px", color: "#cc3333" }} />
                    <div className="bg-[#cc3333] mt-3 px-5 py-3 hover:shadow-black hover:shadow-2xl rounded-xl  shadow-xl">
                      <p className="md:text-xl text-lg mt-5 mb-4 lg:text-2xl font-semibold font-Raleway text-center   text-white">Sign Agreement

                      </p>
                      <p className=" font-normal font-Monts mt-6 text-center pb-5 text-slate-100 ">Quickly and easily sign our Dispatcher-Carrier service level agreement. This agreement outlines the terms of our partnership and ensures mutual understanding.

                      </p>
                    </div>
                  </div>
                  <div className="flex w-full md:w-1/3 justify-center items-center flex-col">
                    <LocalShippingIcon className="animate-bounce" sx={{ fontSize: "70px", color: "#cc3333" }} />
                    <div className="bg-[#cc3333] mt-3 px-5 py-3 rounded-xl hover:shadow-black hover:shadow-2xl shadow-xl">
                      <p className="md:text-xl text-lg mt-5 mb-4 lg:text-2xl font-semibold font-Raleway text-center   text-white">Hit the road

                      </p>
                      <p className=" font-normal font-Monts mt-0 text-center pb-1 text-slate-100 ">Once your documents are received and the agreement is signed, we'll start dispatching your truck immediately. You can hit the road with confidence, knowing that our team is working to secure the best loads for you.

                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="mt-16">
                  <a href="tel:+18442644453">
                  <Button variant="contained" className="font-Monts" sx={{
                    px: 3,
                    py: 1,
                    boxShadow: "none",
                    fontSize: "1rem",
                    fontWeight: "bold",
                   
                    textTransform: "capitalize",
                    letterSpacing: "2px",
                    background:
                      "#cc3333",
                    color: "white",
                    "&:hover": {
                      background:
                        "#cc3333",
                      boxShadow: "none",
                    },
                  }}> (844) 264-4453</Button>
                  </a>
                </div> */}
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
                          "white",
                        boxShadow: "none",
                        color: "#cc3333",
                        border: "1px solid #cc3333"
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

        <div className="flex justify-center  items-start">
          <Container
            disableGutters={true}
            maxWidth="lg"
            sx={{ px: { xs: "10px", lg: "0px" } }}
          >
            <Grid container sx={{ justifyContent: "center" }}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <div id="whoweare" className="max-w-screen-xl mx-auto pt-16 px-4 lg:py-20 lg:px-6">
                  <div className="text-center mb-10">
                    <h2 className="text-4xl md:text-6xl font-Monts tracking-tight font-bold text-[#cc3333]">Who We Are</h2>
                  </div>

                  <div className="flex flex-col md:flex-row">

                    {/* <div className="mr-0 md:mr-4 mb-6 md:mb-0 md:w-1/3">
                      <img className="w-full mx-auto" src={whoIcon} alt="can_help_banner" />
                    </div> */}


                    <div className="flex-1 flex flex-col font-Monts sm:flex-row flex-wrap -mb-4 -mx-4">
                      <div className="w-full sm:w-1/2 mb-6 px-2 ">
                        <div
                          className="h-full py-2 px-6 border border-[#cc3333] border-t-0 border-l-0 rounded-tl-xl rounded-br-xl transition-shadow duration-300"
                          style={{
                            boxShadow: '0 0 rgba(0, 0, 0, 0)',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = '4px 4px 10px 2px #cc3333'; // Adjusted for spread and blur
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = '0 0 rgba(0, 0, 0, 0)';
                          }}
                        >
                          <h3 className="text-2xl font-bold text-md mb-4">Our Mission:</h3>
                          <p className="text-base">
                            At PGL Dispatch, we're more than just a team of truck dispatchers - we're your dedicated partners on the road to success. Our mission is simple: to empower carriers and owner-operators like you to thrive in an industry where profitability is key. We believe in transparency, reliability, and building long-lasting relationships based on trust and exceptional service.
                          </p>
                        </div>
                      </div>
                      <div className="w-full sm:w-1/2 mb-6 px-2 ">
                        <div className="h-full py-2 px-6 border border-[#cc3333] border-t-0 border-l-0 rounded-br-xl rounded-tl-xl transition-shadow duration-300"
                          style={{
                            boxShadow: '0 0 rgba(0, 0, 0, 0)',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = '4px 4px 10px 2px #cc3333'; // Adjusted for spread and blur
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = '0 0 rgba(0, 0, 0, 0)';
                          }}>
                          <h3 className="text-2xl font-bold text-md mb-4">Our Fee Model:</h3>
                          <p className="text-base"> With our low percentage fee model, we're motivated to negotiate the highest rates possible for you, because when you succeed, we succeed. We've done away with restrictive contracts, opting instead for a commitment to providing unparalleled customer service and support. Unlike other dispatchers and brokers who prioritize their bottom line over your success, we're here to prioritize you.
                          </p>
                        </div>
                      </div>

                      <div className="w-full sm:w-1/2 mb-6 px-2 ">
                        <div className="h-full py-2 px-6 border border-[#cc3333] border-t-0 border-l-0 rounded-br-xl rounded-tl-xl transition-shadow duration-300"
                          style={{
                            boxShadow: '0 0 rgba(0, 0, 0, 0)',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = '4px 4px 10px 2px #cc3333'; // Adjusted for spread and blur
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = '0 0 rgba(0, 0, 0, 0)';
                          }}>
                          <h3 className="text-2xl font-bold text-md mb-6">24/7 Customer Support:</h3>
                          <p className="text-base">Our team works tirelessly behind the scenes to handle all the details, from finding the highest paying loads to managing paperwork and invoicing. We're available 24/7 to assist you with any needs or concerns, ensuring that you always have the support you need, whenever you need it.
                          </p>
                        </div>
                      </div>

                      <div className="w-full sm:w-1/2 mb-6 px-2 ">
                        <div className="h-full py-2 px-6 border border-[#cc3333] border-t-0 border-l-0 rounded-tl-xl rounded-br-xl transition-shadow duration-300"
                          style={{
                            boxShadow: '0 0 rgba(0, 0, 0, 0)',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = '4px 4px 10px 2px #cc3333'; // Adjusted for spread and blur
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = '0 0 rgba(0, 0, 0, 0)';
                          }}>
                          <h3 className="text-2xl font-bold text-md mb-6">Maximize your Business:</h3>
                          <p className="text-base">At PGL Dispatch, we understand that your time is best spent on the road, so let us take care of the rest. We're here to streamline your operations, maximize your profitability, and help you achieve your goals. With PGL Dispatch by your side, you can focus on driving and growing your business, confident that you have a trusted partner supporting you every step of the way.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



                {/* <p className="md:text-3xl text-2xl lg:text-4xl font-bold font-Monts text-center italic text-white ">What is truck dispatch service?
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
                </div> */}

              </Grid>
            </Grid>
          </Container>
        </div>

        <div>
          <Testimonials />
        </div>
        <Container

          disableGutters={true}
          maxWidth="lg"
          sx={{ px: { xs: "10px", lg: "0px" } }}
        >
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className="flex  flex-col md:flex-row justify-center py-10 gap-20 items-center">
                <div className="w-full md:w-1/2">
                  <p className="md:text-4xl text-2xl lg:text-6xl font-bold font-Monts text-start italic text-black">Meet Wonseleh, <br /> one of our <span className="text-[#cc3333]">Happy Customer</span>
                  </p>
                  <p className="md:text-xl mt-5 text-xs lg:text-2xl font-normal font-Raleway text-start text-black">Wonseleh from Anointed Express, LLC, shares his positive experience of working with Perfect Global Logistics for over two years. He highlights their exceptional communication and reliability in providing consistent loads, ensuring they remain busy. Perfect Global Logistics has been instrumental in supporting their needs, offering help whenever required. Boinsley highly values their partnership, indicating the superior service and commitment they have received throughout their collaboration.
                  </p>
                </div>
                <div>
                  <video className="max-h-[50%] rounded-2xl w-full" controls >
                    <source src={videoTestimonial} type="video/mp4" />
                  </video>
                </div>
              </div>

            </Grid>
          </Grid>
        </Container>
        {/* <Container
          disableGutters={true}
          maxWidth="lg"
          sx={{ px: { xs: "10px", lg: "0px" } }}
        >
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className="flex justify-between flex-col-reverse md:flex-row items-center">
                <div>
                  <h1 className="text-2xl lg:text-3xl xl:text-5xl tracking-normal font-bold italic text-[#292929] font-Monts  text-center   mt-20">We are open <span className="text-[#cc3333]">24 Hours</span> <br />for Business
                  </h1>
                  <p className="text-2xl font-semibold font-Raleway text-[#292929] text-center mt-5">We are available every minute of the day to boom your business.</p>
                </div>
                <LazyLoadImage
                  src={bgTruck}
                  alt="muntazim logo"
                  className="w-full  md:w-full lg:w-3/6 "
                />
              </div>

            </Grid>
          </Grid>
        </Container> */}
        {/* <div className="person-bg py-16 realtive">
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
        </div> */}


      </div>
    </>
  );
}

export default Home;
