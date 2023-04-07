import { useEffect, useState } from "react";
import useProucts from "../hooks/useProducts";
import Loading from "./Loading";

const Menu = ({handleLink}) => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        // useProucts().fetchProducts().then((data)=>{setdataProducts(data)})
        useProucts('https://fakestoreapi.com/products/categories').fetchProducts().then((data)=>{setCategories(data)})
    }, []);
    return ( 
        <div className="text-center my-4 ">
            {
                categories.length >0 ?
                categories.map((product)=>{
                    return <button className="btn mx-2 my-2 btn-active" onClick={()=>handleLink(product)} >{product}</button  >
                }): <div className="container d-flex justify-content-center align-items-center "><Loading/></div>
            }

        </div>
     );
}
 
export default Menu;