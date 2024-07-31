/* eslint-disable react/prop-types */
import { cn } from "../../lib/utils";
import {
  ChevronLeft,
  ChevronRight,
  NewspaperIcon,
  UserIcon,
} from "lucide-react";
import { memo, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.svg";

const menus = [
  // {
  //   id: 1,
  //   title: "User",
  //   pages: [
  //     {
  //       name: "List",
  //       link: "/admin/user",
  //     },
  //     {
  //       name: "Create",
  //       link: "/admin/user/create",
  //     },
  //     {
  //       name: "Edit",
  //       link: "/admin/user/edit/1",
  //     },
  //   ],
  // },
  {
    id: 2,
    title: "Blog",
    pages: [
      {
        name: "List",
        link: "/admin/blog",
      },
      {
        name: "Create",
        link: "/admin/blog/create",
      },
      // {
      //   name: "Edit",
      //   link: "/admin/blog/edit/1",
      // },
    ],
  },
];

const LeftMenuBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={cn(
        " w-[15%]  lg:w-[25%] border-r-[1px] sticky max-h-screen px-2 top-0 left-0 h-screen pt-20 border-slate-200 transition-all ease-in-out duration-500",
        !isOpen ? " w-[0%] lg:w-[8.5%]  pt-12 px-1" : null
      )}
    >
      <Link to="/" className="  absolute top-6 lg:top-0 left-0 w-full">
        <img
          className={cn(" ml-1 lg:ml-2 h-auto", !isOpen ? " lg:pr-4" : "")}
          alt="logo"
          src={Logo}
          width={115}
          height={51}
        />
      </Link>
      {menus.map((menu) => (
        <MenuOptions small={!isOpen} key={menu.id} {...menu} />
      ))}
      <button
        className={cn(
          "absolute z-50 top-2 -right-2.5 bg-white border-[1px] border-slate-200 w-5 h-5 rounded-full p-1 flex justify-center items-center",
          !isOpen && "w-4 h-4 p-[2px]"
        )}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <ChevronLeft /> : <ChevronRight />}
      </button>
    </div>
  );
};

const MenuOptions = memo(({ small, pages, title }) => {
  const { pathname } = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const contentRef = useRef(null);

  useEffect(() => {
    setIsOpen(false);
  }, [setIsOpen, small]);

  return (
    <div
      ref={contentRef}
      className={cn(
        " group/item font-medium relative z-10 rounded-md text-sm mb-2 transition-height text-[14px] leading-4 ease-in-out duration-500",
        small && "mt-2 hidden lg:block"
      )}
    >
      <div
        className={cn(
          `relative z-10 py-3 flex items-center justify-between cursor-pointer px-2 hover:bg-slate-100 rounded-md`,
          pathname.includes(title.toLowerCase()) ? "bg-[#EEFAF4]" : null
        )}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="w-fit justify-center flex gap-2 items-center flex-wrap">
          {title === "User" ? (
            <UserIcon className=" lg:w-6 lg:h-6 w-4 h-5" />
          ) : (
            <NewspaperIcon className=" lg:w-6 lg:h-6 w-4 h-5" />
          )}
          <h4>{title}</h4>
        </div>
        <div className=" hidden lg:block">
          <ChevronRight size={16} />
        </div>
      </div>

      <div
        className={cn(
          `flex flex-col static z-10`,
          isOpen && !small ? "flex" : "hidden",
          small && "floating_menu"
        )}
      >
        {pages.map((opt) => {
          return (
            <div key={opt.name} className=" flex flex-col lg:gap-1">
              <Link
                to={opt.link}
                className=" pl-1 lg:pl-3 py-2 border-b-[1px] border-t-[1px] rounded-md flex hover:bg-slate-100 items-center gap-2 lg:gap-4"
              >
                <div
                  className={cn(
                    "w-1 h-1 rounded-full bg-slate-500 hidden lg:block",
                    opt.link === pathname ? "w-1.5 h-1.5 bg-green-500" : null
                  )}
                />
                <span className=" text-xs lg:text-sm">{opt.name}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
});

MenuOptions.displayName = "MenuOptions";

export default LeftMenuBar;
