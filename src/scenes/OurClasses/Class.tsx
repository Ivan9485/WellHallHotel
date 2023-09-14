type Props = {
  name:string;
  description?:string;
  image:string;
}
const Class = ({name,description = "Some Description",image}: Props) => {
  
  return (
<div className="bg-white rounded-lg shadow-lg p-4 w-80 h-[600px] flex flex-col justify-between mr-8 mb-4 border-2">
      <div className="relative h-2/3">
        <img src={image} alt={name} className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="pb-4">
        <h2 className=" text-xl font-semibold text-center">{name}</h2>
        <p className="text-gray-600 whitespace-normal text-center ">{description}</p>
        <p className=" hover:underline hover:cursor-pointer text-center">Ver más</p>
      </div>
    </div>
  )
}
export default Class