import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

type DashboardMiniNavProps = {
  title: string;
  navItemsInOrder: { name: string; link: string }[];
};

const DashboardMiniNav = ({
  navItemsInOrder,
  title,
}: DashboardMiniNavProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className=" text-2xl font-semibold">{title}</h1>
      <div className=" flex items-center gap-4 text-sm">
        {navItemsInOrder.map((item, i) => {
          return (
            <Link
              to={item.link}
              key={item.name}
              className="flex gap-4 items-center"
            >
              <span>{item.name}</span>
              {i + 1 !== navItemsInOrder.length && (
                <div
                  className={cn(
                    " w-[6px] h-[6px] bg-black rounded-full border-[1px]",
                    i === navItemsInOrder.length - 2 && "bg-green-500"
                  )}
                />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardMiniNav;
