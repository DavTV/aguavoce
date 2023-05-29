import axios from "axios";
import {router } from "next/router";
import { useState } from "react";

const FormRegister = () => {
    const [dataForm, setDataForm] = useState({
        name:"",
        lastName:"",
        number:""
    });
    const HandleBlur=(e)=>{
        // const { name, value } = e.target
        //  console.log(e.target.name)
        // console.log(e.target.value)
        setDataForm({
            ...dataForm,[e.target.name]:e.target.value
        })
    }
    const HandleSubmit= async(e)=>{
        e.preventDefault();
        console.log(dataForm)
        const res = await axios.post("/api/users/register",dataForm);
        console.log(res.data)
        if(res.data){
            alert("Usuario registrado exitosamente.");
            router.push("/products");
        }else{
            alert("Usuario no fue registrado.");
            

        }
    }
    return ( 
        <div className="row my-5">
        <div className="col-12 col-md-6">
            <h2 className="h1 my-4">
                Forma parte de nuestros clientes.
            </h2>
        </div>   
        <form className="col-12 col-md-6" onSubmit={HandleSubmit}>

                <input  type="text" className="form-control" name="name" placeholder="Ingrese sus nombre" onBlur={HandleBlur} />
                <input  type="text" className="form-control" name="lastName" placeholder="Ingrese sus apellidos" onBlur={HandleBlur} />
                <input  type="number" className="form-control" name="number" placeholder="Ingrese su número de celular" onBlur={HandleBlur} />
                <button className="btn my-3 btn-fondo">Registrar</button>
        </form>
        </div>
     );
}
 
export default FormRegister;