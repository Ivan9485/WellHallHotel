

import {SelectedPage} from "@/shared/types"
import { motion } from "framer-motion";
import { DatePickerWithRange } from "./SearchBar";
import AutoSuggest from "react-autosuggest";
import liberate from '@/assets/liberate.svg'
import { useState } from "react";



const data: string[] = [
  "Paris, Francia",
  "Nueva York, Estados Unidos",
  "Roma, Italia",
  "Barcelona, España",
  "Kioto, Japon",
  "Bangkok, Tailandia",
  "Cancun, Mexico",
  "Amsterdam, Paises Bajos",
  "Santorini, Grecia",
  "Sydney, Australia",
  "Venecia, Italia",
  "Cairo, Egipto",
  "Machu Picchu, Peru",
  "Dubai, Emiratos Arabes Unidos",
  "Copenhague, Dinamarca",
  "Bali, Indonesia",
  "Praga, Republica Checa",
  "Estambul, Turquia",
  "San Francisco, Estados Unidos",
  "Cape Town, Sudafrica",
  "Pekin, China",
  "Hanoi, Vietnam",
  "Edimburgo, Escocia",
  "Toronto, Canada",
  "Rio de Janeiro, Brasil",
  "Budapest, Hungria",
  "Vancouver, Canada",
  "Dublin, Irlanda",
  "Seul, Corea del Sur",
  "Marrakech, Marruecos",
  "Francia, Paris",
  "Estados Unidos, Nueva York",
  "Italia, Roma",
  "Espana, Barcelona",
  "Japon, Kioto",
  "Tailandia, Bangkok",
  "Mexico, Cancun",
  "Paises Bajos, Amsterdam",
  "Grecia, Santorini",
  "Australia, Sydney",
  "Italia, Venecia",
  "Egipto, Cairo",
  "Peru, Machu Picchu",
  "Emiratos Arabes Unidos, Dubai",
  "Dinamarca, Copenhague",
  "Indonesia, Bali",
  "Republica Checa, Praga",
  "Turquia, Estambul",
  "Estados Unidos, San Francisco",
  "Sudafrica, Cape Town",
  "China, Pekin",
  "Vietnam, Hanoi",
  "Escocia, Edimburgo",
  "Canada, Toronto",
  "Brasil, Rio de Janeiro",
  "Hungria, Budapest",
  "Canada, Vancouver",
  "Irlanda, Dublin",
  "Corea del Sur, Seul",
  "Marruecos, Marrakech"
]
 




// Define un tipo para el estado



type Props = {
  setSelectedPage:(value: SelectedPage) => void;

}

const lowerCasedCompanies = data.map(language => language.toLowerCase());

const Benefits = ({setSelectedPage}: Props) => {

  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  function getSuggestions(value: string): string[] {
    return lowerCasedCompanies.filter(language =>
      language.startsWith(value.trim().toLowerCase())
    );
  }

  return (
    <section id="hotels" className="pt-16 h-full w-full relative bg-white"
    >
    <motion.div onViewportEnter={()=> setSelectedPage(SelectedPage.Hotels)}
    >
      
        {/* Background img */}
  <div className="w-full h-[850px] bg-[url('./assets/Location1.jpg')] bg-cover bg-center mb-10 flex flex-col items-center justify-center">

    {/* Search div */}
  <div className="absolute  top-32 h-[150px] lg:h-[50px] rounded-md flex w-[300px]  lg:w-[900px] lg:flex-row flex-col items-center  justify-center">
    
    <div className="rounded-sm  flex  items-center justify-center">
    {/* className="h-full md:h-1/2" type="destino" placeholder="Destino" */}
    
    <AutoSuggest 
        suggestions={suggestions}
        onSuggestionsClearRequested={() => setSuggestions([])}
        onSuggestionsFetchRequested={({ value }) => {
          setValue(value);
          setSuggestions(getSuggestions(value));
        }}
        onSuggestionSelected={(_, { suggestionValue }) =>
          console.log("Selected: " + suggestionValue)
        }
        getSuggestionValue={suggestion => suggestion}
        renderSuggestion={suggestion => <span>{suggestion}</span>}
        inputProps={{
          placeholder: "Destino",
          value: value,
          onChange: (_, { newValue }) => {
            setValue(newValue);
          }
        }}
        highlightFirstSuggestion={true}
      />
    </div>
    <div className="h-[50px]">
      <DatePickerWithRange className="h-[50px] flex"/>
    </div>
    <button className="bg-black rounded-md w-full h-[50px]  text-white  flex items-center justify-center hover:bg-  ">
      Buscar Hotel
    </button>
  </div>

  <h1 className="mt-16 z-10 "><img src={liberate} alt="Libera Tu Pasion Por Viajar" /></h1>
  

</div>


      


    </motion.div>
    
    

    </section>
  )
}
export default Benefits