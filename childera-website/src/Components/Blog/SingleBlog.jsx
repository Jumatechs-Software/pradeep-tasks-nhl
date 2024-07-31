import { useCallback, useEffect, useState } from "react";
import { apiUrl } from "../../constants/constants";
import LoadingSpinner from "./LoadingSpinner";
import { Link } from "react-router-dom";

const SingleBlog = ({ setShowMore }) => {
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBlogs = useCallback(async () => {
    try {
      const res = await fetch(
        `${apiUrl}/blogs?sortBy=createdDate&direction=DESC&pageSize=1`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );
      const data = await res.json();
      if (res.ok) {
        setBlog(data.data[0]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  if (isLoading) return <LoadingSpinner />;

  if (!blog)
    return <p className="my-3 text-[#3F6955] text-2xl">No Blogs found!</p>;

  return (
    <div className="flex flex-col">
      <Link
        to={`/blog/${blog.blogId}`}
        className=" font-poppins flex flex-col w-full"
      >
        <img
          className=" flex w-full h-auto max-h-[485px] mb-8"
          src={blog.photoUrl}
          width={1175}
          height={485}
          alt={blog.postTitle}
        />
        <p className=" text-[#3F6955] text-sm font-semibold">
          {" "}
          {new Date(blog.date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </p>
        <p className="my-3 text-[#3F6955] font-fredoka text-2xl">
          {blog.postTitle}
        </p>
        <p className=" text-base text-[#5E5E5E]">{blog.description}</p>
      </Link>
      <button
        onClick={() => setShowMore(true)}
        className="mx-auto mt-20  bg-[#F3CA5F] inline-flex w-[200px] h-[44px] justify-center text-base items-center text-[#546E62] rounded-[15px]"
      >
        View more
      </button>
    </div>
  );
};

export default SingleBlog;
