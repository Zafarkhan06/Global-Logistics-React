import React from "react";
import NavBar from "../navbar/Navbar";
import Footer from "../footer/Footer";
function Main({ children }) {
  return (
    <div>
      <div className="bg-white w-full">
        <div>
          <div>
            <NavBar />
          </div>
          <div className="overflow-x-clip">
            <>{children}</>
          </div>
          <div className="z-0">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
