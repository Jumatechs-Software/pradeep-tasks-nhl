import React, { useState } from "react";
import bg from "../assets/childcare-form.png";
function GetStart() {
  const [phoneNumber, setPhoneNumber] = useState();
  const handlePhoneChange = (e) => {
    let input = e.target.value.replace(/\D/g, "");
    let formattedNumber = "";
    if (!input.startsWith("1")) {
      input = "1" + input;
    }

    formattedNumber += "+1 ";

    if (input.length > 0) {
      formattedNumber += "(" + input.slice(1, 4);

      if (input.length > 3) {
        formattedNumber += ") " + input.slice(4, 7);
      }
      if (input.length >= 7) {
        formattedNumber += "-" + input.slice(7, 11);
      }
    }

    setPhoneNumber(formattedNumber);
  };

  const handleBackspace = () => {
    setPhoneNumber(phoneNumber.slice(0, -1));
  };
  return (
    <div className="mt-10">
      <div className="flex  flex-col gap-6 px-4 py-10 lg:px-0 justify-center items-center">
        <h1 className="text-[34px]  md:text-[34px] lg:text-[42px] text-[#546E62]  font-fredoka ">
          Get Started Today
        </h1>
        <p className="font-poppins text-[14px] text-center lg:text-start text-[#5E5E5E] ">
          Complete the form for a free Child Era billing demo, discovering easy
          setup and quick start.
        </p>
      </div>

      <div
        className="bg-[#3F6955] pt-20 pb-20   bg-contain"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className=" bg-[#749082] pt-2 lg:w-[751px] mx-auto rounded-2xl pb-10 bg-opacity-70 ">
          <form
            action=""
            className="grid grid-cols-1  md:grid-cols-2 gap-4 place-items-center mt-4 place-content-center"
          >
            <div className="flex flex-col gap-3 ">
              <label htmlFor="" className="text-lg text-[#ffffff] font-poppins">
                I am...
              </label>
              <input
                type="text"
                placeholder="Mother"
                className="lg:w-[320px] ps-4 placeholder:text-[#5E5E5E] w-[325px] bg-white outline-none border-none rounded-lg h-[48px]"
                name=""
                id=""
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-lg text-[#ffffff] font-poppins">
                First name
              </label>
              <input
                type="text"
                placeholder="First name"
                className="lg:w-[320px] ps-4 placeholder:text-[#5E5E5E] w-[325px] bg-white outline-none border-none rounded-lg h-[48px]"
                name=""
                id=""
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-lg text-[#ffffff] font-poppins">
                Last name
              </label>
              <input
                type="text"
                placeholder="Last name"
                className="lg:w-[320px] ps-4 placeholder:text-[#5E5E5E] w-[325px] bg-white outline-none border-none rounded-lg h-[48px]"
                name=""
                id=""
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-lg text-[#ffffff] font-poppins">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email ID"
                className="lg:w-[320px] ps-4 placeholder:text-[#5E5E5E] w-[325px] bg-white outline-none border-none rounded-lg h-[48px]"
                name=""
                id=""
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-lg text-[#ffffff] font-poppins">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Your mobile number"
                className="lg:w-[320px] ps-4 placeholder:text-[#5E5E5E] w-[325px] bg-white outline-none border-none rounded-lg h-[48px]"
                name=""
                id=""
                value={phoneNumber}
                onChange={handlePhoneChange}
                onKeyDown={(e) => {
                  if (e.key === "Backspace") {
                    e.preventDefault();
                    handleBackspace();
                  }
                }}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-lg text-[#ffffff] font-poppins">
                Center Name
              </label>
              <input
                type="text"
                className="lg:w-[320px] ps-4 placeholder:text-[#5E5E5E] w-[325px] bg-white outline-none border-none rounded-lg h-[48px]"
                name=""
                id=""
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-lg text-[#ffffff] font-poppins">
                Role
              </label>
              <input
                type="text"
                className="lg:w-[320px] ps-4 placeholder:text-[#5E5E5E] w-[325px] bg-white outline-none border-none rounded-lg h-[48px]"
                name=""
                id=""
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-lg text-[#ffffff] font-poppins">
                State
              </label>
              <input
                type="text"
                className="lg:w-[320px] ps-4 placeholder:text-[#5E5E5E] w-[325px] bg-white outline-none border-none rounded-lg h-[48px]"
                name=""
                id=""
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-lg text-[#ffffff] font-poppins">
                Anything You would like us to know!
              </label>
              <textarea
                type="text"
                className="lg:w-[320px] pt-2 h-[94px] ps-4 placeholder:text-[#5E5E5E] w-[325px] bg-white outline-none border-none rounded-lg "
                name=""
                id=""
              />
            </div>
            <div className="flex justify-center  "></div>
          </form>
          <div className="flex justify-center items-center mt-4">
            <button className="text-[#6C5826] rounded-lg bg-[#F3CA5F] font-semibold font-poppins  w-[250px] mx-auto  h-[54px]">
              Get A Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStart;
