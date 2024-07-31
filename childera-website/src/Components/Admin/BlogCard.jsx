/* eslint-disable react/prop-types */
import useOutsideAlerter from "../../hooks/useOutsideClick";
import { EllipsisIcon, EyeIcon, PencilIcon, TrashIcon } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { cn } from "../../lib/utils";
import { Link } from "react-router-dom";

import DefaultCover from "../../assets/blog_default.jpg";

const BlogCard = ({
  blogId,
  postTitle,
  description,
  photoUrl,
  date,
  onDelete,
}) => {
  const [seeOptions, setSeeOptions] = useState(false);

  const ref = useOutsideAlerter(setSeeOptions);

  return (
    <Card className=" w-full h-[240px] flex text-[#5E5E5E]">
      <div className="p-4 flex-[5] h-full flex flex-col">
        <div className="flex flex-none justify-between items-center mb-4">
          <span className=" text-sm py-1.5 px-3 bg-teal-400 rounded-md text-teal-800">
            Published
          </span>
          <span>
            {" "}
            {new Date(date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>
        <div className="flex-grow space-y-6">
          <p className=" line-clamp-2 font-semibold">{postTitle}</p>
          <p className=" line-clamp-2">{description}</p>
        </div>
        <div className="flex-none relative">
          <Button
            onClick={() => setSeeOptions((prev) => !prev)}
            variant="ghost"
            className="p-2 rounded-full"
          >
            <EllipsisIcon />
          </Button>

          <div
            ref={ref}
            className={cn(
              "absolute left-[-18%] bottom-[105%] hidden flex-col gap-2 rounded-lg px-4 py-3 bg-slate-100/80 backdrop-blur-lg shadow-lg",
              seeOptions && "flex"
            )}
          >
            <Link
              to={`/admin/blog/${blogId}`}
              className="flex gap-2 hover:bg-slate-100 rounded-md px-2 items-center"
            >
              <EyeIcon size={18} color="black" /> View
            </Link>
            <Link
              to={`/admin/blog/edit/${blogId}`}
              className="flex gap-2 hover:bg-slate-100 rounded-md px-2 items-center"
            >
              <PencilIcon size={18} color="black" /> Edit
            </Link>
            <div
              onClick={() => onDelete(blogId)}
              className="flex gap-2 hover:bg-slate-100 rounded-md px-2 items-center cursor-pointer"
            >
              <TrashIcon size={18} color="red" /> Delete
            </div>
          </div>
        </div>
      </div>
      <CardContent className="flex-[3] h-full p-2 rounded-lg">
        <img
          src={photoUrl ? photoUrl : DefaultCover}
          width={200}
          height={240}
          className="w-full h-full object-cover rounded-lg"
        />
      </CardContent>
    </Card>
  );
};

export default BlogCard;
