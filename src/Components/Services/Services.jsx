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
//     },

//     {
//         id: 2,
//         title: "EXCAVACION & PILOTAJE",
//         item: {
//             "1": "Movimiento de tierra",
//             "2": "Pilotaje",
//             "3": "Excavación de pozos profundos en rellenos sanitarios. (para la extracción de gas metano)." 
//         }
//     },

//     {
//         id: 3,
//         title: "EXCAVACION ESPECIALIZADA",
//         item: {
//             "1": "Limpieza y desazolve en algunas de sedimentación",
//             "2": "Canales y Rios"
//         }
//     },

//     {
//         id: 4,
//         title: "DRENAGES",
//         item: {
//             "1": "Ríos",
//             "2": "Lagunas",
//             "3": "Canales",
//             "4": "Contrucción de Jarillones"
//         }
//     },

//     {
//         id: 5,
//         title: "MÁQUINAS PARA REALIZAR",
//         item: {
//             "1": "Pilotajes",
//             "2": "Dragados",
//             "3": "Excavaciones",
//             "4": "Perfilados de Hincamiento",
//             "5": "Suministro de tubería",
//             "6": "Transporta fluvial",
//             "7": "Remolcador fluvial",
//             "8": "Instalación de canasta de acero",
//             "9": "Instalación de tubería por Hincamiento con martillo de caída libre"
//         }
//     },

//     {
//         id: 6,
//         title: "CONSTRUCCIÓN DE MUELLES FLUVIALES Y MARÍTIMOS",
//         item: {}
//     },

//     {
//         id: 7,
//         title: "PILOTES HINCADOS Y PRE EXCAVADOS PARA PUENTES",
//         item: {}
//     },

//     {
//         id: 8,
//         title: "CIMENTACIONES PROFUNDAS PARA EDIFICIOS",
//         item: {}
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
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                    {Service.map((data) => (
                        <div
                            key={data.id}
                            className={`
                                relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 ease-in-out
                                ${hoveredCard === data.id ? 'bg-white' : 'bg-gray-200'}
                                ${hoveredCard === data.id ? 'h-auto' : 'h-24'}
                            `}
                            onMouseEnter={() => setHoveredCard(data.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className={`p-6 ${hoveredCard === data.id ? '' : 'flex items-center justify-center h-full'}`}>
                                <h2 className={`font-semibold mb-2 ${hoveredCard === data.id ? 'text-center' : 'text-center'}`}>
                                    {data.title}
                                </h2>
                                <ul className={`space-y-2 transition-opacity duration-300 ${hoveredCard === data.id ? 'opacity-100' : 'opacity-0 hidden'} text-center`}>
                                    {Object.entries(data.item).map(([key, value]) => (
                                        <li key={key} className="text-gray-500 text-sm pb-1">{value}</li>
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
