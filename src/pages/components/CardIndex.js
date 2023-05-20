import Image from "next/image";

const CardIndex = ({image,title,text}) => {
    return ( 
        <div className="col-12 col-md-6 my-3">
            <div className="card shadow-hover p-3">
                <div className="text-center">
                    
                     
                        <Image src={image} width={100} height={100} alt={title} />
                    
                    <h4 className="color-fondo my-4">{title}</h4>

                </div>
                <p>{text} </p>
            </div>
        </div>
     );
}
 
export default CardIndex;