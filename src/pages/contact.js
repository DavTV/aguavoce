import Image from "next/image";

const Contact = () => {
    return ( 
        <div className="my-5">
            <h2 className="text-center color-fondo my-3">CONTACTO</h2>
            <hr/>
            <br/>
            <br/>
        
             <p>Para nostros es un placer atenderte. Por eso, te ofrecemos dierentes medios para responder a cada una de tus consultas de la manera más faácil para ti. ¡Contáctanos!</p>

        

            <ul className="row justify-content-between my-5 text-center">
                <li className="col-6 col-md-3 mb-4">
                    <a href="#">
                    <Image  src="/icons8-empresa-50.png" width={70} height={70} alt="dirección" />
                    <p>Dirección</p> 
                    </a>

                </li>
                <li className="col-6 col-md-3 mb-4">
                    <a href="#">
                        <Image  src="/icons8-reloj.svg" width={70} height={70} alt="horario" />
                        <p>Horario de atención</p>

                    </a>
                </li>
                <li className="col-6 col-md-3 mb-4">
                    <a href="#">
                    <Image  src="/icons8-mensaje-de-telefono-50.png" width={70} height={70} alt="teléfono" />
                      <p> 
                      Teléfono
                        </p>  
                        
                        </a>

                </li>
                <li  className="col-6 col-md-3 mb-4">
                    <a href="#">
                    <Image  src="/icons8-correo-50.png" width={70} height={70} alt="correo" />
                    <p>Email </p>    
                        
                    </a>
                </li>
            </ul>
            {/* <br/>    */}
            {/* <br/> */}
        </div>
     );
}
 
export default Contact;