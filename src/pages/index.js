import Image from "next/image";
import CardIndex from "./components/CardIndex";

const Home = () => {
    return ( 
        <>
        <Image  src ="/portadavoce.png"  width={0} height={0} layout="responsive" alt = "portada" />
        <div className="bg-warning p-1 my-4"></div>
        <div className="rounded-1 p-3 mb-5">
            <h2 className="text-center my-3 color-fondo">¡Bienvenidos!</h2>
            <hr/>
            <p>Empres adedicada a la elaboración de  envases plásticos para la industria. Cubrimos distintosmercados de avases plásticos desde bebidas carbonatadas, aguas, aceites, agroquímicos, categorizados de la siguiente manera.</p>
        </div>
        <div className="row my-4">
            <CardIndex image="/droplet.svg" title="MEJOR CALIDAD" text="Nuestra agua embotellada se distingue de la competencia porque es 100% purificadad."/>
            <CardIndex image="/truck.svg" title="MAS FRESCA Y PURA" text="Tiene un sabor refrescante, puro, agradable, que te da una sensación ligera y suave al paladar, gracias a su proceso de purificación." />
            <CardIndex image="/piggy-bank.svg" title="MAS ECONÓMICA" text="Desde hace mas de 10 años nos esforzamos por brindar un producto con la mejor calidad y en bidones de agua de varias presentaciones." />
            <CardIndex image="/check-square.svg" title="MEJOR SERVICIO" text="Ofrecemos un servicio integral, desde la producción y distribución del agua en bidón, hasta la prestación de servicios de venta y entrega. " />
        </div>
        </>
     );
}
 
export default Home ;