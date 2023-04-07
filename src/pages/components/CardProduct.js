import Image from "next/image";
import styles from "./cardProduct.module.css";
// import {useDispatch} from "react-redux";
// import {addProduct} from '../../reducers/car/carSlice';
import Link from "next/link";

const CardProduct = ({id,title,price,description,category,image}) => {
    // const dispatch = useDispatch();
    return ( 
        <div className=" p-3 col-6 col-md-4">
            <div className="card p-3">

            <div className={styles.containerImage}>
                <Image src={image||""} alt={description}  width="0" height="0" layout="responsive" />
            </div>
            <hr/>
            <p className="fw-bold text-primary text-truncate">{title}</p>
            {/* <small>{description}</small> */}
            <strong>Precio: S/ {price}</strong>
            <div>
                {/* <button className="btn btn-outline-primary my-3"   onClick={()=>{
                    dispatch(
                        addProduct(
                            {id,title,price,category,description,image}
                        )
                    )}} >Agregar a carrito</button> */}
                    <Link className="btn btn-outline-primary my-3" href={`/product/${id}`} > Ver
                    </Link>
                    </div>
            </div>
        </div>
     );
}
 
export default CardProduct;