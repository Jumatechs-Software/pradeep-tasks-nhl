import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className="bg-accent_white pb-[226px] pt-[147px]">
      <MaxWidthWrapper>
        <div className="flex flex-wrap gap-[2px] bg-accent_maroon_deep">
          <Image
            width={314}
            height={307}
            className="max-h-[242px] w-auto flex-1"
            alt="1"
            src="/images/gallery/1.png"
          />
          <Image
            width={271}
            height={242}
            className="max-h-[242px] w-auto flex-1"
            alt="2"
            src="/images/gallery/2.png"
          />
          <Image
            width={614}
            height={242}
            className="flex max-h-[242px] w-auto flex-1"
            alt="3"
            src="/images/gallery/11.png"
          />
          <div className="relative col-span-3 h-[242px] w-[800px]">
            <div className="absolute left-0 top-0 z-10 h-[242px] max-w-[676px] rounded-r-[100px] bg-accent_maroon_deep pl-[46px] pt-[50px]">
              <p className="text-white text_title-3">
                Discover the array of activities showcased in our gallery.
              </p>
            </div>
            <Image
              width={579}
              height={242}
              className="absolute right-0 top-0 max-h-[242px] w-[579px] flex-1"
              alt="3"
              src="/images/gallery/3.png"
            />
          </div>
          <Image
            width={303.81}
            height={306}
            className="col-span-1 max-h-[242px] w-auto flex-1"
            alt="4"
            src="/images/gallery/4.png"
          />
          <Image
            width={349}
            height={242}
            className="max-h-[242px] w-[300px] flex-1"
            alt="5"
            src="/images/gallery/5.png"
          />
          <Image
            width={368.2}
            height={242}
            className="max-h-[242px] w-[300px] flex-1"
            alt="6"
            src="/images/gallery/6.png"
          />
          <Image
            width={480.65}
            height={242}
            className="max-h-[242px] w-auto"
            alt="7"
            src="/images/gallery/7.png"
          />
          <Image
            width={462.26}
            height={242}
            className="max-h-[242px] w-[462px] flex-1"
            alt="8"
            src="/images/gallery/8.png"
          />
          <Image
            width={445.08}
            height={242}
            className="max-h-[242px] w-[445px] flex-1"
            alt="9"
            src="/images/gallery/9.png"
          />
          <Image
            width={290.48}
            height={242}
            className="max-h-[242px] w-[290px] flex-1"
            alt="10"
            src="/images/gallery/10.png"
          />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Gallery;
