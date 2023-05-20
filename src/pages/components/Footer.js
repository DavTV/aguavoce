import Image from "next/image";

const Footer = () => {
    return ( 
      
        <div className="bg-fondo text-white p-3">
            <div className="container">
                <div className="row">
                    <div className="col-6 col-md-3 mb-3">
                        <h5>EDICIONES OREM</h5>
                        <p>Nosotros</p>
                        <p>Contactanos</p>
                        <p>¿Cómo comprar?</p>
                        <p>Pedidos especiales</p>
                    </div>
                    <div className="col-6 col-md-3 mb-3">
                        <h5>PLATICA Y PRIVACIDAD</h5>
                        <p>Políticas de ventas</p>
                        <p>Políticas de privacidad y seguridad</p>
                        <p>Politica anti-corrupción</p>
                        <p>Envios y devolucones</p>
                    </div>
                    <div className="col-6 col-md-3 mb-3">
                        <h5>CONTACTANOS</h5>
                        <p>De Lunes-Sábado 08 a.m a 6 p.m. y Dom 08 a.m a 12p.m</p>
                        <p><Image src="/contacto/whatsapp.png" width={30} height={30} className="me-2" alt="whatsApp" />936584162</p>
                        <p><Image src="/contacto/telefono.png" width={30} height={30}  className="me-2" alt="teléfono" />044 649908</p>
                        <p><Image src="/contacto/casa.png" width={30} height={30} className="me-2" alt="dirección" /> Jr. Torre Tagle 119 - Trujillo</p>
                        <p><Image src="/contacto/correo.png" width={30} height={30} className="me-2" alt="correo" />sdlcompany@gmail.com</p>
                    </div>
                    <div className="col-6 col-md-3 mb-3">
                        <h5>REDES SOCIALES</h5>
                        <ul className="d-flex p-0 text-center">
                            <li className="mx-1">
                                <a><Image src="/redes/facebook.png" width={30} height={30} /></a>
                            </li>
                            <li className="mx-1">
                                <a><Image src="/redes/instagram.png" width={30} height={30} /></a>
                            </li>
                            <li className="mx-1">
                                <a><Image src="/redes/pinterest.png" width={30} height={30} /></a>
                            </li>
                            {/* <li>
                                <a><Image src="/icons8-whatsapp.svg" width={30} height={30} /></a>
                            </li> */}
                            <li className="mx-1">
                                <a><Image src="/redes/twitter.png" width={30} height={30} /></a>
                            </li>
                            <li className="mx-1">
                                <a><Image src="/redes/youtube.png" width={30} height={30} /></a>
                            </li>
                        </ul>
                        <p>De Lunes-Sábado 08 a.m a 6 p.m. y Dom 08 a.m a 12p.m</p>
                        <h5>LIBRO DE RECLAMACIONES</h5>
                        <Image src="/libro.png" width ={150} height={70} />
                    </div>
                    
                </div>
            </div>
        </div>
     );
}
 
export default Footer;