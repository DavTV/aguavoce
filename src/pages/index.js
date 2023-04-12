import { useState, useEffect } from "react";
import CardProduct from "./components/CardProduct";
import CarShopping from "./components/CarShopping";
import Loading from "./components/Loading";
import Menu from "./components/Menu";
import useProucts from "../hooks/useProducts";


const Home = () => {
    
    const [dataInitialProducts, setdataInitialProducts] = useState([]);
    const [dataCategories, setDataCategories] = useState([]);
    useEffect(() => {
        useProucts().fetchProducts().then((data)=>{setdataInitialProducts(data)});
    }, []);

    useEffect(() => {
        setDataCategories(dataInitialProducts);
    }, [dataInitialProducts]);

    const handleCategories=(categories)=>{
        setDataCategories(dataInitialProducts.filter((product)=>{
            return product.category == categories
        }))
    }
    const handleAll=()=>{
        setDataCategories(dataInitialProducts);
    }
    return ( 
    <div className="container p-3 overflow-hidden">
        <CarShopping/>
        <hr/>
        <Menu  handleAll={handleAll}   handleCategories={handleCategories}/>
        <h1 className="">Home</h1>
        <p>Probando Redux Toolkit</p>
        <div className="row">
        {
            dataCategories.length < 1 ? <div className="container d-flex justify-content-center align-items-center" style={{height:"100vh"}} ><Loading/> </div> :
            dataCategories.map(({id,title,category,image,price,description})=>{
                return <CardProduct key={id}  id ={id} title={title} category={category} image={image} price={price} description={description} />
            })
        }
        </div>
    </div>
   );
}
 
export default Home;