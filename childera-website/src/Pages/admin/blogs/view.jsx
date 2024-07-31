import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../../Components/Blog/LoadingSpinner";
import { apiUrl } from "../../../constants/constants";

const ViewSingleBlog = () => {
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
    return <p> Invalid Request! No Blog found!</p>;
  }

  return (
    <div className="px-6 pb-[120px] mt-4">
      <div
        style={{
          background: `linear-gradient(rgba(22, 28, 36, 0.64) 0%, rgba(22, 28, 36, 0.64) 100%) center center / cover no-repeat, url(${
            blog.photoUrl ? blog.photoUrl : "/cover_3.jpg"
          })`,
          backgroundPosition: "center center",
        }}
        className="flex w-full bg-contain bg-center h-[300px] md:h-[480px] pt-8 pl-4"
      >
        <p className=" text-3xl text-white font-semibold mt-12 ml-4 max-w-[50%]">
          {blog.postTitle}
        </p>
      </div>
      <p className=" my-12">{blog.description}</p>
      <div
        // className=" px-12"
        className="blog_content_div"
        dangerouslySetInnerHTML={{
          __html: blog.content,
        }}
      ></div>
    </div>
  );
};

export default ViewSingleBlog;
