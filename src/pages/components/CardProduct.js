import Image from "next/image";
import styles from "./cardProduct.module.css";
// import {useDispatch} from "react-redux";
// import {addProduct} from '../../reducers/car/carSlice';
import Link from "next/link";

const CardProduct = ({id,title,price,description,image}) => {
    return ( 
        <div className=" p-3 col-6 col-md-4">
            <div className="card p-3">

            <div className={styles.containerImage}>
                <Image src={image||""} alt={description}  width="0" height="0" layout="responsive" />
            </div>
            <hr/>
            <p className="fw-bold text-primary text-truncate">{title}</p>
            <strong>Precio: S/ {price}</strong>
            <div>
                    <Link className="btn btn-outline-primary my-3" href={`/product/${id}`} > Ver
                    </Link>
                    </div>
            </div>
        </div>
     );
}
 
export default CardProduct;