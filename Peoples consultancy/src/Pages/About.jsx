import AboutHero from "../components/About_Us/AboutHero"
import AboutBrands from "../components/About_Us/AboutBrands"
import AboutBlogs from "../components/About_Us/AboutBlogs"
import Faq from "../components/About_Us/Faq"
import TeamMembers from "../components/About_Us/TeamMembers"
import Testimonial from "../components/Home/Testimonial"
import Footer from "../components/Home/Footer"

const About = () => {
  return (
    <div>
      <AboutHero/>
      <TeamMembers/>
      <AboutBrands/>
      <AboutBlogs/>
      <Faq/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default About
