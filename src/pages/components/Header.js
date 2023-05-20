import Image from "next/image";
import Link from "next/link";
// import Style from "./header.module.css"

const Header = () => {
    return ( 
        <nav className="navbar shadow bg-fondo navbar-expand-lg bg-body-tertiary p-0">
            <div className="container">
                <Link className="navbar-brand" href="/"><Image src="/logovoce.png"  width={70} height={70} alt="logo" /> </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link href="/about" className="nav-link mx-2 btn-active-header  text-white">Nosotros</Link>
                    </li>
                    <li className="nav-item">
                    <Link href="/products" className="nav-link mx-2 btn-active-header  text-white ">Productos</Link>
                    </li>
                    <li className="nav-item">
                    <Link href="/contact" className="nav-link mx-2 btn-active-header  text-white">Contacto</Link>
                    </li>
                </ul>
                </div>
            </div>
</nav>
     );
}
 
export default Header;