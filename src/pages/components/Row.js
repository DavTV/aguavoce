import Image from "next/image";
const Row = ({id,title,price,description,category,image}) => {
    return ( 
        <tr>
            <td className="img-table"> <Image src={image||""} alt={description}  width="0" height="0" layout="responsive" /></td>
            <td>{title}</td>
            <td>{price}</td>
            <td>cantidad</td>
            <td className="btn-group">
                <button className="btn btn-danger">Eliminar</button>
                <button className="btn btn-success ">Editar</button>
            </td>
        </tr>
     );
}
 
export default Row;