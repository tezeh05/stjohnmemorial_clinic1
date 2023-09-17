import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About";
import Services from "./Pages/Services";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import Appointment from "./Pages/Appointment";
import Management from "./Pages/Management";
import Newsline from "./Pages/Newsline";
import Testimonial from "./Pages/Testimonial";
import Ourteam from "./Pages/Ourteam";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="About" element={<About/>} />
      <Route path="Services" element={<Services/>} />
      <Route path="Blog" element={<Blog/>} />
      <Route path="Contact" element={<Contact/>} />
      <Route path="Gallery" element={<Gallery/>} />
      <Route path="Appointment" element={<Appointment/>} />
      <Route path="Management" element={<Management/>} />
      <Route path="Newsline" element={<Newsline/>} />
      <Route path="Testimonial" element={<Testimonial/>} />
      <Route path="Ourteam" element={<Ourteam/>} />


    </Routes>
    
  );
}

export default App;
