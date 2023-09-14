export enum SelectedPage {
  Home = "home",
  Hotels = "hotels",
  Benefits2 = "benefits2",
  Destinations = "destinations",
  ContactUs = "contactus",
  Socios = "socios"
  
}

export interface BenefitType{
  icon:JSX.Element;
  title: string;
  description: string;
}

export interface ClassType{
  name:string;
  description?: string;
  image:string;
}

export interface SocioTipo{
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

export interface PaisType{
  country: string;
  city: string;
}
