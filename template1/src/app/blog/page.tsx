import BlogList from "@/components/blog/BlogList";
import BlogHero from "@/components/blog/Hero";
import CloudBackground from "@/components/Cloud";
import Contact from "@/components/Contact";
import React from "react";

const BlogPage = () => {
  return (
    <div className="mt-[90px]">
      <BlogHero />
      <div className="relative h-[150px] w-full">
        <CloudBackground width={1500} height={100} />
      </div>
      <BlogList />
      <Contact />
    </div>
  );
};

export default BlogPage;
