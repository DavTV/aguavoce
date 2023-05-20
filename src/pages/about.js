import CardIndex from "./components/CardIndex";
import Image from "next/image";
import CardAbout from "./components/CardAbout";
const About = () => {
    return ( 
<>
    <div className="rounded-1 py-5  px-3 mb-5">
                <h2 className="text-center my-3 color-fondo">SOBRE NOSOTROS</h2>
            <hr/>
                <p>Empresa dedicada a la elaboración de envases plásticos para la industria. Cubrimos distintos mercados de envases plásticos desde bebidas carbonatadas, aguas, aceites, agroquímicos, lácteos, limpieza del hogar, jugos hasta el mercado farmacéutico. Nuestros productos están categorizados de la siguiente manera.</p>
            </div>
            <div className="row my-5">
                <div className="col-12 col-md-6 text-center mb-3">
                 <Image src="/vision.png" width={300} height={300} alt="visión agua voce" />

                </div>
                <div className="col-12 col-md-6">
                <CardAbout title="MISIÓN" text="Tiene un sabor refrescante, puro, agradable, que te da una sensación ligera y suave al paladar, gracias a su proceso de purificación."/>
                </div>
            </div>
            <div className="d-md-flex flex-md-row-reverse my-5">
            <div className="col-12 col-md-6 text-center mb-3">
                <Image src="/mision.png" width={350} height={250} alt="misión agua voce" />
                </div>
                <div className="col-12 col-md-6">
                <CardAbout title="VISIÓN" text="Tiene un sabor refrescante, puro, agradable, que te da una sensación ligera y suave al paladar, gracias a su proceso de purificación."/>
                </div>

            </div>
    


</>
     );
}
 
export default About;