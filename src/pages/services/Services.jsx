import React from "react";
import { Container, Grid } from "@mui/material";
import SvgComponent from "../components/SvgComponent";
import bgTruck from "../../asset/images/bg-person.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

function PricesAndPlans() {
  return (
    <div className="min-h-full bg-[#e8e6e6]">
      <Container
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
      </Container>
      <Container
        disableGutters={true}
        maxWidth="lg"
        sx={{ px: { xs: "10px", lg: "0px" } }}
      >
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <h1 className="text-2xl lg:text-3xl xl:text-[48px] tracking-normal font-bold italic text-[#292929] font-Monts leading-normal text-center   mt-20">Quality <span className="text-[#cc3333]">Without</span>  Compromise
            </h1>
            <p className="text-lg font-Raleway text-[#292929] text-center mt-10">Streamline Your Operations with Our Comprehensive FMCSA & DOT Compliance Solutions.</p>
            <p className="text-lg font-Raleway text-[#292929] text-center">We keep up with the latest regulations and help you stay compliant, minimizing the risk of fines, penalties, and other consequences. With our services, you can focus on your core business while we handle all your FMCSA and DOT compliance needs.</p>
            <div className="relative">
              <SvgComponent className="absolute -top-72 -left-10 w-36  opacity-40 " />
              <SvgComponent className="absolute -top-44 -right-40 w-36  opacity-40 " />
            </div>

            <div className="flex mt-20 justify-center gap-10 items-start flex-col relative lg:flex-row pb-20">

              <div className="border shadow-2xl border-red-400 w-full">
                <div className="price_truck px-16 flex justify-center items-center py-28">
                  <h1 className="text-[96px] tracking-normal font-bold italic text-white font-Monts leading-normal text-center">7%
                  </h1>
                </div>
                <p className="text-xl font-medium font-Raleway text-[#292929] text-center py-4 bg-white">Flat rate per load.</p>
                <p className="text-2xl font-bold font-Raleway text-black text-center py-3 bg-[#d3c2c3]">1 Truck</p>
              </div>
              <div className="border shadow-2xl border-red-400 w-full">
                <div className="price_truck px-16 flex justify-center items-center py-28">
                  <h1 className="text-[96px] tracking-normal font-bold italic text-white font-Monts leading-normal text-center">6%
                  </h1>
                </div>
                <p className="text-xl font-medium font-Raleway text-[#292929] text-center py-4 bg-white">Flat rate per load.</p>
                <p className="text-2xl font-bold font-Raleway text-black text-center py-3 bg-[#d3c2c3]">2-3 Trucks</p>
              </div>
              <div className="border shadow-2xl border-red-400 w-full">
                <div className="price_truck px-16 flex justify-center items-center py-28">
                  <h1 className="text-[96px] tracking-normal font-bold italic text-white font-Monts leading-normal text-center">5%
                  </h1>
                </div>
                <p className="text-xl font-medium font-Raleway text-[#292929] text-center py-4 bg-white">Flat rate per load.</p>
                <p className="text-2xl font-bold font-Raleway text-black text-center py-3 bg-[#d3c2c3]">+3 Trucks</p>
              </div>
              <div className="border shadow-2xl border-red-400 w-full">
                <div className="price_truck px-16 flex justify-center items-center py-28">
                  <h1 className="text-[96px] tracking-normal font-bold italic text-white font-Monts leading-normal text-center">$60
                  </h1>
                </div>
                <p className="text-xl font-medium font-Raleway text-[#292929] text-center py-4 bg-white">Per truck, Per month.</p>
                <p className="text-2xl font-bold font-Raleway text-black text-center py-3 bg-[#d3c2c3]">Back-Office Services</p>
              </div>


            </div>


          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
export default PricesAndPlans;