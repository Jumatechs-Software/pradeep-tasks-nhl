import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {};

const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "inline-flex h-12 items-center justify-center rounded-lg bg-accent_yellow px-5 font-poppins text-base font-normal text-accent_white",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
