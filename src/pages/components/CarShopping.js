import {useSelector} from "react-redux";
import Row from "./Row";
import { useState, useEffect } from "react";
const CarShopping = () => {
    const {count,data,total} = useSelector(state => state.car)
    const [openbtn, setOpenbtn] = useState(false);
    // console.log(useSelector(state => state.car))
    const [message, setMessage] = useState("");
    const PushProductWhatsapp=()=>{
        let aux= "";
        data.map((item)=>{
                aux= aux + item.title +" -> "+ item.count + ", ";
            })
            setMessage(aux);
            // console.log(message)
        }


    const SendWhatsapp=()=>{
        if(data.length>0){
            const link = `https://api.whatsapp.com/send?phone=51979895362&text=Hola,%20quisiera%20hacer %20la%20siguiente%20orden%20:%20${message}%20con%20un%20monto%20total%20de%20${total.toFixed(2)}%20 nuevos%20soles.`
    
            let a = document.createElement('a');
            a.href= link;
            a.click();

        }else{
            alert("Necesita tener al menos un producto antes de realizar la compra.")
        }
        // console.log(link)
         
    }
    useEffect(() => {
        PushProductWhatsapp();
    }, [data]);

    return ( 
        <div className="position-relative">
            <small className="fs-2 cursor-pointer" onClick={()=>setOpenbtn(!openbtn)} >🛒<small></small><sup className="color-fondo"> {count}</sup></small>
            <div className={ openbtn ? "position-absolute car-shopping  shadow rounded active": "position-absolute car-shopping  shadow rounded "}
             >
                <div className="table-responsive  p-2">
                    {data.length >0 ?
                    
                    <table className="table">
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>SubTotal</th>
                                    <th>Opciones</th>
                                </tr>

                            </thead>
                        <tbody>
                    {  data.map(({id,title,price,description,count,category,image})=>{
                        return (
                            <Row key={id} id={id} title={title} count={count} description={description} category={category} image={image} price={price}/>
                            )
                        })
                    }
                    </tbody>

                    </table>

                     : <p className="p-2 text-center">Aún no hay productos agregados</p>}

                       
                    {data.length>0 &&
                    
                    <div className="d-md-flex justify-content-between px-3 py-2" >
                            
                            <button className="btn  color-fondo btn-fondo" onClick={SendWhatsapp}  >Realizar Compra</button>                        
                            <p className="fw-bold my-3">Total : S/ {total.toFixed(2)}</p>
                           
                    </div> 
                    }
                 
            </div>   
        </div>
        </div>
     );
}
 
export default CarShopping;