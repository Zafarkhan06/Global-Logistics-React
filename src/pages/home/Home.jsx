import { Container, Grid } from "@mui/material";
import NavBar from "../navbar/Navbar";
import FirstSection from "../components/FirstSection";
import SecondSection from "../components/secondSection";
import Footer from "../footer/Footer";
function Home() {
  return (
    <>
      <div className="bg-white w-full ">
        <div>
          {/* <div className="z-50 sticky top-0">
            <NavBar />
          </div> */}

          <div className="w-full z-10">
            <FirstSection />
          </div>
          <div>
            <SecondSection />
          </div>
          {/* <div>
            <Footer />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Home;
