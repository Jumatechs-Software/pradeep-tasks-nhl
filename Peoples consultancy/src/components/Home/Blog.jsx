import post_1 from "../../assets/post-1.png"
import post_2 from "../../assets/post-2.png"
import post_3 from "../../assets/post-3.png"
import { Link } from "react-router-dom"
const Blog = () => {
  return (
    <div className="lg:pb-20 pb-10">
      <div className="text-center px-10 lg:px-80 pb-4 lg:pb-12 ">
        <p className="text-[#111214] font-montserrat pb-2">OUR BLOG</p>
        <p className="text-[#18181B] font-redhat text-2xl lg:text-3xl pb-2">Latest posts</p>
        <p className="font-poppins text-[#999999]">Read our blogs for valuable insights, tips, and tutorials that can help individuals and businesses make informed decisions, solve technical challenges, and optimize their IT infrastructure.</p>
      </div>
      <div className="flex justify-center gap-3 lg:gap-6 pb-4 items-center flex-wrap lg:px-0 px-8">
        <a href=""><img src={post_1} alt="" className="w-[387px] h-[354px] "/></a>
        <a href=""><img src={post_2} alt="" className="w-[387px] h-[354px] "/></a>
        <a href=""><img src={post_3} alt="" className="w-[387px] h-[354px] "/></a>
      </div>
      <div className="text-center">
        <Link to={"/blog"}><button className="bg-black text-white font-poppins px-4 py-2 lg:px-8 rounded-lg">SEE MORE</button></Link>
      </div>
    </div>
  )
}

export default Blog
