import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Input from "../ui/Input";

const BlogList = () => {
  const staffs = [
    {
      name: "Zero to Three",
      category: "Expert advice",
      des: "Lorem ipsum dolor sit amet, consectetur dia Sed adi piscing elit. Integer nec Praesent Sed libero. Sed curs",
      image: "/images/blog/1.png",
    },
    {
      name: "Zero to Three",
      category: "Expert advice",
      des: "Lorem ipsum dolor sit amet, consectetur dia Sed adi piscing elit. Integer nec Praesent Sed libero. Sed curs",
      image: "/images/blog/1.png",
    },
    {
      name: "Zero to Three",
      category: "Expert advice",
      des: "Lorem ipsum dolor sit amet, consectetur dia Sed adi piscing elit. Integer nec Praesent Sed libero. Sed curs",
      image: "/images/blog/1.png",
    },
    {
      name: "Zero to Three",
      category: "Expert advice",
      des: "Lorem ipsum dolor sit amet, consectetur dia Sed adi piscing elit. Integer nec Praesent Sed libero. Sed curs",
      image: "/images/blog/1.png",
    },
    {
      name: "Zero to Three",
      category: "Expert advice",
      des: "Lorem ipsum dolor sit amet, consectetur dia Sed adi piscing elit. Integer nec Praesent Sed libero. Sed curs",
      image: "/images/blog/1.png",
    },
    {
      name: "Zero to Three",
      category: "Expert advice",
      des: "Lorem ipsum dolor sit amet, consectetur dia Sed adi piscing elit. Integer nec Praesent Sed libero. Sed curs",
      image: "/images/blog/1.png",
    },
  ];
  return (
    <div className="bg-accent_white pb-24 pt-10 lg:pb-[217px] lg:pt-[140px]">
      <MaxWidthWrapper>
        <p className="text-center text-accent_yellow">Our blog </p>
        <h2 className="my-5 text-center text-accent_maroon_deep text_title-2">
          Exploring Insights, Ideas, and Inspiration in Our Blogs
        </h2>
        <p className="mb-8 text-center text-accent_slate lg:mb-14">
          Stay updated with the freshest developments in the industry, exclusive
          interviews, cutting-edge technologies, and invaluable resources.
        </p>
        <div className="mx-auto mb-14 w-full lg:mb-20 lg:w-[480px]">
          <div className="relative">
            <Input
              placeholder="Search"
              className="min-w-full self-center pl-10"
            />
            <Image
              src="/images/search.svg"
              width={20}
              height={20}
              alt="search"
              className="absolute left-4 top-[50%] -translate-y-[50%]"
            />
          </div>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="grid grid-cols-1 gap-y-6 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-[30px]">
        {staffs.map((blog) => (
          <BlogCard {...blog} key={blog.name} />
        ))}
      </MaxWidthWrapper>
    </div>
  );
};

const BlogCard = ({
  des,
  name,
  category,
  image,
}: {
  name: string;
  category: string;
  des: string;
  image: string;
}) => {
  return (
    <div className="flex flex-col p-6 shadow-md">
      <Image
        src={image}
        width={337.67}
        height={240}
        alt={name}
        className="mb-8"
      />
      <p className="font-poppins text-[22px] font-medium leading-9 text-accent_yellow">
        {category}
      </p>
      <h6 className="font-gilroy text-[22px] font-semibold leading-[32px] text-accent_maroon_deep">
        {name}
      </h6>
      <p className="text-accent_slate">{des}</p>
    </div>
  );
};

export default BlogList;
