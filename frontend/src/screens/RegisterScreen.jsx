import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Form,Button,Row,Col} from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import {useLocation,useNavigate} from 'react-router-dom';
import Loader  from '../components/Loader';
import {useRegisterMutation} from '../slices/usersApiSlice';
import {setCredentials} from '../slices/authSlice'
import {toast} from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';


const RegisterScreen =()=>{
    const [name,setName] =useState('');
   const [email,setEmail] =useState('');
   const [password,setPassword] =useState('');
   const [confirmPassword,setConfirmPassword] =useState('');


   const dispatch =useDispatch();
   const navigate =useNavigate();
   
   
   const [register,{isLoading}] =useRegisterMutation();

   const {userInfo} =useSelector((state) => state.auth);
  
   const  {search} =useLocation();
   const sp=new URLSearchParams(search);
   const redirect= sp.get('redirect');

  useEffect(() =>{
    if(userInfo){
        navigate(redirect);

 }  
  },[userInfo,redirect,navigate]);


   const submitHandler =async(e) =>{
    e.preventDefault();
    if(password !==confirmPassword){
        toast.error('Passwords do not match!');
        return; 
    }
    else{
        try{
            const res=await register({name,email,password}).unwrap();
           dispatch(setCredentials({...res}));
           navigate(redirect);
    
        }catch(err){
            toast.error(err?.data?.message || err.error);
    
        }
    }
    

   };

    return (
     <FormContainer> 
      <h1>Sign Up</h1>
      <Form onSubmit={submitHandler}>
      
      <Form.Group controlId='name' className="my-3">
      <Form.Label>Name </Form.Label>
       <Form.Control 
        type='text'
        placeholder="Enter name"
        value={name}
        onChange={(e) =>setEmail(e.target.value)}>
       </Form.Control>
</Form.Group>


      <Form.Group controlId='email' className="my-3">
      <Form.Label>Email Address</Form.Label>
       <Form.Control 
        type='email'
        placeholder='Enter email'
        value={email}
        onChange={(e) =>setConfirmPassword(e.target.value)}>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId='password' className="my-3">
      <Form.Label>Password Address</Form.Label>
       <Form.Control 
        type='password'
        placeholder="Enter email"
        value={password}
        onChange={(e) =>setPassword(e.target.value)}></Form.Control>
      </Form.Group>


   <Button type='submit' variant='primary' className="mt-2" 
   disabled ={isLoading} >
   Register 
   </Button>
   { isLoading && <Loader/> 
   
}
   </Form>
   <Row className ='py-3'>
   <Col>
   Already have an account?{' '}<Link to={redirect ?`/register?redirect=$
   {redirect}`:'/login'}>
   Register
   </Link>
   </Col>
   </Row>
     </FormContainer>
    )


}

export default RegisterScreen;