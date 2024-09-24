
const Hero = () => {
  return (
    
    <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[600px] gap-10">
            {/*Information section*/}
            <div className="flex flex-col justify-center gap-5 text-center md:text-left">
                <h1 className="text-4xl font-bold font-serif">
                    DRAEX-S.A.S
                </h1>
                <p className="text-sm md:text-base text-gray-500 leading-7">
                    DRAEX-S.A.S es una empresa de consultoría y servicios de tecnología que
                    ofrece soluciones innovadoras para mejorar la experiencia de los usuarios.
                </p>
            </div>
        </div>
    </div> 
    
  )
}

export default Hero
