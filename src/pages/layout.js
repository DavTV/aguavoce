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
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
        </Head>
         <div className="container my-4">
             
                 {children}
            
         </div>
        <Footer/>
        </>

     );
}
 
export default Layout;