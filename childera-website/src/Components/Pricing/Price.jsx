import React, { useState } from "react";
import bg from "../../assets/pricingbg.png";

function Price() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="px-4 md:px-0">
      <h1 className="font-fredoka text-[22px]  text-[#3F6955] text-center ">
        To personalize your pricing, we require some information.
      </h1>
      <h1 className="font-poppins mt-3 text-[22px]  text-[#5e5e5e] text-center ">
        Choose a plan that’s right for you
      </h1>
      <div>
        <label className="flex items-center justify-center mt-6 cursor-pointer">
          <div className="pr-3 text-[#191D23] font-poppins">Pay Monthly </div>
          <input
            type="checkbox"
            className="sr-only"
            checked={isChecked}
            onChange={handleToggle}
          />
          <div className="relative w-[44px] h-[24px]">
            <div className="absolute left-0 top-0 w-full h-full bg-[#3F6955] rounded-full shadow-inner" />
            <div
              className={`absolute left-0 top-0 w-6 h-6 bg-white rounded-full transition-transform transform ${
                isChecked ? "translate-x-full" : "translate-x-0"
              }`}
            />
          </div>
          <div className="ml-3 text-[#191D23] font-poppins">Pay Yearly</div>
        </label>
      </div>
      <div
        className="w-[350px] mt-20 pt-20 mx-auto pb-20 md:pt-0 md:pb-0 md:h-[369px] flex flex-col md:flex-row justify-center gap-8   items-center md:justify-around  md:w-[714px] lg:w-[1000px] bg-[#CEE3D4] rounded-[30px] "
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <div>
          <h1 className="font-fredoka text-xl md:text-[22px] text-[#3F6955]">
            Caption
          </h1>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-4">
              <h1 className="text-[#546E62] font-fredoka text-[42px] md:text-[64px]">
                $ 79.99
              </h1>
              <p className="font-poppins text-3xl text-[#546E62]">cents</p>
            </div>
            <p className="font-poppins text-3xl text-[#546E62]">Per Month</p>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start gap-6">
          <p className="w-[304px] md:w-[355px] lg:w-[566px] font-poppins text-sm text-center md:text-start lg:text-xl text-[#546E62]">
            Explore ChildEra's transparent and flexible pricing option. Get the
            best price from here.
          </p>

          <ul className="flex flex-col gap-5 text-[12px] md:text-sm lg:text-base">
            <li className="flex items-center gap-4">
              <div className="size-[32px] rounded-full flex justify-center items-center bg-[#F7F8F9]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="9"
                  viewBox="0 0 13 9"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.3162 0.207014C12.5701 0.473695 12.5597 0.895677 12.293 1.14954L4.58929 8.48287C4.45773 8.6081 4.28078 8.67424 4.09933 8.66598C3.91788 8.65772 3.74766 8.57579 3.62803 8.43912L0.665063 5.05451C0.422542 4.77748 0.45052 4.35629 0.727553 4.11377C1.00459 3.87125 1.42577 3.89923 1.66829 4.17626L4.17342 7.0379L11.3737 0.183799C11.6404 -0.070061 12.0624 -0.0596674 12.3162 0.207014Z"
                    fill="#3F6955"
                  />
                </svg>
              </div>
              <p className="text-[#546E62] font-poppins">
                Comprehensive Functionality
              </p>
            </li>
            <li className="flex  items-center gap-4">
              <div className="size-[32px] rounded-full flex justify-center items-center bg-[#F7F8F9]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="9"
                  viewBox="0 0 13 9"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.3162 0.207014C12.5701 0.473695 12.5597 0.895677 12.293 1.14954L4.58929 8.48287C4.45773 8.6081 4.28078 8.67424 4.09933 8.66598C3.91788 8.65772 3.74766 8.57579 3.62803 8.43912L0.665063 5.05451C0.422542 4.77748 0.45052 4.35629 0.727553 4.11377C1.00459 3.87125 1.42577 3.89923 1.66829 4.17626L4.17342 7.0379L11.3737 0.183799C11.6404 -0.070061 12.0624 -0.0596674 12.3162 0.207014Z"
                    fill="#3F6955"
                  />
                </svg>
              </div>
              <p className="text-[#546E62] font-poppins">
                Enhanced Parent Engagement
              </p>
            </li>
            <li className="flex  items-center gap-4">
              <div className="size-[32px] rounded-full flex justify-center items-center bg-[#F7F8F9]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="10"
                  viewBox="0 0 9 10"
                  fill="none"
                >
                  <path
                    d="M8.74304 9.24265C9.00339 8.9823 9.00339 8.56019 8.74304 8.29984L5.44367 5.00046L8.74395 1.70018C9.0043 1.43983 9.0043 1.01772 8.74395 0.757367C8.4836 0.497018 8.06149 0.497017 7.80114 0.757367L4.50086 4.05765L1.20057 0.757365C0.940222 0.497016 0.518112 0.497016 0.257762 0.757365C-0.0025874 1.01771 -0.00258732 1.43983 0.257762 1.70017L3.55805 5.00046L0.258667 8.29984C-0.0016821 8.56019 -0.00168171 8.9823 0.258668 9.24265C0.519017 9.503 0.941128 9.503 1.20148 9.24265L4.50086 5.94327L7.80023 9.24265C8.06058 9.503 8.48269 9.503 8.74304 9.24265Z"
                    fill="#3F6955"
                  />
                </svg>
              </div>
              <p className="text-[#546E62] font-poppins">
                Enhanced Parent Engagement
              </p>
            </li>
          </ul>
          <div>
            <button className="w-[180px] md:w-[340px] h-[44px] bg-[#F3CA5F] text-[#6C5826] font-bold">
              Start now
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-20">
        <button className="w-[200px] rounded-lg mt-10 h-[44px] bg-[#F3CA5F] text-[#6C5826] font-bold">
          View more
        </button>
      </div>
    </div>
  );
}

export default Price;
