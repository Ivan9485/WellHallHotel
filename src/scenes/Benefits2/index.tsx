import {SelectedPage, BenefitType} from "@/shared/types"
import { GlobeAltIcon,TrophyIcon,UserPlusIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Benefit from "../Benefits2/Benefit";
import HText from "@/shared/HText";

const benefits: Array<BenefitType> = [{
  icon: <GlobeAltIcon className="h-6 w-6"/>,
  title: "Locaciones Internacionales",
  description: "En WellHall, te llevamos a un viaje único por destinos internacionales de ensueño. Desde las playas de arena blanca del Caribe hasta las majestuosas montañas de los Alpes suizos, nuestros hoteles te esperan en todo el mundo. Explora la belleza de la diversidad cultural y natural mientras disfrutas de la comodidad y el lujo que ofrecemos en cada rincón del planeta."
},{
  icon: <TrophyIcon className="h-6 w-6"/>,
  title: "Spas & Resorts Premiados",
  description: "En WellHall, creemos en el poder de la relajación y el rejuvenecimiento. Nuestros resorts y spas de bienestar te ofrecen un refugio sereno donde puedes escapar del estrés diario y reconectar contigo mismo. Disfruta de lujosas instalaciones, tratamientos rejuvenecedores y experiencias únicas que te ayudarán a encontrar la paz interior y el equilibrio."
},{
  icon: <UserPlusIcon className="h-6 w-6"/>,
  title: "Beneficios a Socios",
  description: "Valoramos a nuestros socios y les recompensamos con ventajas exclusivas. Únete a nuestro programa de membresía y disfruta de tarifas preferenciales, upgrades de habitación, acceso a eventos especiales y mucho más. Tu lealtad es importante para nosotros, y queremos asegurarnos de que cada estancia con nosotros sea extraordinaria."
},
];

const container = {
  hidden:{},
  visible:{
    transition: {staggerChildren: 0.2}
  }
}

type Props = {
  setSelectedPage:(value: SelectedPage) => void;

}
const Benefits2 = ({setSelectedPage}: Props) => {
  return (
    
    <section id="benefits2" className="pt-32 h-full w-full  bg-white">
  <motion.div 
  initial="hidden" whileInView="visible"
  viewport={{once:true,amount:0.5}}
  transition={{duration:0.50}}
  variants={{
    hidden: {opacity:0,x:-50},
    visible: {opacity:1, x:0},
  }}
  className="md:my-10">
  <HText>CONOCE WELLHALL</HText>
  <p className="mt-10 text-sm w-5/6">
  Descubre experiencias de bienestar que te llevarán a tus momentos más relajantes. Ya sea junto a la playa o en las montañas, desconéctate en un hotel spa wellness de WellHall y experimenta cómo puedes liberar tanto tu cuerpo como tu mente. </p>
  </motion.div>
  
  {/* BENEFITS */}
  <motion.div 
  initial="visible"
  whileInView="visible"
  viewport={{once:true, amount:0.5}}
  variants={container}
  className="container flex flex-col md:flex-row items-center bg-black  justify-between gap-8 mt-5 flex-wrap">
  {benefits.map((benefit:BenefitType)=> (
    <Benefit 
    key={benefit.title}
    icon={benefit.icon}
    title={benefit.title}
    description ={benefit.description}
    setSelectedPage={setSelectedPage}
    />
  ))}
  </motion.div>
  
  </section>
  )
}
export default Benefits2