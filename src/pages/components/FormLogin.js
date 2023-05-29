const FormLogin = ({setNumber}) => {
    
    return ( 
    
         <input  type="number" className="form-control max-input"  placeholder="Ingrese su número de celular" onBlur={(e)=>{setNumber(e.target.value)}} />
     );
}
 
export default FormLogin;