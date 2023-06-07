import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {deleteProduct, editProduct} from "../../reducers/car/carSlice";
const Row = ({id,title,price,description,image, count}) => {
    const [edit, setEdit] = useState(false);
    const [newCount, setNewCount] = useState(count);
    const handleEdit=(id,count)=>{
        setEdit(!edit)
        if(edit){
            dispatch(
                editProduct({id,count})
            )}
        }
    
    const handleCount =(e)=>{
        setNewCount(parseInt(e.target.value))
    }
    
    const dispatch = useDispatch();
    return ( 
        <tr>
            <td className="img-table">
                 {/* <Image src={image||""} alt={description}  width="0" height="0" layout="responsive" /> */}
                 <Image src="/products/imagen1.jpg" alt={description}  width="0" height="0" layout="responsive" />
                 </td>
            <td>{title}</td>
            <td>${price}</td>
            <td>
                {
                    edit ?
                    <input type="number" className="form-control" onChange={handleCount} value={newCount} min="1" />
                    :
                    count

                }
            </td>
            <td> <span className="color-fondo">ST: </span>${price*count}</td>
            <td >
                
                <button className="btn btn-outline-success mb-1 mx-1" onClick={()=>handleEdit(id,newCount)} >{edit ? "Confirmar": "Editar"}</button>
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