const Form = ({setDataForm,dataInitialProducts}) => {
    const handleInput=(e)=>{
        let inputValue = e.target.value;
        let newData = dataInitialProducts.filter((product)=> product.title.includes(inputValue));
        setDataForm(newData.length > 0 ? newData : dataInitialProducts)
    }
    return ( 
        <div className="text-end my-5">
        <form className="btn-group" onSubmit={(e)=>{e.preventDefault()}}>
            <input className="form-control p-2" type="text" name="product" placeholder="Busca un producto" onChange={handleInput} />
            {/* <button className="btn color-fondo btn-fondo" >Buscar</button> */}
        </form>
        </div>
     );
}
 
export default Form;