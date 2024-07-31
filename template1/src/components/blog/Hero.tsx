import MaxWidthWrapper from "../MaxWidthWrapper";

const BlogHero = () => {
  return (
    <section>
      <MaxWidthWrapper className="flex justify-between pb-[90px] pt-[100px] lg:pb-[112px] lg:pt-[116px]">
        <div className="flex w-full flex-col items-center justify-center gap-4 text-center">
          <p>Welcome to ABC center</p>
          <h1 className="text_title-1">Blog</h1>
          <p>
            Dive into our world of ideas and inspiration. Explore our blog for
            valuable insights and interesting content.
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default BlogHero;
