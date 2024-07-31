import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const items = [
    {
      label: "Solutions",
      path: "/solution/childcare",
      dropdownItems: [
        { label: "Childcare", path: "/solution/childcare" },
        { label: "Program", path: "/solution/program" },
        { label: "Services", path: "/solution/services" },
        { label: "Parent Features", path: "/solution/featuresofparent" },
        { label: "Billing", path: "/solution/billing" },
        { label: "Features of app", path: "/solution/featuresofapp" },
      ],
    },
    {
      label: "Resource",
      dropdownItems: [
        { label: "About Us", path: "/resource/aboutus" },
        { label: "Customer Feedback", path: "/resource/customerfeedback" },
        { label: "Blog", path: "/blog" },
      ],
    },
    { label: "Pricing", path: "/pricing" },
    { label: "Support", path: "/support" },
  ];

  const [dropdownIndex, setDropdownIndex] = useState(null);
  const [activeItem, setActiveItem] = useState(0);
  const [dropdown, setDropdown] = useState(false);

  const toggleMobileMenu = () => {
    setDropdown(!dropdown);
  };

  const handleItemClick = (index) => {
    setActiveItem(index);
    setDropdownIndex(null);
    setDropdown(false);
  };

  const handleParentItemClickMobile = (index) => {
    if (dropdownIndex === index) {
      setDropdownIndex(null);
      setDropdown(false);
    } else {
      setDropdown(false);
      setDropdownIndex(index);
    }
  };

  const handleItemClickMobile = (index) => {
    setActiveItem(index);
    setDropdownIndex(null);
    setDropdown(false);
  };

  return (
    <div className="bg-[#EEFAF4] fixed top-0 w-full z-[99] flex justify-between px-4 items-center">
      <div>
        <Link to="/">
          <img src={logo} className="w-[120px] object-cover" alt="" />
        </Link>
      </div>
      <div className="hidden lg:block">
        <ul className="flex gap-8">
          {items.map((item, index) => (
            <li
              key={index}
              className={`font-poppins text-[#545454] cursor-pointer ${
                activeItem === index ? "border-b-4 border-[#F3C95F]" : ""
              }`}
              onMouseEnter={() => setDropdownIndex(index)}
              onMouseLeave={() => setDropdownIndex(null)}
            >
              <Link to={item.path} onClick={() => handleItemClick(index)}>
                {item.label}
              </Link>
              {dropdownIndex === index && item.dropdownItems && (
                <ul
                  className={`absolute z-[99] flex gap-4 flex-col ${
                    index < 2 ? "bg-white" : ""
                  } text-[#545454] p-2 rounded-md`}
                >
                  {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                    <li key={dropdownIndex}>
                      <Link
                        to={dropdownItem.path}
                        onClick={() => handleItemClick(index)}
                      >
                        {dropdownItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      {/* mobile */}
      <div className="flex gap-2 items-center">
        <div
          className={
            dropdown
              ? "bg-[#3F6955] z-[99] flex flex-col transition-all lg:hidden duration-300 gap-4 ps-2 fixed top-0 left-0 h-full w-full overflow-y-auto"
              : "'bg-[#3F6955] flex flex-col gap-4 z-[99] ps-2 fixed top-0 -left-full transition-all lg:hidden duration-300 h-full w-[85%]'"
          }
        >
          <div className="flex justify-end pe-5 mt-5 gap-4 items-center">
            <div>
              <button className="md:px-[24px] px-10 py-[12px] rounded-lg bg-[#F3CA5F] text-[#6C5826] text-lg font-semibold font-poppins">
                Log In
              </button>
            </div>
            <FaBarsStaggered
              className="text-3xl lg:hidden text-[#FFFFFF]"
              onClick={toggleMobileMenu}
            />
          </div>
          <div className="mt-3 flex flex-col items-center">
            <ul className="flex flex-col gap-2">
              {items.map((item, index) => (
                <li
                  key={index}
                  className={`font-poppins text-center text-white cursor-pointer ${
                    dropdownIndex === index ? "text-[#6C5826]" : ""
                  }`}
                >
                  <div onClick={() => handleParentItemClickMobile(index)}>
                    <Link to={item.path}>{item.label}</Link>
                  </div>
                  {dropdownIndex === index ||
                    (item.dropdownItems && (
                      <ul
                        className={`text-white flex flex-col gap-3 mt-3 text-center `}
                      >
                        {item.dropdownItems.map(
                          (dropdownItem, dropdownIndex) => (
                            <li key={dropdownIndex}>
                              <Link
                                to={dropdownItem.path}
                                onClick={() => handleItemClickMobile(index)}
                              >
                                {dropdownItem.label}
                              </Link>
                            </li>
                          )
                        )}
                      </ul>
                    ))}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="hidden lg:block">
            <button className="px-[24px] py-[12px] rounded-lg bg-[#F3CA5F] text-[#6C5826] text-lg font-semibold font-poppins">
              Log In
            </button>
          </div>
          <FaBarsStaggered
            className="text-3xl text-[#3F6955] lg:hidden"
            onClick={toggleMobileMenu}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
