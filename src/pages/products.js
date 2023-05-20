import { useState, useEffect } from "react";
import CardProduct from "./components/CardProduct";
import CarShopping from "./components/CarShopping";
import Loading from "./components/Loading";
import axios from "axios";
import Form from "./components/Form";


const Products = () => {
    
    const [dataInitialProducts, setdataInitialProducts] = useState([]);
    const [dataForm, setDataForm] = useState([]);
    const GetProducts= async ()=>{
        const res = await axios.post('/api/products');
        console.log(res.data);
        setdataInitialProducts(res.data);
    }
    
    useEffect(() => {
        GetProducts();
        setDataForm(dataInitialProducts);

    }, []);
    useEffect(() => {
        setDataForm(dataInitialProducts);

    }, [dataInitialProducts]);
    return ( 
    <div className="container p-3 overflow-hidden">
        <CarShopping/>
        <hr/>
        <Form setDataForm={setDataForm} dataInitialProducts={dataInitialProducts}  dataForm={dataForm} />
        <h2 className="h1 color-fondo">Productos</h2>
        <p>Mira nuestro catálogo</p>
        <div className="row">
        {
            dataForm.length < 1 ? <div className="container d-flex justify-content-center align-items-center" style={{height:"100vh"}} ><Loading/> </div> :
            dataForm.map(({id,title,category,image,price,description})=>{
                return <CardProduct key={id}  id ={id} title={title} category={category} image={image} price={price} description={description} />
            })
        }
        </div>
    </div>
   );
}
 
export default Products;