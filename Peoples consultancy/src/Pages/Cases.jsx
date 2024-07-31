import MobileApps from "../components/Cases_Module/MobileApp"
import Softwares from "../components/Cases_Module/Softwares"
import Reviews from "../components/Cases_Module/Reviews"
import GetinTouch from "../components/Service_Module/Getintouch"
import Portfolio from "../components/Cases_Module/Portfolio"
import Footer from "../components/Home/Footer"
const Cases = () => {
  return (
    <div>
      <Portfolio/>
      <Softwares/>
      <MobileApps/>
      <Reviews/>
      <GetinTouch/>
      <Footer/>
    </div>
  )
}

export default Cases
