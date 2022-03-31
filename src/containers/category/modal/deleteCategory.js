import React from 'react'
import { Button, Col, Container, Row,Modal } from 'react-bootstrap'
import { toast } from 'react-toastify';
import { Category } from '../../../action';
import axios from '../../../helpers/axios';

const DeleteCategory = (props) => {
    const {show,id,setDeleteId,setShow,setCate} = props;
    const handleClose = () => setShow(false);
    const categoryDelete = (data)=>{
        console.log(data,id);
        if(data==='no'){
            setDeleteId('')
            handleClose();
        }else{
            axios.delete('category/delete/'+id).then(result=>{
                console.log(result)
              if(result.data.status===200){
                  toast.success(result.data.message,{position:"top-right",type:'success',theme:'colored',autoClose:3000});
                  handleClose();
                  setDeleteId('');
                  setCate(Category());
              }else{
                toast.error(result.data.message,{position:"top-right",type:'error',theme:'colored',autoClose:3000})
              }
            })
        }
    }
    return (
        <Modal

            show={show}
            onHide={handleClose}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                    Delete Category
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col md={12} style={{textAlign:'center'}}>
                           <Button variant="success" className="mr-2" onClick={()=>{categoryDelete ('yes')}}>Yes</Button>
                           <Button variant="danger" onClick={()=>{categoryDelete ('no')}}>No</Button>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    )
}
export default DeleteCategory
