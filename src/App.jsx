import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import AboutUs from "./pages/about-us/AboutUs";
import Main from "./pages/main/Main";
import Services from "./pages/services/Services";
import ContactUs from "./pages/contactUs/ContactUs";
import ScrollToTop from "./ScrollToTop";
import Inbound from "./pages/services/InBound";
function App() {
  return (
    <>
    <ScrollToTop/>
    <Routes>
      <Route path="/home" element={<Main><Home/></Main>} />
      <Route path="/about-us" element={<Main><AboutUs/></Main>} />
      <Route path="/outbound" element={<Main><Services/></Main>} />
      <Route path="/contactus" element={<Main><ContactUs/></Main>} />
      <Route path="/inbound" element={<Main><Inbound/></Main>} />
      <Route path="*" element={<Navigate to={"/home"} replace />} />
    </Routes>
    </>
  );
}

export default App;
