import Logo from "@/assets/logo.svg"
import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";


type Props = {
  setSelectedPage:(value:SelectedPage)=>void;

}

const Footer = ({setSelectedPage}: Props) => {
  return (
   <footer className="bg-gray-300 py-16">
    <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
    <div className="mt-16 basis-1/2 md:mt-0">
      <img className="w-10 h-10" alt="logo" src={Logo}/>
      <p className="my-5">
      Estás a punto de embarcarte en un viaje de posibilidades ilimitadas en nuestro Espacio para Socios de WellHall. Agradecemos que formes parte de nuestra familia y que hayas elegido acompañarnos en tu camino hacia una vida más saludable y activa. ¡Bienvenido, distinguido socio!
      </p>
      <p>© 2023 WellHall Hotel. Todos los derechos reservados.</p>
    </div>
    <div className="mt-16 basis-1/4">
      <h4 className="font-bold">Links</h4>
    <AnchorLink className=" hover:underline" onClick={()=>setSelectedPage(SelectedPage.Socios)} href={`#${SelectedPage.Socios}`}>
          <p className="my-5">WellHall+ Exclusive</p>
          </AnchorLink>
          <AnchorLink className="my-5 hover:underline" onClick={()=>setSelectedPage(SelectedPage.Hotels)} href={`#${SelectedPage.Hotels}`}>
          <p className="my-5">Reserva</p>
          </AnchorLink>
          <AnchorLink className="  hover:underline" onClick={()=>setSelectedPage(SelectedPage.ContactUs)} href={`#${SelectedPage.ContactUs}`}>
          <p>Ofertas</p>
          </AnchorLink>

    </div>

    
    <div className="mt-16 basis-1/4 ">
      <h4 className="font-bold">Contact Us</h4>
    <p className="my-5">Ponte en contacto con nosotros para obtener más información.</p>
    <p>Teléfono: (333) 425-6825</p>

    </div>

    </div>
   </footer>
  )
}

export default Footer;