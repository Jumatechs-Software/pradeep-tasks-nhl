import vid from "../../assets/vid_home.mp4";

// eslint-disable-next-line react/prop-types
const PopUpVideo = ({ setShow }) => {
  return (
    <div className="fixed z-50 bg-gray-700/40 inset-0 top-0 left-0 min-w-full min-h-screen flex justify-center items-center">
      <button
        onClick={() => setShow(false)}
        className="absolute right-4 top-4 py-1 rounded-lg px-3 bg-red-300 flex justify-center items-center text-2xl text-red-700 z-[999] cursor-pointer"
      >
        X
      </button>
      <video controls={true} className="w-full max-w-2xl rounded-md">
        <source src={vid} type="video/mp4" />
        Your browser does not support video.
      </video>
    </div>
  );
};

export default PopUpVideo;
