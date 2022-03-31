import React, { useEffect, useState } from 'react'
import { Button, Col, Container,  Image, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AllProduct } from '../../action';
import Layout from '../../components/layouts';
import AddProductsModal from './modals/addProducts';
import './product.css';
const Products = () => {
    const dispatch = useDispatch();
    const product = useSelector(state => state.product);
    const {products, loading } = product;
    const [show,setShow] = useState(false)
    // const [fetchData,setFetchData] = useState(false)
    const handleShow = () => setShow(true);
    const handleClose = () =>  setShow(false);
    useEffect(() => {
       dispatch(AllProduct())

    }, [])
    if (products) {
        console.log(products)
    }
    return (
        <Layout sidebar>
            <Container fluid>
                <Row>
                    <Col md={12} className="mt-5">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h2>All Categories</h2>
                            <Button variant="primary" onClick={handleShow} >Add Product <i className="fa fa-plus"></i></Button>
                        </div>
                    </Col>
                    <Col md={12} className="mt-4">
                        <Table striped bordered hover >
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Image</th>
                                    <th>Quantity</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {  
                                   loading?<tr><td>Loading.....</td></tr>:
                                   products.map((cat)=>
                                     <tr key={cat._id}>
                                        <td colSpan="1">{cat._id}</td> 
                                        <td colSpan="1">{cat.name}</td>
                                        <td colSpan="1"><p style={{whiteSpace:"nowrap",overflow: "hidden",textOverflow: "ellipsis"}}>{cat.description}</p></td>
                                        <td colSpan="1">{cat.price}</td>
                                        {
                                         cat.productPicture.length>0?<td colSpan="1"><Image src={'data:image/png;base64,'+cat.productPicture[0].img} style={{objectFit:'contain', height: '50px', width: "50px" }} thumbnail /></td>:
                                         <td colSpan="1"><Image src={'data:image/png;base64,'+null} style={{ height: '50px',objectFit:'contain', width: "50px" }} thumbnail /></td>
                                        }
                                        
                                        <td colSpan="1">{cat.quantity}</td>
                                        <td colSpan="1"><Button size="sm" variant="primary"><i className="fa fa-pencil"></i></Button> || <Button size="sm" variant="danger"><i className="fa fa-trash"></i></Button></td>
                                     </tr>
                                   )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <AddProductsModal show={show} setFetchData={dispatch} handleClose={handleClose}/>
            </Container>
        </Layout>
    )
}

export default Products
