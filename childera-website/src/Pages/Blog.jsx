import { useState } from "react";
import BlogHero from "../Components/Blog/Hero";
import AllBlogs from "../Components/Blog/AllBlogs";
import SingleBlog from "../Components/Blog/SingleBlog";
import { Form } from "../Components/Childera/Form";

const Blog = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="mt-10">
      <BlogHero />
      <div className="px-4 pb-[150px] md:px-[100px] mx-auto mb-[56px]">
        <p className=" text-[#3F6955] font-fredoka text-[22px] leading-[32px] mb-8">
          {showMore ? "All" : "Recent"} blog posts
        </p>
        {showMore ? <AllBlogs /> : <SingleBlog setShowMore={setShowMore} />}
      </div>
      <Form />
    </div>
  );
};

export default Blog;
