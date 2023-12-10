import Header from './components/Header';
import { Container } from "react-bootstrap";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/distReactToastify.css';

import Footer from "./components/Footer";
import HomeScreen from './screens/HomeScreen';
import {Outlet} from 'react-router-dom';

const App=() =>{
return (
  <>
  <Header/>
  <main className="py-3">
   <Container>
   <Outlet/>
  
  </Container>
 
  </main>
  <Footer/> 
  <ToastContainer/ >
  
  </>
);
};
export default App;