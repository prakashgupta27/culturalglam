import React from "react";
import YouTube from "react-youtube";

const YoutubeVideo = () => {
    return (
        <>
        <div className="whate-new-block md:pt-20 pt-10 flex flex-row">
          <div className="container">
            <div className="heading flex flex-col mb-10">
              <div className="heading3 pt-10 pb-5 pl-4 pr-2 bg-[#f5f5f5]">Youtube</div>
            </div>
          </div>
        </div>
      
        <div className="flex justify-center items-center mt-10">
  <div className="flex flex-row items-start space-x-10">
    {/* Video Section */}
    <div className="flex-shrink-0">
      <iframe
        width="420"
        height="315"
        src="https://youtu.be/VrKwfeikDoo?si=JHoKrvFT-10y8rKW"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>

    {/* Text Section */}
    <div className="ml-8">
      <h5 className="text-2xl text-black font-bold ">Visit our YouTube</h5>
      <p className="text-lg font-medium bg-surface mt-4 max-w-lg">Don't miss out! Visit my website to watch my latest YouTube video. Discover exciting content, valuable insights, and engaging entertainment. Click now and join the fun, as I share new ideas and experiences you won’t want to miss!</p>
    </div>
  </div>
</div>

      </>
      
    )
}
export default YoutubeVideo;