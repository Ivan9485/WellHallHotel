import  { SelectedPage,ClassType } from "@/shared/types"
import image1 from "@/assets/Location2.jpg"
import image2 from "@/assets/Location3.jpg"
import image3 from "@/assets/Location4.jpg"
import image4 from "@/assets/Location5.jpg"
import image5 from "@/assets/Location6.jpg"
import image6 from "@/assets/Location7.jpg"
import { motion } from "framer-motion"
import HText from "@/shared/HText"
import Class from "./Class"



const classes: Array<ClassType> = [
  {
    name:"Nueva York",
    description:"Experimenta la emoción de la Gran Manzana. Nuestro hotel te coloca en el centro de Times Square, Central Park y el Empire State Building.",
    image:image1,
  },{
    name:"Dubái",
    description:"Descubre el lujo en nuestro hotel en Dubái, con vistas al Burj Khalifa y acceso al Dubai Mall.",
    image:image2,
  },{
    name:"Hawaii",
    description:"Sumérgete en la belleza natural de Hawái. Nuestro hotel te ofrece acceso a playas y paisajes volcánicos.",
    image:image3,
  },{
    name:"Thailand",
    description:"Experimenta la cultura tailandesa en nuestro hotel, desde las playas de Phuket hasta la cocina local.",
    image:image4,
  },{
    name:"Bali",
    description:"Escápate al paraíso tropical en Bali. Nuestro hotel te ofrece playas, selvas exuberantes y aventuras emocionantes.",
    image:image5,
  },{
    name:"Greece",
    description:"Sumérgete en la historia de Grecia en nuestro hotel. Disfruta de las islas griegas y la gastronomía mediterránea.",
    image:image6,
  },

]



type Props = {
  setSelectedPage:(value:SelectedPage)=>void;

}
const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="destinations" className="w-full  bg-white h-full py-10 ">
      <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.Destinations)}>
        <motion.div className="mx-auto w-5/6"
        initial="hidden" whileInView="visible"
        viewport={{once:true,amount:0.5}}
        transition={{duration:0.90}}
        variants={{
          hidden: {opacity:0,x:-50},
          visible: {opacity:1, x:0},
        }}>
          <div className="md:w-3/5">
            <HText>¿A DONDE QUIERES IR?</HText>
            <p className="py-5">Planea tu próximo viaje y encuentra los mejores consejos y guías especializadas por WellHall</p>
          </div>
        </motion.div>
        <div className="px-4 md:px-16 mt-10 h-[600px] w-full overflow-x-auto overflow-y-hidden">
        <ul className="w-[2200px] whitespace-nowrap flex">
        {classes.map((item:ClassType,index)=>(
          <Class
          key={`${item.name}-${index}`}
          image={item.image}
          name={item.name}
          description={item.description}
          />
        ))}
        </ul>
        </div>
      </motion.div>

    </section>
  )
}
export default OurClasses