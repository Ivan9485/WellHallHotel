
import { SocioTipo } from "@/shared/types"
import { MoonIcon, StarIcon, UserPlusIcon, WifiIcon,ArrowUpCircleIcon } from "@heroicons/react/24/solid"
import Socio from "./Socio"
import { useState } from "react"
import {SelectedPage} from "@/shared/types"
import { motion } from "framer-motion"


const socios: Array<SocioTipo> =[
  {
    icon1: <UserPlusIcon className="w-6 h-6" />,
    title1: "Silver Elite",
    description1: "10 noches por año",
    icon2: <StarIcon className="w-6 h-6" />,
    title2: "Obtén un 10 % más de puntos",
    description2: "Acumula un 10 % más de puntos en cada compra de hotel que cumpla los requisitos, incluida la tarifa de la habitación y otros gastos imprevistos que se puedan cargar a tu habitación, como comidas y spa.",
    icon3: <MoonIcon className="w-6 h-6" />,
    title3: "Salida después de la hora establecida prioritaria",
    description3: "Disfruta de salida después de la hora establecida y duerme más tiempo.",
    icon4: <WifiIcon className="w-6 h-6" />,
    title4: "Wi-Fi gratis",
    description4: "Disfruta de acceso gratuito a Internet en tu habitación cuando reserves a través de cualquiera de nuestros sitios web o aplicaciones.",
  },
  {
    icon1: <UserPlusIcon className="w-6 h-6" />,
    title1: "Gold Elite",
    description1: "15 noches por año",
    icon2: <StarIcon className="w-6 h-6" />,
    title2: "Obtén un 15 % más de puntos",
    description2: "Obtén un 15 % más de puntos en cada compra de hotel que cumpla los requisitos, incluida la tarifa de la habitación y otros gastos imprevistos que se puedan cargar a tu habitación, como comidas y spa.",
    icon3: <ArrowUpCircleIcon className="w-6 h-6" />,
    title3: "Mejora de categoría de habitación optimizada",
    description3: "Haremos todo lo posible para mejorar tu habitación a tu llegada, sujeto a términos y condiciones.",
    icon4: <WifiIcon className="w-6 h-6" />,
    title4: "Wi-Fi gratis y Desayuno",
    description4: "Disfruta de acceso gratuito a Internet en tu habitación y un delicioso desayuno gratuito cuando reserves a través de cualquiera de nuestros sitios web o aplicaciones.",
  },
  {
    icon1: <UserPlusIcon className="w-6 h-6" />,
    title1: "Platinum Elite",
    description1: "20 noches por año",
    icon2: <StarIcon className="w-6 h-6" />,
    title2: "Obtén un 20 % más de puntos",
    description2: "Obtén un 20 % más de puntos en cada compra de hotel que cumpla los requisitos, incluida la tarifa de la habitación y otros gastos imprevistos que se puedan cargar a tu habitación, como comidas y spa.",
    icon3: <ArrowUpCircleIcon className="w-6 h-6" />,
    title3: "Mejora de categoría de habitación optimizada",
    description3: "Haremos todo lo posible para mejorar tu habitación (incluidas las suites Select), sujeto a disponibilidad a tu llegada.",
    icon4: <WifiIcon className="w-6 h-6" />,
    title4: "Wi-Fi gratis, Desayuno y Estacionamiento",
    description4: "Disfruta de acceso gratuito a Internet en tu habitación, un delicioso desayuno gratuito y estacionamiento gratuito cuando reserves a través de cualquiera de nuestros sitios web o aplicaciones.",
  },
  {
    icon1: <UserPlusIcon className="w-6 h-6" />,
    title1: "Titanium Elite",
    description1: "30 noches por año",
    icon2: <StarIcon className="w-6 h-6" />,
    title2: "Obtén un 25 % más de puntos",
    description2: "Obtén un 25 % más de puntos en cada compra de hotel que cumpla los requisitos, incluida la tarifa de la habitación y otros gastos imprevistos que se puedan cargar a tu habitación, como comidas y spa.",
    icon3: <ArrowUpCircleIcon className="w-6 h-6" />,
    title3: "Mejora de categoría de habitación optimizada",
    description3: "Haremos todo lo posible para mejorar tu habitación (incluidas las suites Select), sujeto a disponibilidad a tu llegada.",
    icon4: <WifiIcon className="w-6 h-6" />,
    title4: "Wi-Fi gratis, Desayuno, Estacionamiento y Servicio a la Habitación",
    description4: "Disfruta de acceso gratuito a Internet en tu habitación, un delicioso desayuno gratuito, estacionamiento gratuito y servicio a la habitación cuando reserves a través de cualquiera de nuestros sitios web o aplicaciones.",
  },
  {
    icon1: <UserPlusIcon className="w-6 h-6" />,
    title1: "Ambassador Elite",
    description1: "50 noches por año",
    icon2: <StarIcon className="w-6 h-6" />,
    title2: "Obtén un 30 % más de puntos",
    description2: "Obtén un 30 % más de puntos en cada compra de hotel que cumpla los requisitos, incluida la tarifa de la habitación y otros gastos imprevistos que se puedan cargar a tu habitación, como comidas y spa.",
    icon3: <ArrowUpCircleIcon className="w-6 h-6" />,
    title3: "Your24",
    description3: "Obtén la flexibilidad de elegir las 24 horas de tu estancia. Realiza el registro de llegada a las 21:00 h y el de salida a las 21:00 horas el día de la salida, tú decides.",
    icon4: <WifiIcon className="w-6 h-6" />,
    title4: "Wi-Fi gratis, Desayuno, Estacionamiento, Servicio a la Habitación y Acceso al Spa",
    description4: "Disfruta de acceso gratuito a Internet en tu habitación, un delicioso desayuno gratuito, estacionamiento gratuito, servicio a la habitación y acceso gratuito al spa cuando reserves a través de cualquiera de nuestros sitios web o aplicaciones.",
  },
];



type Props = {
  setSelectedPage:(value:SelectedPage)=>void;

}

const Socios = ({setSelectedPage}: Props) => {
  const [activeButton, setActiveButton] = useState<number | null>(0);

  const handleButtonClick = (index: number) => {
    setActiveButton(index);
  };

  return (
    <section id="socios" className="h-full bg-white w-full py-16">
      <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.Socios)} className="flex flex-col items-center mx-auto bg-white w-4/5 md:h-[650px] xs:h-[900px] rounded-2xl border-2 ">
        {/* Titulo and Tabs */}
        <div className="my-6">
          <h1 className="font-bold">Membresias WellHall+</h1>
        </div>
        {/* Tabs */}
        <div className="border-b-2 flex space-x-4 mt-2">
          {socios.map((socio, index) => (
            <p key={index}>
              <button
                className={`${
                  activeButton === index ? "border-b-2 border-black" : ""
                }`}
                onClick={() => handleButtonClick(index)}
              >
                {socio.title1}
              </button>
            </p>
          ))}
        </div>

        {/* Screen */}
        <div className="w-full h-full rounded-b-2xl bg-white items-center md:justify-between gap-8 mt-5">
          {socios
  .filter((_, index) => activeButton !== null && activeButton === index)
  .map((socio) => (
              <Socio
                key={socio.title1}
                icon1={socio.icon1}
                title1={socio.title1}
                description1={socio.description1}
                icon2={socio.icon2}
                title2={socio.title2}
                description2={socio.description2}
                icon3={socio.icon3}
                title3={socio.title3}
                description3={socio.description3}
                icon4={socio.icon4}
                title4={socio.title4}
                description4={socio.description4}
              />
            ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Socios;






