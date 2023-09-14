

type Props = {
  click: number;
  icon1:JSX.Element;
  title1:string;
  description1:string;
  icon2:JSX.Element;
  title2:string;
  description2:string;
  icon3:JSX.Element;
  title3:string;
  description3:string;
  icon4:JSX.Element;
  title4:string;
  description4:string;
}

const Socio = ({click,icon1,title1,description1,icon2,title2,description2,icon3,title3,description3,icon4,title4,description4}: Props) => {




  return (<>
  <div className="bg-white flex flex-col items-center ">
    <div className="mt-14 mb-6">{icon1}</div>
    <h2 className="mb-4 font-bold">{title1}</h2>
    <p className="mb-10">{description1}</p>
    </div>
    {/* Tarjetas secundarias */}
    <div className="md:flex items-center w-full justify-between overflow-auto">
    <div className="mx-8 flex flex-col md:w-1/3 items-center text-center">
    <div className="my-6">{icon2}</div>
    <div className="font-bold">{title2}</div>
    <div>{description2}</div>
    </div>

    <div className="flex flex-col md:w-1/3 items-center text-center">
    <div className="my-6">{icon3}</div>
    <div className="font-bold">{title3}</div>
    <div>{description3}</div>
    </div>

    <div className="flex flex-col md:w-1/3 items-center text-center mx-8 xs:pb-4 ">
    <div className="my-6">{icon4}</div>
    <div className="font-bold">{title4}</div>
    <div>{description4}</div>
    </div>
    </div>
    </>
  )
}
export default Socio