import { useState } from "react"
import { Service } from "../../Data/Data"


// const Service = [
//     {
//         id: 1,
//         title: "EXTRACCIÓN",
//         item: {
//             "1": "Arena y grava en ríos.",
//             "2": "Lirio",
//             "3": "oberturas acuáticas. "
//         }
//     }
// ]


const Services = () => {

    const [hoveredCard, setHoveredCard] = useState(null)

    return (
        <div className="min-h-screen py-12">
            <div className="container mx-auto px-4">
                {/*Heading Title*/}
                <div className="space-y-2 text-center max-w-[350px] mx-auto mb-8">
                <h1 className="text-4xl font-bold">Nuestros Servicios</h1>
                    <p className="text-gray-500 text-sm">
                        Que servicios ofrece DRAEX
                    </p>
                </div>
                {/*Card Section*/}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {Service.map((data) => (
                        <div
                        key={data.id}
                            className={`
                                relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out
                                ${hoveredCard === data.id ? 'bg-white' : 'bg-gray-200'}
                                ${hoveredCard === data.id ? 'h-auto' : 'h-24'}
                            `}
                            onMouseEnter={() => setHoveredCard(data.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="p-6">
                                <h2 className="text-center text-2xl font-bold font-serif mb-4">{data.title}</h2>
                                <ul className={`space-y-2 transition-opacity duration-300 ${hoveredCard === data.id ? 'opacity-100' : 'opacity-0'} text-center`}>
                                {Object.entries(data.item).map(([key, value]) => (
                                    <li key={key} className="text-sm">{value}</li>
                                ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services
