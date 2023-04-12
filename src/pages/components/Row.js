import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import {deleteProduct} from "../../reducers/car/carSlice";
const Row = ({id,title,price,description,image, count}) => {
    const dispatch = useDispatch();
    return ( 
        <tr>
            <td className="img-table"> <Image src={image||""} alt={description}  width="0" height="0" layout="responsive" /></td>
            <td>{title}</td>
            <td>${price}</td>
            <td>{count}</td>
            <td> <span className="text-primary">ST: </span>${price*count}</td>
            <td >
                {/* <Link className="btn btn-outline-success mb-1 mx-1" href={`/product/${id}`} > Editar
                    </Link> */}
                <button className="btn btn-outline-success mb-1 mx-1" onClick={()=>{alert("Función en desarrollo")}} >Editar</button>
                <button className="btn btn-outline-danger mb-1 mx-1" onClick={()=>{
                    dispatch(
                        deleteProduct(id)
                    )}
                } >Eliminar</button>
            </td>
        </tr>
     );
}
 
export default Row;