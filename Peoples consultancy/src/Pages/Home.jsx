import Hero from '../components/Home/Hero'
import Brands from '../components/Home/Brands'
import OurStory from '../components/Home/OurStory'
import Testimonial from '../components/Home/Testimonial'
// import Blog from '../components/Home/Blog'
import Newsletter from '../components/Home/Newsletter'
import Footer from '../components/Home/Footer'
import Services from '../components/Home/Services'
import OurProjects from '../components/Home/OurProjects'
import AboutBlogs from "../components/About_Us/AboutBlogs"
export const Home = () => {
  return (
    <div>
      <Hero />
      <Brands/>
      <OurStory/>
      <Services/>
      <OurProjects/>
      <Testimonial/>
      <AboutBlogs/>
      {/* <Blog/> */}
      <Newsletter/>
      <Footer/>
    </div>
  )
}
