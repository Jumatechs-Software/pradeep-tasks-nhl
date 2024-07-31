/* eslint-disable react/prop-types */
import { useCallback, useEffect, useState } from "react";
import { apiUrl } from "../../constants/constants";
import LoadingSpinner from "./LoadingSpinner";
import { Link } from "react-router-dom";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBlogs = useCallback(async () => {
    try {
      const res = await fetch(
        `${apiUrl}/blogs?sortBy=createdDate&direction=DESC`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );
      const data = await res.json();
      if (res.ok) {
        setBlogs(data.data);
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

  if (blogs.length === 0)
    return <p className="my-3 text-[#3F6955] text-2xl">No Blogs found!</p>;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-y-8 md:gap-x-8 lg:gap-x-8 lg:gap-y-12">
      {/* <p>{JSON.stringify(blogs)}</p> */}
      {blogs.map((blog) => (
        <BlogCard key={blog.blogId} {...blog} />
      ))}
    </div>
  );
};

export default AllBlogs;

const BlogCard = ({ blogId, postTitle, description, date, photoUrl }) => {
  return (
    <Link to={`/blog/${blogId}`} className="flex flex-col">
      <img
        src={photoUrl}
        width={384}
        height={240}
        className="flex w-full h-auto"
        alt="blog"
      />
      <p className=" mt-8 text-[#3F6955] text-sm font-semibold">
        {new Date(date).toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </p>
      <p className="my-3 text-[#3F6955] text-2xl font-fredoka">{postTitle}</p>
      <p className="line-clamp-3 text-[#5E5E5E]">{description}</p>
    </Link>
  );
};
