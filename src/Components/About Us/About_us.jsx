
const About_us = () => {
  return (
    <>
        <div className="container">
            <h1 className="text-4xl font-semibold text-center py-12">
                Sobre Nosotros
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
                {/*Image Section*/}
                <div className="flex flex-col justify-center">
                    Imagen de la pagina 🤙
                </div>
                {/*Text Section*/}
                <div className="space-y-5 flex justify-center flex-col xl:max-w-[500px]">
                    <h2 className="text-4xl font-bold">Quienes Somos 🦾</h2>
                    <p className="text-gray-500 text-sm leading-7">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Eveniet vel velit pariatur ab quasi, aliquid accusamus 
                        quod non porro adipisci!
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default About_us
