import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import {SelectedPage} from "@/shared/types"
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import logo from "@/assets/logo.svg"
import NombreHotel from "@/assets/NombreHotel3.svg"


type Props = {
  setSelectedPage:(value:SelectedPage) => void;
}
const Home = ({
  setSelectedPage
}: Props) => {

  const isAboveMediumScreens = useMediaQuery("(min-width:980px)")

  return (
    <section id="home" className="gap-16 h-[850px] top-0  bg-white">
  
        {/* MAIN HEADER */}
        <div className="w-full h-[850px] bg-[url('./assets/piscina.jpg')] bg-cover bg-center absolute">
          <div className="absolute inset-0 bg-black opacity-70 text-"></div>
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