import '@/styles/globals.css';
import {Provider} from 'react-redux'
import store from '@/app/store';
// import '../assets/main.css'
import "../styles/globals.css"
import "bootswatch/dist/materia/bootstrap.min.css";
import Layout from './layout';

export default function App({ Component, pageProps }) {
  return (
      <Layout>
        <Provider store={store}> 
          <Component {...pageProps} />
        </Provider>
      </Layout>
  )
}
