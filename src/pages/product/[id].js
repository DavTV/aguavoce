import { useDispatch } from "react-redux";
import { addProduct } from '../../reducers/car/carSlice';
// import { addProduct } from "../../reducers/car/carSlice";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import useProucts from "../../hooks/useProducts";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

const Product = () => {
    const [product, setProduct] = useState({})
    const [count, setCount] = useState(1);
    const router = useRouter();
    const { id } = router.query || "";
    useEffect(() => {
        setProduct(useProucts(`https://fakestoreapi.com/products/${id}`).fetchProducts().then((data) => { setProduct(data) }))
    }, []);

    const { title, price, description, category, image } = product;
    const dispatch = useDispatch();

    return (

        product.title ?
            <>
                <div className="my-4">
                    <nav aria-label="breadcrumb ">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link href="/">Inicio</Link></li>
                            <li class="breadcrumb-item">Producto</li>

                        </ol>
                    </nav>
                </div>
                <div className="shadow ">
                    <div className="row">
                        {/* c4-2-2100 */}
                        <div className="col-12 col-md-6 p-5">

                            <div style={{ maxHeight: "400px", maxWidth: "300px" }} className="my-4" >
                                <p className="my-4">{title} - <span className="text-primary">{category}</span></p>
                                <Image src={image || ""} alt={description} width="300" height="350" layout="response" className="d-block mx-auto" />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 p-5">
                            <div className="my-3">
                                <strong className="text-primary h1">Precio: S/ {price}</strong>
                            </div>

                            <p>{description}</p>
                            <div className="btn-group">
                                <button className="btn" onClick={() => {setCount(count + 1)}} >+</button>
                                <span className="btn">{count}</span >
                                <button className="btn" onClick={() => {if (count > 1) setCount(count - 1)}}>-</button>
                            </div>
                            <div>
                                <Link href="/" className="btn btn-outline-primary my-3" onClick={() => {
                                    dispatch(
                                        addProduct(
                                            { id, title, price, category, description, image, count }
                                        )
                                    )
                                    alert("Producto agregado correctamente.")
                                }} >Agregar a carrito</Link>

                            </div>
                        </div>

                    </div> </div></> : <div className="container d-flex justify-content-center align-items-center vh-100 " ><Loading /> </div>
    );
}

export default Product;