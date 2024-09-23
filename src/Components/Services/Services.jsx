

const Services = () => {
  return (
    <div>
        <div className="container py-12">
            {/*Heading Title*/}
            <div className="space-y-2 text-center mx-w-[350px] mx-auto mb-8">
                <h1 className="text-4xl font-bold"> Nuestros Servicios</h1>
                <p className="text-gray-500 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Beatae illo excepturi.
                </p>
            </div>
            {/*Card Section*/}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <div 
                    className="space-y-4 border-[1px] border-black/30 px-6 py-12 hover:bg-slate-300 
                    hover:text-gray-800 hover:shadow-[7px_7px_0px_0px_#6c6c6c] duration-300"
                >

                </div>

                <div 
                    className="space-y-4 border-[1px] border-black/30 px-6 py-12 hover:bg-slate-300 
                    hover:text-gray-800 hover:shadow-[7px_7px_0px_0px_#6c6c6c] duration-300"
                >

                </div>

                <div 
                    className="space-y-4 border-[1px] border-black/30 px-6 py-12 hover:bg-slate-300 
                    hover:text-gray-800 hover:shadow-[7px_7px_0px_0px_#6c6c6c] duration-300"
                >

                </div>

                <div 
                    className="space-y-4 border-[1px] border-black/30 px-6 py-12 hover:bg-slate-300 
                    hover:text-gray-800 hover:shadow-[7px_7px_0px_0px_#6c6c6c] duration-300"
                >

                </div>
            </div>
        </div>
    </div>
  )
}

export default Services
