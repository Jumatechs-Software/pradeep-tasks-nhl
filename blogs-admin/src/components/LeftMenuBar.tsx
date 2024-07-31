import { cn } from "@/lib/utils";
import {
  ChevronLeft,
  ChevronRight,
  NewspaperIcon,
  UserIcon,
} from "lucide-react";
import { memo, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const menus = [
  {
    id: 1,
    title: "User",
    pages: [
      {
        name: "List",
        link: "/admin/user",
      },
      {
        name: "Create",
        link: "/admin/user/create",
      },
      {
        name: "Edit",
        link: "/admin/user/edit/1",
      },
    ],
  },
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
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div
      className={cn(
        "w-[25%] border-r-[1px] sticky max-h-screen px-2 top-0 left-0 h-screen pt-[72px] border-slate-200 transition-all ease-in-out duration-500",
        !isOpen ? "w-[8.5%] pt-12 px-1" : null
      )}
    >
      <div className="absolute top-0 left-0 w-full">
        <img
          className={cn("ml-2 h-auto", !isOpen ? " pr-4" : "")}
          alt="logo"
          src="/logo.svg"
          width={115}
          height={51}
        />
      </div>
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

type MenuOptionsProps = (typeof menus)[0] & {
  small: boolean;
};

const MenuOptions = memo(({ small, pages, title }: MenuOptionsProps) => {
  const { pathname } = useLocation();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOpen(false);
  }, [small]);

  return (
    <div
      ref={contentRef}
      className={cn(
        " group/item font-medium relative z-10 rounded-md text-sm mb-2 transition-height text-[14px] leading-4 ease-in-out duration-500"
      )}
    >
      <div
        className={cn(
          `relative z-10 py-3 flex items-center justify-between cursor-pointer px-2 hover:bg-slate-100 rounded-md`,
          pathname.includes(title.toLowerCase()) ? "bg-accent_lime_1" : null
        )}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="w-fit justify-center flex gap-2 items-center flex-wrap">
          {title === "User" ? (
            <UserIcon size={22} />
          ) : (
            <NewspaperIcon size={22} />
          )}
          <h4>{title}</h4>
        </div>
        <div>
          <ChevronRight size={16} />
        </div>
      </div>

      <div
        className={cn(
          `flex flex-col static z-10`,
          isOpen && !small ? "flex" : "hidden",
          small &&
            " w-[120px] px-2 py-3 h-fit hidden group-hover/item:flex rounded-md shadow-lg bg-slate-200 absolute -right-[120px] top-0 backdrop-blur-md"
        )}
      >
        {pages.map((opt) => {
          return (
            <div key={opt.name} className=" flex flex-col gap-1">
              <Link
                to={opt.link}
                className="pl-3 py-2 rounded-md flex hover:bg-slate-100 items-center gap-4"
              >
                <div
                  className={cn(
                    "w-1 h-1 rounded-full bg-slate-500",
                    opt.link === pathname ? "w-1.5 h-1.5 bg-green-500" : null
                  )}
                />
                <span className="text-sm">{opt.name}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default LeftMenuBar;
