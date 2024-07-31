"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./ui/Button";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { cn } from "@/lib/utils";
import { useState } from "react";

const NavBar = () => {
  const path = usePathname();
  const [showNav, setShowNav] = useState(false);
  return (
    <nav className="fixed left-0 top-0 z-[999] w-full bg-accent_maroon_deep py-5">
      <MaxWidthWrapper className="flex max-h-[50px] items-center justify-between">
        <Link href="/">
          <Image src="/logo.svg" width={50} height={50} alt="logo" />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <Link
            className={cn(
              path === "/"
                ? "border-b-2 border-b-accent_yellow pb-[1px] text-accent_yellow"
                : null,
            )}
            href="/"
          >
            Home
          </Link>
          <Link
            className={cn(
              path === "/about"
                ? "border-b-2 border-b-accent_yellow pb-[1px] text-accent_yellow"
                : null,
            )}
            href="/about"
          >
            About
          </Link>
          <Link
            className={cn(
              path === "/career"
                ? "border-b-2 border-b-accent_yellow pb-[1px] text-accent_yellow"
                : null,
            )}
            href="/career"
          >
            Career
          </Link>
          <Link
            className={cn(
              path === "/programs"
                ? "border-b-2 border-b-accent_yellow pb-[1px] text-accent_yellow"
                : null,
            )}
            href="/programs"
          >
            Programs
          </Link>
          <Link
            className={cn(
              path === "/blog"
                ? "border-b-2 border-b-accent_yellow pb-[1px] text-accent_yellow"
                : null,
            )}
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className={cn(
              path === "/contact"
                ? "border-b-2 border-b-accent_yellow pb-[1px] text-accent_yellow"
                : null,
            )}
            href="/contact"
          >
            Contact
          </Link>
        </div>
        <Button className="hidden lg:inline-flex">Sign Up</Button>
        <button onClick={() => setShowNav(true)} className="block lg:hidden">
          <Image src="/menu.svg" width={50} height={50} alt="logo" />
        </button>
      </MaxWidthWrapper>
      <MobileNav setShow={setShowNav} show={showNav} />
    </nav>
  );
};

const MobileNav = ({
  setShow,
  show,
}: {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={cn(
        "fixed -top-0 flex min-h-screen min-w-full -translate-x-[100%] flex-col items-center justify-center gap-[30px] bg-accent_maroon_deep text-white transition-all duration-500 lg:hidden",
        show && "translate-x-0",
      )}
    >
      <button
        onClick={() => setShow(false)}
        className="absolute right-2 top-3 bg-accent_yellow_light px-3 py-1 font-gilroy text-xl font-semibold text-accent_maroon_deep"
      >
        X
      </button>
      <Link onClick={() => setShow(false)} href="/">
        Home
      </Link>
      <Link onClick={() => setShow(false)} href="/about">
        About Us
      </Link>
      <Link onClick={() => setShow(false)} href="/staff">
        Our Staff
      </Link>
      <Link onClick={() => setShow(false)} href="/career">
        Career
      </Link>
      <Link onClick={() => setShow(false)} href="/programs">
        Programs
      </Link>
      <Link onClick={() => setShow(false)} href="/blog">
        Blog
      </Link>
      <Link onClick={() => setShow(false)} href="/contact">
        Contact
      </Link>
      <Button>Sign Up</Button>
    </div>
  );
};

export default NavBar;
