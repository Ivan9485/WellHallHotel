
import { Bars3Icon,XMarkIcon } from "@heroicons/react/24/solid";
import logo from "@/assets/logo.svg"
import Link from "./Link";
import {SelectedPage} from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
selectedPage: SelectedPage;
setSelectedPage: (value: SelectedPage) => void;
isTopOfPage:boolean;
}
const Navbar = ({isTopOfPage,selectedPage,setSelectedPage}: Props) => {

  const flexBetween = "flex items-center justify-between"
  const  isAboveMediumScreens = useMediaQuery("(min-width: 980px)")
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  const navbarBackground = isTopOfPage ? "" : "bg-7FC8FD drop-shadow";

  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img className="w-8 h-8" alt='logo' src={logo} />
            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
            <div className={`${flexBetween} w-full`}>
              {/* inner left side */}
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Link  page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Hotels" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Destinations" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              </div>
              {/* inner right side */}
              <div className={`${flexBetween} gap-8`}>
              <AnchorLink className="  hover:text-primary-300" onClick={()=>setSelectedPage(SelectedPage.Socios)} href={`#${SelectedPage.Socios}`}>
          <p>WellHall+ Exclusive</p>
          </AnchorLink>
              <AnchorLink className=" hover:text-primary-300" onClick={()=>setSelectedPage(SelectedPage.Hotels)} href={`#${SelectedPage.Hotels}`}>
          <p>See Availability</p>
          </AnchorLink>
              </div>
            </div> ) : 
            (
              <button className="rounded-full bg-white p-2" onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                <Bars3Icon className="h-6 w-6 text-black" />
              </button>
            )
            }

          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={()=>setIsMenuToggled(!isMenuToggled)}>
            <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          {/* MENU ITEMS */}
          <div className={`${flexBetween} ml-[33%] flex flex-col gap-10 text-2xl`}>
          <Link  page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Hotels" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Destinations" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <AnchorLink className=" hover:text-primary-300" onClick={()=>setSelectedPage(SelectedPage.Socios)} href={`#${SelectedPage.Socios}`}>
          <p>WellHall+ Exclusive</p>
          </AnchorLink>
              <AnchorLink className="  hover:text-primary-300" onClick={()=>setSelectedPage(SelectedPage.Hotels)} href={`#${SelectedPage.Hotels}`}>
          <p>See Availability</p>
          </AnchorLink>
              </div>


        </div>
      )}
    </nav>
  )
}
export default Navbar