import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button,Row,Col } from 'react-bootstrap';
import { FaTimes,FaEdit,FaTrash } from 'react-icons/fa';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { useGetProductsQuery } from '../../slices/productsApiSlice';




const ProductListScreen =() =>{
    const {data :products,isLoading ,error}=useGetProductsQuery();

    console.log(products);

    return (<>
    <Row className="align-items-center">
    <Col>
    <h1>Product</h1>
    </Col>
    <Col className="text-end">
    <Button className="btn-sm m-3">
     <FaEdit /> Create Product
    </Button>

    </Col>
    
    </Row>
    {isLoading ? <Loader /> :error ? <Message variant ='danger'>
    {error}</Message>:(
      <>
      <Table stripped hover responsive className='table-sm'>
       <thead>
       <tr>
          
         <th>ID</th>
         <th>NAME</th>
         <th>PRICE</th>
         <th>CATEGORY</th>
         <th>BRAND</th>
         <th></th>
       
       
       
       
       </tr>
       
       
       </thead>
         <tbody>
          {products.map((product)=>(
             <tr key={product._id}>
             <td>{product._id}</td>
             <td>{product.name}</td>
             <td>{product.price}</td>
             <td>{product.category}</td>
             <td>{product.brand}</td>
             
             
             </td>
            </tr>
    )}
         </tbody>
      </Table>
       
      </>
    ) }
    </>
    );
}

export default ProductListScreen;
