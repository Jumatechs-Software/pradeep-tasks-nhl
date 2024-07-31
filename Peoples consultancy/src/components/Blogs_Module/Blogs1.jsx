/* eslint-disable no-unused-vars */
import React from "react";
import { useParams,Link } from "react-router-dom";
import blogsData from "./Data";

const Blogs1 = () => {
  const { id } = useParams();
  const blogData = blogsData.find(blog => blog.id === parseInt(id));

  if (!blogData) {
    return <div>No data found for this ID</div>;
  }

  return (
    <div className="lg:px-20 pt-20 " >
      <div className="text-center mb-6">
        <p className="font-redhat font-medium text-[#5A67A7]">HOW TO-BLOG</p>
      </div>
      <div className="lg:w-[747px] lg:h-[109px] mx-auto text-center mb-6">
        <p className="font-redhat font-bold text-[#18181B] lg:text-3xl md:text-2xl text-xl pb-2">{blogData.title}</p>
        <div className="flex items-center mb-4">
          <img src={blogData.authorImage} alt={blogData.author} className="w-12 h-12 rounded-full relative lg:right-[70px]" />
          <div className="ml-2 relative lg:right-[70px]">
            <p className="font-poppins font-normal text-[#12141D99]">{blogData.author}</p>
            <p className="font-poppins font-normal text-[#12141D99]">{blogData.role}</p>
          </div>
          <div className="relative lg:left-[600px] md:left-[500px] left-[130px]">
          <p className="font-poppins font-normal text-[#5391DA]">{blogData.date}</p>
        </div>
        </div>
      </div>
      <div className="flex justify-center mb-8">
        <img src={blogData.blogImage} alt={blogData.title} className="w-full max-w-4xl" />
      </div>
      <div className="lg:w-[977px] md:w-[684px] w-[377px] lg:h-[144px] md:h-[72px] h-[144px] mx-auto text-center lg:mb-40 md:px-0 px-8 md:mb-60 mb-[400px]">
        <p className="font-poppins font-normal text-[#30303099]">{blogData.content}</p>
      </div>
      <div className="lg:w-[578px] lg:h-[110px] lg:px-0 md:px-8 px-4 lg:mb-0 mb-16">
        <p className="font-redhat font-bold lg:text-3xl text-2xl text-[#18181B] pb-3">Suggestion For Your Best</p>
        <p className="font-poppins font-normal text-[#12141D99]">{blogData.suggestion}</p>
      </div>
      <div className="flex justify-center lg:flex-nowrap flex-wrap gap-4 mb-20">
        {blogData.suggestions.map((suggestion, index) => (
          <div key={index} className="bg-white w-[313px] h-[380px] px-4 py-4 border shadow-xl">
            <div className="pb-4">
              <img src={suggestion.image} alt={suggestion.title} className="w-[286px] h-[193px]" />
            </div>
            <div>
              <p className="font-poppins font-semibold text-[#12141D] pb-2">{suggestion.title}</p>
              <p className="font-poppins font-normal text-[#30303099] pb-2">{suggestion.description}</p>
            </div>
            <div className="flex justify-between">
              <Link to={`/blog/${suggestion.id}`}>
              <button className="font-poppins font-normal text-[#303030]">Read more</button>
              </Link>
              <a href="/"><img src={suggestion.vector} alt="" className="w-[25px] h-[25px]" /></a>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs1;