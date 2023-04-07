import { useState, useEffect } from "react";
import CardProduct from "./components/CardProduct";
import CarShopping from "./components/CarShopping";
import Loading from "./components/Loading";
import Menu from "./components/Menu";
import useProucts from "../hooks/useProducts";
import styles from "./index.module.css";

const Home = () => {
    
    const [dataProducts, setdataProducts] = useState([]);
    // const [categories, setCategories] = useState([]);

    const handleLink=(category)=>{
        setdataProducts([])
        useProucts(`https://fakestoreapi.com/products/category/${category}`).fetchProducts().then((data)=>{setdataProducts(data)})
    }
    useEffect(() => {
        useProucts().fetchProducts().then((data)=>{setdataProducts(data)})
        // useProucts('https://fakestoreapi.com/products/categories').fetchProducts().then((data)=>{setCategories(data)})

    }, []);
// console.log(dataProducts)
  return ( 
    <div className="container p-3">
        <CarShopping/>
        <hr/>
        <Menu   handleLink={handleLink}  />
        <h1 className="">Home</h1>
        <p>Probando Redux Toolkit</p>
        <div className="row">
        {
            dataProducts.length < 1 ? <div className="container d-flex justify-content-center align-items-center" style={{height:"100vh"}} ><Loading/> </div> :
            dataProducts.map(({id,title,category,image,price,description})=>{
                return <CardProduct key={id}  id ={id} title={title} category={category} image={image} price={price} description={description} />
            })
        }
        </div>
    </div>
   );
}
 
export default Home;