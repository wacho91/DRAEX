// import { Service } from "../../Data/Data"

const Service = [
    {
        id: 1,
        title: "EXTRACCIÓN",
        item: {
            "1": "Arena y grava en ríos.",
            "2": "Lirio",
            "3": "oberturas acuáticas. "
        }
    }
]


const Services = () => {
  return (
    <div>
        <div className="container py-12">
            {/*Heading Title*/}
            <div className="space-y-2 text-center mx-w-[350px] mx-auto mb-8">
                <h1 className="text-4xl font-bold"> Nuestros Servicios</h1>
                <p className="text-gray-500 text-sm">
                    Que servicios ofrece DRAEX 
                </p>
            </div>
            {/*Card Section*/}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    Service.map((data) => {
                        return (
                            <div 
                                key={data.id}
                                className="space-y-4 border-[1px] border-black/30 px-6 py-12 hover:bg-slate-300 
                                hover:text-gray-800 hover:shadow-[7px_7px_0px_0px_#6c6c6c] duration-300"
                            >
                                <h2 className=" text-center text-2xl font-bold font-serif">{data.title}</h2>
                                <ul>
                                    {Object.entries(data.item).map(([key, value]) => (
                                    <li key={key} className="text-sm">{value}</li>
                                    ))}
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Services
