import React from "react";
import Hero from "./Hero";
import Button from "./Button";
import Contact from "./Conatct";
function Checkin() {
  const items = [
    {
      heading: "Digital Check-In/Out:",
      parah:
        "ChildEra Management Software offers digital check-in/out features, allowing parents to sign their children in and out electronically upon arrival and departure. This streamlines the check-in process, reduces paperwork, and provides accurate attendance records for childcare centers.      ",
    },
    {
      heading: "Secure Verification:",
      parah:
        "With ChildEra, childcare providers can verify the identity of parents or authorized guardians during the check-in/out process. This ensures the safety and security of children by preventing unauthorized individuals from picking them up and enhances the overall safety protocols of the childcare center.      ",
    },
    {
      heading: "Real-Time Notifications:   ",
      parah:
        "ChildEra sends real-time notifications to parents when their child is checked in or out of the childcare center. These notifications provide parents with peace of mind, knowing that their child has arrived safely at the center or has been picked up at the end of the day, enhancing communication and transparency.      ",
    },
    {
      heading: "Attendance Tracking:",
      parah:
        "ChildEra's check-in/out feature enables childcare centers to accurately track attendance for each child. This data is invaluable for administrative purposes, such as monitoring attendance patterns, calculating billing hours, and ensuring compliance with licensing requirements.      ",
    },
    {
      heading: "Parent Convenience:   ",
      parah:
        "By offering digital check-in/out options, ChildEra enhances convenience for parents by eliminating the need for manual sign-in sheets or paper-based processes. Parents can check their child in/out quickly and easily using their mobile devices, saving time and streamlining their childcare drop-off and pick-up routines.      ",
    },
  ];
  return (
    <div>
      <Hero />
      <div className="flex justify-center items-center flex-col gap-4 pt-20 pb-20 px-4 md:px-0">
        <h1 className="font-fredoka text-[#3F6955] text-[32px] lg:text-[42px] text-center">
          Check <span className="text-[#F3CA5F]">in/ Out </span>
        </h1>
        <p className="text-[#3F6955] md:w-[600px] text-center font-poppins">
          Manage arrivals and departures with digital check-in/out, ensuring
          security and accuracy, enhancing childcare operations.
        </p>
      </div>
      <div className="flex flex-col px-4 md:px-0 gap-10">
        {items.map((item, i) => {
          return (
            <div
              className="md:w-[600px] lg:w-[1100px] flex flex-col mx-auto gap-4 "
              key={i}
            >
              <div className="flex justify-between w-full  items-center">
                <h1 className="text-[#3F6955] font-fredoka text-lg md:text-xl">
                  {item.heading}
                </h1>
              </div>
              <p className="md:w-[600px] lg:w-[1000px] text-[#3F6955] text-sm lg:text-lg font-poppins">
                {item.parah}
              </p>
            </div>
          );
        })}
      </div>
      <Button />
      <Contact />
    </div>
  );
}

export default Checkin;
