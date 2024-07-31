import { cn } from "@/lib/utils";
import Image from "next/image";

type CloudProps = React.ImgHTMLAttributes<HTMLImageElement> & {};

const CloudBackground = ({
  className,
  width = 1443,
  height = 100,
  src,
  ...props
}: CloudProps) => {
  return (
    <Image
      className={cn(
        "absolute -bottom-2 left-0 -z-10 flex h-auto w-full bg-accent_maroon object-cover lg:-bottom-28",
        className,
      )}
      src={src ? src : "/cloud_hero.png"}
      alt="cloud"
      // @ts-expect-error
      width={width}
      // @ts-expect-error
      height={height}
      {...props}
    />
  );
};

export default CloudBackground;
