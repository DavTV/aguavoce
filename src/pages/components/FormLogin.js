const FormLogin = ({setNumber}) => {
    
    return ( 
    
                <input  type="number" className="form-control"  placeholder="Ingrese su número de celular" onBlur={(e)=>{setNumber(e.target.value)}} />
        
     );
}
 
export default FormLogin;