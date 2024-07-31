import React, { Suspense } from "react";
import ReactPlayer from 'react-player';
import video from "../../assets/ChildEravideo.mp4";

const Video = () => {
  return (
    <div className="pt-20 pb-20 bg-contain bg-[#E9F6EF] w-full">
      <h1 className='font-fredoka text-[#3F6955] text-3xl px-4 md:px-0 md:text-[32px] lg:text-[42px] lg:w-[800px] mx-auto text-center'>A <span className="text-[#DE6868]">Step-by-Step</span> User Guide Video for  <span className='text-[#F3CA5F]'>Seamless Operation </span></h1>
      <div className="player-wrapper lg:w-[713px] h-[450px] px-2 md:px-0 mx-auto pt-10">
        <ReactPlayer
          url={video}
          controls={true}
          width="100%"
          height="100%"
          className="react-player"
        />
      </div>
    </div>
  );
}

const LazyVideo = React.lazy(() => import("./Video"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyVideo />
    </Suspense>
  );
}

export default App;
