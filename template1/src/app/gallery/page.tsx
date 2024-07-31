import CloudBackground from "@/components/Cloud";
import Contact from "@/components/Contact";
import Gallery from "@/components/gallery/Gallery";
import GalleryHero from "@/components/gallery/Hero";

const GalleryPage = () => {
  return (
    <div className="mt-[90px]">
      <GalleryHero />
      <div className="relative h-[150px] w-full">
        <CloudBackground width={1500} height={100} />
      </div>
      <Gallery />
      <Contact />
    </div>
  );
};

export default GalleryPage;
