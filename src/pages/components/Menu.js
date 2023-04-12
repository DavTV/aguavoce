import { useEffect, useRef, useState } from "react";
import useProucts from "../../hooks/useProducts";
import Loading from "./Loading";

const Menu = ({handleCategories,handleAll}) => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        useProucts('https://fakestoreapi.com/products/categories').fetchProducts().then((data)=>{setCategories(data)});
    }, []);

    return ( 
        <div className="text-center my-4 ">
            
            
            <button  className="btn btn-active" onClick={handleAll}>All</button>
                {
                    categories.length >0 ?               
                    categories.map((product)=>{
                        return <button  key={product.id} className="btn mx-2 my-2 btn-active" onClick={
                            ()=>handleCategories(product)
                        } >{product}</button  >
                    }): <div className="container d-flex justify-content-center align-items-center "><Loading/></div>
                    
                }
        </div>
     );
}
 
export default Menu;