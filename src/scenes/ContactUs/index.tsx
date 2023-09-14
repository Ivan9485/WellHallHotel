import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/Location8.jpg"
import HText from "@/shared/HText";

useForm

type Props = {
  setSelectedPage: (value:SelectedPage) => void;
}


const ContactUs = ({setSelectedPage}: Props) => {

  const inputStyles = ` mb-5 w-full rounded-lg bg-gray-300 px-5 py-3 text-primary-300`;

  const {
    register,
    trigger,
    formState:{errors}
  } = useForm();

  const onSubmit = async(e:any)=>{
      const isValid = await trigger();
      if (!isValid) {
        e.preventDefault()
      }
  }


  return (
    <section id="contactus" className="mx-auto px-16 pt-24 pb-28 xs:pt-24 bg-white">
      <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.ContactUs)}>
        {/* HEADER */}
        <motion.div className="md:w-3/5 xs:pt-24" 
        initial="hidden" whileInView="visible"
        viewport={{once:true,amount:0.5}}
        transition={{duration:0.50}}
        variants={{
          hidden: {opacity:0,x:-50},
          visible: {opacity:1, x:0},
        }}>
          <HText>
            <span className="">CONTACTANOS</span>
          </HText>
          <p className="my-5">Estamos aquí para ayudarte en cada paso de tu viaje. Si tienes preguntas, necesitas información adicional o deseas realizar una reserva, nuestro equipo de atención al cliente está disponible las 24 horas del día. 

</p>
        </motion.div>
        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
        <motion.div className="mt-10 basis-3/5 md:mt-0"
        initial="hidden" whileInView="visible"
        viewport={{once:true,amount:0.5}}
        transition={{duration:0.50}}
        variants={{
          hidden: {opacity:0,y:50},
          visible: {opacity:1, y:0},
        }}>
          <form target="_blank"
          onSubmit={onSubmit}
          action="https://formsubmit.co/0df9c32f11e45e54f004ea3002f6fc28"
          method="POST">
          <input className={inputStyles}
          type="text"
          placeholder="NAME"
          {...register("name",{
            required:true,
            maxLength:100,
          })}/>
            {errors.name && (
              <p className="mt-1 text-primary-300">
                {errors.name.type==="required" && "This field is required."}
                {errors.name.type==="maxLength" && "Max Length Reached."}
              </p>
            )} 

            <input className={inputStyles}
          type="text"
          placeholder="EMAIL"
          {...register("email",{
            required:true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}/>
            {errors.email && (
              <p className="mt-1 text-primary-500">
                {errors.email.type==="required" && "This field is required."}
                {errors.email.type==="pattern" && "Invalid E-mail Address"}
              </p>
            )} 

<textarea className={inputStyles}
          rows={4}
          cols={50}
          placeholder="MESSAGE"
          {...register("message",{
            required:true,
            maxLength:2000,
          })}/>
            {errors.message && (
              <p className="mt-1 text-primary-300">
                {errors.message.type==="required" && "This field is required."}
                {errors.message.type==="maxLength" && "Max Length Reached."}
              </p>
            )} 
            <button type="submit"
            className="mt-5 rounded-lg bg-slate-600 px-20 py-3 transition duration-500 hover:text-white">SUBMIT</button>
          
          </form>
        </motion.div>

            <motion.div className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden" whileInView="visible"
            viewport={{once:true,amount:0.5}}
            transition={{delay:0.2, duration:0.50}}
            variants={{
              hidden: {opacity:0,y:50},
              visible: {opacity:1, y:0},
            }}>
              <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                <img className="w-full rounded-lg" alt="contact-us-page-graphic" 
                src={ContactUsPageGraphic}/>
              </div>



            </motion.div>


        </div>
      </motion.div>

    </section>
  )
}
export default ContactUs