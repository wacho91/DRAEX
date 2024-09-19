

const NavLinks = [
    {
        id: 1,
        title: "Sobre Nosotros",
        link: "/nosotros"
    },
    {
        id: 2,
        title: "Servicios",
        link: "/servicios"
    },
    {
        "id": 3,
        title: "Proyectos",
        link: "/proyectos"
    },
    {
        id: 4,
        title: "Contacto",
        link: "/contacto"
    }
]

const Navbar2 = () => {
    return (
        <>
            <div className="container py-6 flex items-center justify-center">
                {/*Left Link Section*/}
                <div className="hidden md:flex flex-1 justify-end">
                    {
                        NavLinks.slice(0, NavLinks.length / 2).map((data) => (
                            <a 
                              className="inline-block mx-8 text-xl font-semibold transition-all 
                              duration-300 ease-in-out hover:scale-110 hover:-translate-y-1 hover:text-primary"
                              key={data.id} 
                              href={data.link}
                            >
                              {data.title}
                            </a>
                        ))
                    }
                </div>
              
                {/*Logo section*/}
                <div className="flex items-center mx-8">
                    <span 
                      className="text-2xl font-bold relative inline-block transition-all 
                      duration-300 ease-in-out hover:scale-110 hover:-translate-y-1 hover:text-primary"
                    >
                      DRAEX
                    </span>
                </div>
              
                {/*Right Link Section*/}
                <div className="hidden md:flex flex-1 justify-start">
                    {
                        NavLinks.slice(NavLinks.length / 2).map((data) => (
                            <a 
                              className="inline-block mx-8 text-xl font-semibold transition-all 
                              duration-300 ease-in-out hover:scale-110 hover:-translate-y-1 hover:text-primary"
                              key={data.id} 
                              href={data.link}
                            >
                              {data.title}
                            </a>
                        ))
                    }
                </div>
            </div> 
        </>
    )
}
  
  export default Navbar2
