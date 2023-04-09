import {useSelector} from "react-redux";
import Row from "./Row";
import { useState } from "react";
// useState
const CarShopping = () => {
    const {count,data} = useSelector(state => state.car)
    const [openbtn, setOpenbtn] = useState(false);

    return ( 
        <div className="position-relative">
            <small className="fs-2 cursor-pointer" onClick={()=>setOpenbtn(!openbtn)} >🛒<small></small><sup className="text-primary"> {count}</sup></small>
            <div className={ openbtn ? "position-absolute car-shopping  shadow rounded active": "position-absolute car-shopping  shadow rounded "}
             >
                <div className="table-responsive  p-2">
                    {data.length >0 ?
                    
                    <table className="table">
                        <tbody>
                    {  data.map(({id,title,price,description,count,category,image})=>{
                        return (
                            // <CardProduct key={id} id={id} title={title} description={description} category={category} image={image} price={price} />
                            <Row key={id} id={id} title={title} count={count} description={description} category={category} image={image} price={price}/>
                            )
                        })
                    }
                    </tbody>
                    </table>
                     : <p className="p-2 text-center">Aún no hay productos agregados</p>}

                     {data.length >0 &&
                        <div className="d-flex justify-content-between px-3 py-2">
                            
                                <button className="btn btn-outline-primary" onClick={()=>{alert("Función en desarrollo")}}  >Realizar Compra</button>
                            
                            
                                <p className="fw-bold">Total : $ {1218.22}</p>

                            
                        </div>
                     
                     }
            </div>   
        </div>
        </div>
     );
}
 
export default CarShopping;