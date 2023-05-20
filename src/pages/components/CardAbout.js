const CardAbout = ({title,text}) => {
    return ( 
       
        <div className="p-3">
            <div className="text-center">
            
                <h4 className="color-fondo my-4">{title}</h4>

            </div>
            <hr/>
            <p>{text}</p>
        </div>
    
     );
}
 
export default CardAbout;