"use client";

import Link, { LinkProps } from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import CloudBackground from "./Cloud";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type TLinkProps = LinkProps & {
  children: React.ReactNode;
};

const ScrollTopLink = ({ children, ...props }: TLinkProps) => {
  return (
    <Link onClick={() => window.scrollTo(0, 0)} {...props}>
      {children}
    </Link>
  );
};

const Footer = () => {
  const path = usePathname();
  return (
    <div>
      <div className="relative z-30 -mb-14 h-[150px] w-full md:-mb-20 md:h-[200px] lg:-mb-8">
        <CloudBackground
          className={cn(
            "absolute top-0 bg-transparent",
            path === "/" && "bg-white",
          )}
          src="/cloud_footer.png"
          width={1500}
          height={200}
        />
      </div>
      <div className="relative z-[999] bg-accent_maroon text-accent_white text_title-p md:mt-20">
        <MaxWidthWrapper className="flex flex-col pb-8">
          <div className="flex flex-col items-center gap-[50px] md:flex-row md:items-start lg:gap-[130px]">
            <div className="flex max-w-[236px] flex-col gap-3 lg:max-w-[350px]">
              <div className="flex items-center justify-center gap-[30px] md:justify-start lg:gap-[63px]">
                <ScrollTopLink href="/">
                  <Image src="/logo.svg" width={50} height={50} alt="logo" />
                </ScrollTopLink>
                <h3 className="text_title-4">Brand Name</h3>
              </div>
              <p className="text-center md:text-start">
                Journey through the chapters of our story. Explore our values,
                milestones, and the essence that defines our brand.
              </p>
              <div className="flex justify-center gap-6 md:justify-start">
                <TwitterIcon size={24} />
                <FacebookIcon size={24} />
                <InstagramIcon size={24} />
                <LinkedinIcon size={24} />
                {/* <Image src="/twitter.svg" width={24} height={24} alt="x" />
                <Image src="/facebook.svg" width={24} height={24} alt="fb" />
                <Image src="/instagram.png" width={24} height={24} alt="ins" />
                <Image src="/linkedin.png" width={24} height={24} alt="ln" /> */}
              </div>
            </div>
            <div className="flex flex-col gap-7 text-center md:text-start">
              <h6 className="text-[20px] font-semibold leading-[18px] tracking-[1px] text-accent_yellow">
                COMPANY
              </h6>
              <ScrollTopLink href="/about">About</ScrollTopLink>
              <ScrollTopLink href="/staff">Our Staff</ScrollTopLink>
              <ScrollTopLink href="/programs">Program</ScrollTopLink>
              <ScrollTopLink href="/career">Career</ScrollTopLink>
            </div>
            <div className="flex flex-col gap-7 text-center md:text-start">
              <h6 className="text-[20px] font-semibold leading-[18px] tracking-[1px] text-accent_yellow">
                RESOURCES
              </h6>
              <ScrollTopLink href="/gallery">Gallery</ScrollTopLink>
              <ScrollTopLink href="/blog">Blog</ScrollTopLink>
              <ScrollTopLink href="/application">Application</ScrollTopLink>
            </div>
            <div className="flex flex-col gap-7 text-center md:text-start">
              <h6 className="text-[20px] font-semibold leading-[18px] tracking-[1px] text-accent_yellow">
                HELP
              </h6>
              <ScrollTopLink href="/support">Customer Support</ScrollTopLink>
              <ScrollTopLink href="/terms_&_conditions">
                Terms & Conditions
              </ScrollTopLink>
              <ScrollTopLink href="/privacy_policy">
                Privacy Policy
              </ScrollTopLink>
            </div>
          </div>

          <div className="mb-5 mt-8 h-[1px] w-full bg-accent_white" />
          <p className="text-center">
            © Copyright 2024, All Rights Reserved by (Brand name){" "}
          </p>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default Footer;
