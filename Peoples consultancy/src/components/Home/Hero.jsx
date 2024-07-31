import { lazy, Suspense, useEffect, useState } from "react";
import img from "../../assets/robo.png";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";

const PopUpVideo = lazy(() => import("./PopUpVideo.jsx"));

function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row text-center lg:text-start items-center justify-center gap-10 lg:gap-20 px-4 md:px-0 animate__animated animate__fadeInDown lg:pb-28">
      {showVideo &&
        createPortal(
          <Suspense fallback={<p>Loading...</p>}>
            <PopUpVideo setShow={setShowVideo} />
          </Suspense>,
          document.body
        )}
      <div className="flex flex-col gap-10">
        <div>
          <h1 className="font-redhat md:w-[580px] font-bold text-[#111214] text-[34px] md:text-[50px]">
            Design, Develop And Dominate The Market
          </h1>
          <p className="font-poppins text-[#303030]">
            Your Complete Solution for Software and App Development
          </p>
        </div>
        <div className="flex justify-center items-center lg:justify-start gap-4">
          <Link to={"/Contact"}>
            <button className="py-[12px] w-[102px] border border-[#111214]  bg-[#111214] text-white rounded-lg font-poppins font-normal">
              Join us
            </button>
          </Link>
          <Link to={"/Service"}>
            <button className="w-[133px] py-[12px] border border-[#111214] text-[#111214] rounded-lg font-poppins font-normal">
              Learn More
            </button>
          </Link>
        </div>
        <div className="flex justify-center lg:justify-start gap-4 lg:gap-12 md:gap-20 lg:pl-8 pl-0">
          <div className="flex flex-col justify-center items-center">
            <h5 className="font-montserrat text-[#111214]  text-[20px] md:text-[24px] font-bold">
              5000+
            </h5>
            <p className="font-montserrat text-[#111214]">PROJECTS</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h5 className="font-montserrat text-[#111214] text-[20px] md:text-[24px]  font-bold">
              5 YRS
            </h5>
            <p className="font-montserrat text-[#111214]">EXPERIENCE</p>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <h5 className="font-montserrat text-[#111214] text-[20px] md:text-[24px] font-bold">
              1000+
            </h5>
            <p className="font-montserrat text-[#111214]">HAPPY CLIENTS</p>
          </div>
        </div>
      </div>
      <div className=" relative">
        <img className="w-[325px] md:w-[478px] object-cover" src={img} alt="" />
        <div
          title="play"
          onClick={() => setShowVideo(true)}
          className="group w-[205px] h-[125px] absolute top-[88px] left-[95px] z-20 cursor-pointer"
        >
          <svg
            className="group-hover:opacity-0 transition-all duration-500"
            xmlns="http://www.w3.org/2000/svg"
            width="204"
            height="124"
            viewBox="0 0 205 125"
            fill="none"
          >
            <path
              d="M0 36.7198C0 34.3622 0.178913 31.9918 1.00787 29.7847C2.71011 25.2525 7.00304 17.3131 17 13.1764C31.5 7.17644 43.6407 3.41551 61.5 1.17644C75.8385 -0.621214 83.5493 0.17627 98 0.17627C112.451 0.17627 121.129 -0.336843 135.5 1.17644C155.659 3.29918 169 4.67644 186 13.1764C197.377 18.865 202.036 25.8972 203.873 29.9268C204.826 32.0171 205 34.3315 205 36.6288V87.6764C205 87.6764 200 111.176 180 116.176C160 121.176 135.5 123.176 135.5 123.176C135.5 123.176 112.035 124.676 97 124.676C83.1364 124.676 61.5 123.176 61.5 123.176C61.5 123.176 32.7348 121.544 17 113.676C0 105.176 0 87.6764 0 87.6764V36.7198Z"
              fill="#111214"
            />
          </svg>
          <svg
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:opacity-0 group-hover:scale-0 transition-all duration-500"
            xmlns="http://www.w3.org/2000/svg"
            width="57"
            height="56"
            viewBox="0 0 57 56"
            fill="none"
          >
            <g clipPath="url(#clip0_2421_4990)">
              <path
                d="M28.5146 0C35.9407 0 43.0626 2.94999 48.3136 8.20101C53.5647 13.452 56.5146 20.5739 56.5146 28C56.5146 35.4261 53.5647 42.548 48.3136 47.799C43.0626 53.05 35.9407 56 28.5146 56C21.0886 56 13.9667 53.05 8.71566 47.799C3.46464 42.548 0.514648 35.4261 0.514648 28C0.514648 20.5739 3.46464 13.452 8.71566 8.20101C13.9667 2.94999 21.0886 0 28.5146 0ZM5.76465 28C5.76465 34.0337 8.16152 39.8202 12.428 44.0867C16.6944 48.3531 22.481 50.75 28.5146 50.75C34.5483 50.75 40.3349 48.3531 44.6013 44.0867C48.8678 39.8202 51.2646 34.0337 51.2646 28C51.2646 21.9663 48.8678 16.1798 44.6013 11.9133C40.3349 7.64687 34.5483 5.25 28.5146 5.25C22.481 5.25 16.6944 7.64687 12.428 11.9133C8.16152 16.1798 5.76465 21.9663 5.76465 28ZM22.8411 18.2945L37.7651 27.251C37.8941 27.3289 38.0008 27.4388 38.0748 27.57C38.1489 27.7012 38.1878 27.8493 38.1878 28C38.1878 28.1507 38.1489 28.2988 38.0748 28.43C38.0008 28.5612 37.8941 28.6711 37.7651 28.749L22.8411 37.7055C22.7084 37.7854 22.5569 37.8287 22.402 37.8309C22.2471 37.8331 22.0943 37.7941 21.9594 37.7179C21.8245 37.6417 21.7123 37.5311 21.6341 37.3973C21.556 37.2636 21.5147 37.1114 21.5146 36.9565V19.047C21.5141 18.8918 21.5549 18.7392 21.6328 18.6049C21.7107 18.4707 21.8229 18.3595 21.9579 18.2829C22.0929 18.2064 22.2459 18.1671 22.4011 18.1691C22.5563 18.1711 22.7082 18.2144 22.8411 18.2945Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_2421_4990">
                <rect
                  width="56"
                  height="56"
                  fill="white"
                  transform="translate(0.514648)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Hero;
