import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const BackgroundWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <section
      className={cn("w-full bg-accent_white lg:bg-wrapper-1", className)}
    >
      {children}
    </section>
  );
};

export default BackgroundWrapper;
