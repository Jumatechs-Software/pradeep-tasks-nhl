import { useEffect } from "react"


const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="flex flex-col justify-center items-center text-center pt-10 pb-12">
      <p className="font-redhat text-[#5A67A7] pb-2">OUR PORTFOLIO</p>
      <p className="font-redhat text-[#111214] lg:text-4xl text-xl pb-2">Journey Through Our Creative Showcase:</p>
      <p className="font-redhat text-[#111214] lg:text-4xl text-xl pb-2">Explore Our Portfolio</p>
      <p className="font-poppins text-[#999999] lg:w-[773px] lg:px-0 px-8">Embark on a visual journey through our creative showcase. Dive into our portfolio to witness the magic of our work. From stunning designs to innovative solutions, each project tells a unique story. Explore our diverse range of successful endeavors across industries. Lets bring your vision to life together!  Let our portfolio speak for our capabilities!</p>
    </div>
  )
}

export default Portfolio
