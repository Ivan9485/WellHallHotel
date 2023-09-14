
import Navbar from "@/scenes/navbar"
import Home from "@/scenes/home"
import { useEffect, useState } from "react"
import {SelectedPage} from "@/shared/types"
import Benefits from "@/scenes/Benefits"
import OurClasses from "@/scenes/OurClasses"
import ContactUs from "@/scenes/ContactUs"
import Footer from "@/scenes/footer"
import Socios from "./scenes/Socios"
import Benefits2 from "./scenes/Benefits2"



function App() {
 const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
 const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
 
 useEffect(()=>{
  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsTopOfPage(true);
      setSelectedPage(SelectedPage.Home);
    }
    if (window.scrollY!== 0)  {
      setIsTopOfPage(false)
    }
  }
  window.addEventListener("scroll",handleScroll);
  return ()=> window.removeEventListener("scroll",handleScroll);
 },[]);
  

  return (
    <div className="app bg-white">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <Benefits2 setSelectedPage={setSelectedPage}/>
      <OurClasses setSelectedPage={setSelectedPage}/>
      <Socios setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage}/>
      <Footer/>
    </div>
  )
}

export default App
