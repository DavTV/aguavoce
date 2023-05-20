// import { useEffect } from "react";
import Head from "next/head";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Layout = ({children}) => {
    // useEffect(() => {
    //     document.body.style.backgroundColor = 'gray';
    // }, []);
    return ( 
        <>
        <Header/>
        <Head>
        <title>Agua Vocé</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png"/>
        </Head>
         <div className="container my-4">
             
                 {children}
            
         </div>
        <Footer/>
        </>

     );
}
 
export default Layout;