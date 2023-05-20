import Image from "next/image";
import Link from "next/link";

const CardProduct = ({id,title,price,description,image}) => {
    return ( 
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
						<div className="form-group mb-3">
							<div className="card">
								<div className="card-body text-center">
								
                                 {/* <Image src={image||""} alt={description}  width="180" height="250" layout="responsive" /> */}
                                 <Image src="/products/botella-650ml.jpg" alt={description}  width="180" height="250" layout="responsive" />


								</div>
								<div className="card-footer text-center">
									<h6>{title}</h6>
									<h5>S/ {price}</h5>
									
									<div>  
										{/* <a href="" class="btn btn-danger"><img src="img/heart.png" alt=""/></a>
										<a href="Controlador?accion=AgregarCarrito&id=${p.getId()}" class="btn btn-outline-info">Detalles</a> */}
                                        <button className="btn btn-danger me-2"><Image src="/corazon-blanco.png" width={20} height={20} alt="like" /></button>
                                        <Link className="btn color-fondo btn-fondo my-3" href={`/product/${id}`} > Detalle
                    </Link>
									</div>
								</div>
							</div>
						</div>
					</div>
     );
}
 
export default CardProduct;