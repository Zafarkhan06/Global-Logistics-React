import React from "react";
import sdVideo from "../../asset/videos/background-new.mp4";
import bgVideo from "../../asset/videos/bg-new.mp4";

const Video = () => {
  const rVideo = document.getElementById("videoElement");
  if (rVideo) {
    rVideo.pause();
    rVideo
      .play()
      .then((res) => {
        console.log("playing start", res);
      })
      .catch((err) => {
        console.log("error playing", err);
      });
  }
  return (
    <>
      <div className="relative w-full">
        <video
          className="w-full min-h-[600px] md:max-h-[90vh] lg:min-h-screen object-cover object-center md:object-cover md:object-center"
          loop
          autoPlay
          muted
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="absolute top-0 bg-black left-0 w-full h-full  opacity-70"></div>
        {/* Add your content on top of the video here */}
      </div>
    </>
  );
};

export default Video;
