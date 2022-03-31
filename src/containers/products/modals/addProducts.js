import React, { useEffect, useState } from 'react'
import { Button, Form, Image, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import {useSelector } from 'react-redux';
import {AllProduct, Category, createProduct } from '../../../action';
import Input from '../../../shares/input';
const AddProductsModal = (props) => {
    // const dispatch = useDispatch();
    const { show, handleClose,setFetchData } = props;
    const categories = useSelector(state => state.category);
    const product = useSelector(state => state.product);
    const [allImages, setAllImages] = useState([])
    const { result } = categories;
    const { successProduct} = product;
    const { register, handleSubmit, reset } = useForm();
    let cats = [];
    const allCats = (cates) => {
        if (result && result.length > 0) {
            for (let cat of cates) {
                cats.push(
                    cat
                )
                if (cat.children) {
                    allCats(cat.children)
                }
            }
        }
    }
    useEffect( () => {
         setFetchData(Category());

    }, [])
    if (result) {
        allCats(result)
        console.log(cats)
    }
    const files = (e) => {
        console.log(e.target.files)
        // setImages(...images,e.target.files)
        const files = e.target.files
        setAllImages(allImages => ([...allImages, ...files]))
        console.log(allImages)
    }
 
    const addProduct = (data) => {
        console.log(allImages.length)
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('price', data.price);
        formData.append('quantity', data.quantity);
        formData.append('category', data.category)
        if (allImages.length > 0) {
            for (var i = 0; i <= allImages.length; i++) {
                formData.append('productPicture', allImages[i])
            }
        }
        console.log(formData);
        setFetchData(createProduct(formData));
        setTimeout(()=>{
         setFetchData(AllProduct());
         reset();
        handleClose();
  
        },3000)
        
    }
    if (successProduct) {
        console.log(successProduct)
    }
    const removeFiles = (name)=>{
        console.log(name);
        // const name = e.target.getAttribute("name")
        // setAllImages(allImages.slice(index,2))
        setAllImages([...allImages.filter(item => item.name !== name)]);
        console.log(allImages)
    }
    return (
        <Modal

            show={show}
            onHide={handleClose}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                    Add Category
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(addProduct)}>
                    <Input
                        controlId="formBasicName"
                        label="Name"
                        type="text"
                        autoComplete="category-new"
                        required={true}
                        register={register('name')}
                        placeholder="Enter a product Name"
                        errorMsg=""
                    />
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control {...register('description')} as="textarea" rows={3} />
                    </Form.Group>
                    <Input
                        controlId="formPrice"
                        label="Price"
                        type="number"
                        autoComplete="price-new"
                        required={true}
                        register={register('price')}
                        placeholder="Enter a price"
                        errorMsg=""
                    />
                    <Input
                        controlId="formBasicquantity"
                        label="quantity"
                        type="number"
                        autoComplete="quantity-new"
                        required={true}
                        register={register('quantity')}
                        placeholder="Enter a quantity"
                        errorMsg=""
                    />
                    <Form.Group controlId="formGridState">
                        <Form.Label>Category</Form.Label>
                        <select {...register('category')} className="form-control">
                            <option value="">Select a category</option>
                            {
                                cats && cats.map((catsAll) =>
                                    <option key={catsAll._id} value={catsAll._id}>{catsAll.name}</option>
                                )
                            }
                        </select>
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3" style={{display:'table'}}>
                        <Form.Label>Product Image</Form.Label>
                        <Form.Control multiple   onChange={files} type="file" />
                        {
                            allImages && allImages.map((images, index) =>
                                <div key={index} style={{float:'left'}}>
                                    <Image src={URL.createObjectURL(images)}  style={{ height: '50px', margin:'15px 0px 15px 0px', objectFit: 'contain', width: "50px" }} thumbnail />
                                    <button type="button" onClick={()=>{removeFiles(images.name)}} style={{fontSize:'1rem',height:'16px',width:'16px',borderRadius:'50%',margin:'8px 10px 0px -10px',backgroundColor:'#00000030'}}  className="close" aria-label="Close">
                                        <span style={{fontSize:'1rem'}} aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            )
                        }
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default AddProductsModal;
