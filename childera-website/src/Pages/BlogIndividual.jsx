import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiUrl } from "../constants/constants";
import LoadingSpinner from "../Components/Blog/LoadingSpinner";

const BlogIndividual = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBlog = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`${apiUrl}/blogs/${id}`);
      const data = await res.json();
      if (res.ok) {
        setBlog(data.data);
      }
      throw data.error;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      fetchBlog();
    }
  }, [fetchBlog, id]);

  if (isLoading) return <LoadingSpinner />;

  if (!id || !blog) {
    return (
      <p className=" my-[100px] text-3xl font-fredoka text-center">
        Invalid Request! No Blog found!
      </p>
    );
  }

  return (
    <div className="mt-10">
      <div className="pt-20 pb-20 px-4 md:px-0">
        <h1 className="font-fredoka text-[36px] lg:text-[42px] mt-2 text-[#546E62] text-center mx-auto lg:w-[700px]">
          {blog.postTitle}
        </h1>
        <p className="text-[#3F6955] text-center px-4 md:px-[100px] mx-auto mt-4">
          {blog.description}
        </p>
      </div>
      <div className="px-4 pb-[150px] md:px-[100px] mx-auto mb-[56px]">
        <img
          src={blog.photoUrl}
          width={1175}
          height={630}
          className="flex w-full h-auto max-h-[630px] mb-10"
          alt="blog"
        />
        <p className="text-[#3F6955] font-semibold my-4">
          {new Date(blog.date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </p>
        <div
          className="blog_content_div"
          dangerouslySetInnerHTML={{
            __html: blog.content,
          }}
        />
      </div>
    </div>
  );
};

export default BlogIndividual;
