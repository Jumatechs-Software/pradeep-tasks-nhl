import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import { Home } from "./Pages/Home"
import  Service from "./Pages/Service"
import Cases from "./Pages/Cases"
import Blogs from "./Pages/Blogs"
import Contact from "./Pages/Contact"
import Works from "./Pages/Works"
import About from "./Pages/About"
import Career from "./Pages/Career"
import Blogs1 from "./components/Blogs_Module/Blogs1"
function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/cases" element={<Cases/>}/>
        <Route path="/Howwework" element={<Works/>}/>
        <Route path="/blog/:id" element={<Blogs1/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/career" element={<Career/>}/>
        <Route path="/blog" element={<Blogs/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App