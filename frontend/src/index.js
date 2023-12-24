import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,
createRoutesFromElements,
Route,RouterProvider} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

import {HelmetProvider} from 'react-helmet-async';

import HomeScreen from './screens/HomeScreen';
import ProductListScreen from './screens/admin/ProductListScreen';
import OrderListScreen from './screens/admin/OrderListScreen';

//import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.css';
import './assets/styles/bootstrap.custom.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import PrivateRoute from './components/PrivateRoute';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import {PayPalScriptProvider} from '@paypal/react-paypal-js';
import ProfileScreen from './screens/ProfileScreen';
import AdminRoute from  './components/AdminRoute';
//import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';
import ProductEditScreen from './screens/admin/ProductEditScreen';
import UserEditScreen from './screens/admin/UserEditScreen';


const router =createBrowserRouter(
createRoutesFromElements(
  <Route path="/" element={<App/>} >
   <Route index={true} path="/" element={<HomeScreen/>} />
   <Route path='/page/pageNumber' element={<HomeScreen/>} />
   <Route path='/search' element={<HomeScreen/>} />
   <Route path='/search/:keyword/page/:pageNumber' element ={<HomeScreen/>} /> 
   <Route  path="/product/:id" element={<ProductScreen/>} />
   <Route path='/cart' element={<CartScreen/>} />
   <Route path='/login' element={<LoginScreen/>} />
   <Route path='/register' element={<RegisterScreen/>} />
  

   <Route path='' element={<PrivateRoute/>} >
   <Route path='/shipping' element={<ShippingScreen/>} />
   <Route path='/payment' element={<PaymentScreen/>} />
   <Route path='/placeorder' element={<PlaceOrderScreen/>} />
   <Route path='/order/:id' element={<OrderScreen />} />
   <Route path='/profile' element={<ProfileScreen/>} />
   <Route path='/admin/userlist' element={<UserListScreen />} />
   <Route path='/admin/user/:id/edit' element={<UserEditScreen />} />

   </Route>


   


   
   <Route path='' element={<AdminRoute/>} >
   <Route path='/admin/orderlist' element={<OrderListScreen/>} />
   <Route path='/admin/productlist/:pageNumber' element={<ProductListScreen/>} />
   <Route path='/admin/productlist' element={<ProductListScreen/>} />
  
   <Route path='/admin/product/:id/edit' element ={<ProductEditScreen />} />
   <Route path='/admin/userlist' element={<UserListScreen/>} />

   <Route path='/admin/user/:id/edit' element={<UserEditScreen />} />

   </Route>


   </Route>







)
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <HelmetProvider>
   <Provider store={store}>
    <PayPalScriptProvider deferLoading ={true} >
      <RouterProvider router={router} />
    </PayPalScriptProvider>

    </Provider>
   
    </HelmetProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
