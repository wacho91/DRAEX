
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

const Navbar = () => {
  return (
    <>
        <div className="container py-6 flex justify-between items-center">
            {/*Logo section*/}
            <div className=" flex items-center gap-3 ">
                <span className="text-2xl font-bold relative inline-block transition-all duration-300 ease-in-out hover:scale-110 hover:-translate-y-1 hover:text-primary">
                    DRAEX
                </span>
            </div>
            {/*Link Section*/}
            <div></div>
        </div> 
    </>
  )
}

export default Navbar
