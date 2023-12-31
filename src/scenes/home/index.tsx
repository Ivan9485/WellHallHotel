
import {SelectedPage} from "@/shared/types"
import AnchorLink from "react-anchor-link-smooth-scroll";

import logo from "@/assets/logo.svg"
import NombreHotel from "@/assets/NombreHotel3.svg"


type Props = {
  setSelectedPage:(value:SelectedPage) => void;
}
const Home = ({
  setSelectedPage
}: Props) => {


  return (
    <section id="home" className="h-screen w-full top-0  bg-white">
  
        {/* MAIN HEADER */}
        <div className="w-full h-screen bg-[url('./assets/piscina.jpg')] bg-cover bg-center ">
          <div className="absolute w-full h-full bg-black opacity-70"></div>
          <div className="flex items-center justify-center h-full">
            <div className="z-10 text-center">
          
              <div className="relative mb-5 ">
                <img src={logo} alt="Logo" className="mx-auto w-24 h-24 md:scale-125" />
              </div>

            
              <div className="relative mb-5 mt-6">
              <img src={NombreHotel} alt="Logo" className="mx-auto w-max h-max" />
              </div>

          
              <div>
                <button className="relative hover:bg-white hover:bg-opacity-70 border border-white rounded w-100 px-4 py-2  text-white"><AnchorLink className="  hover:text-primary-300" onClick={()=>setSelectedPage(SelectedPage.Benefits2)} href={`#${SelectedPage.Benefits2}`}>
          <p>Learn More</p>
          </AnchorLink></button>
              </div>
            </div>
          </div>
        </div>

      
    </section>
  )
}
export default Home