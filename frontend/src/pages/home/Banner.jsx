import React from "react";
import bannerImg from "../../assets/banner.png";
const Banner = () => {
  return (
    <div className="flex md:flex-row-reverse flex-col  justify-center items-center py-16 gap-12">
      {/* image  */}
      <div className="md:w-1/2 w-full flex items-center justify-end">
        <img src={bannerImg} alt="" />
      </div>
      {/* hero */}
      <div className="md:w-1/2 w-full">
        <h1 className="md:text-5xl mb-7 font-medium text-2xl">
          New Releases This Week
        </h1>
        <p className="mb-10">
          It's time to update your reading list with some of the latest and
          greatest releases in the literary world. From heart-pumping thrillers
          to captivating memoirs, this week's new releases offer something for
          everyone
        </p>
        <button className="btn-primary">Subscribe</button>
      </div>
    </div>
  );
};

export default Banner;
