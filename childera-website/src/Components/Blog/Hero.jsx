const BlogHero = () => {
  return (
    <div className="pt-20 pb-20 px-4 md:px-0">
      <p className="text-center text-[#3F6955] font-poppins">Our Blog</p>
      <h1 className="font-fredoka text-[36px] lg:text-[42px] mt-2 text-[#546E62] text-center mx-auto lg:w-[700px]">
        Narratives and Conversations
      </h1>
      <p className="text-center font-poppins text-[#5e5e5e] mt-2 max-w-[613px] mx-auto">
        Stay updated on innovative product features, technological advancements,
        solutions, and updates by subscribing to our channel.
      </p>
      <div className=" mt-5 flex mx-auto gap-5 items-center justify-center">
        <input className=" pl-4 bg-[#FFF] rounded-[20px] border-[1px] border-[#E2E2E2] w-[323px] h-[44px]" />
        <button className="md:px-[24px] px-10 py-[12px] bg-[#F3CA5F] text-[#6C5826] text-lg font-semibold font-poppins rounded-[15px]">
          Send
        </button>
      </div>
    </div>
  );
};

export default BlogHero;
