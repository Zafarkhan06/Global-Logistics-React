import "./App.css";
import { Navigate, Route, Routes, } from "react-router-dom";
import Home from "./pages/home/Home";
import AboutUs from "./pages/about-us/AboutUs";
import Main from "./pages/main/Main";
import ContactUs from "./pages/contactUs/ContactUs";
import ScrollToTop from "./ScrollToTop";
import Inbound from "./pages/services/InBound";
import PricesAndPlans from "./pages/services/Services";
import ScrollToAnchor from "./pages/components/ScrollToAnchor";
function App() {
  return (
    <>
    <ScrollToTop/>
    <ScrollToAnchor/>
    <Routes>
      <Route path="/" element={<Main><Home/></Main>} />
      <Route path="/about-us" element={<Main><AboutUs/></Main>} />
      <Route path="/pricing" element={<Main><PricesAndPlans/></Main>} />
      <Route path="/contactus" element={<Main><ContactUs/></Main>} />
      <Route path="/inbound" element={<Main><Inbound/></Main>} />
      <Route path="*" element={<Navigate to={"/"} replace />} />
    </Routes>
    </>
  );
}

export default App;
