import React  from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Category, createCategory } from '../../../action'; 
import Input from '../../../shares/input';
const AddCategory = (props) => {
    // const dispatch = useDispatch();
    const {show,handleClose,categories,dispatch} = props;
    const { register, handleSubmit,reset } = useForm();
    const addCategory =  (data) => {
        const image = data.categoryImage[0]
        // data.categoryImage = image;
        const formData = new FormData();
        formData.append('name',data.name);
        formData.append('parentId',data.parentId);
        formData.append('categoryImage',image)
        dispatch(createCategory(formData));
        setTimeout(()=>{
            dispatch(Category());
            handleClose();
            reset();
        },3000)
      
    }

    // useEffect(()=>{
        // if(error){
        //     console.log(error.error.message)
        //     const msg = error.error.message
        //     toast.error(msg,{position:'top-right',type:toast.TYPE.ERROR,theme:'colored',autoClose:4000})
        // }
        // if(successResult){
        //     console.log(successResult)
        //     toast.success(message,{position:'top-right',type:toast.TYPE.SUCCESS,theme:'colored',autoClose:4000})
        //     setTimeout(()=>{
        //         setFetchCategory(true)
        //         handleClose();
        //         reset();
        //     },4500)
           
        // }
    // },[addCat])
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
            <Form onSubmit={handleSubmit(addCategory)}>
                <Input
                    controlId="formBasicName"
                    label="Name"
                    type="text"
                    autoComplete="category-new"
                    // required={true}
                    register={register('name')}
                    placeholder="Enter a Category Name"
                    errorMsg=""
                />
                <Form.Group controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <select {...register('parentId')} className="form-control">
                        <option value="">Default select</option>
                        { categories.map((cats)=>
                         <option key={cats._id} value={cats._id} > {cats.name} </option>
                        )}
                    </select>
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Default file input example</Form.Label>
                    <Form.Control {...register('categoryImage')} type="file" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Modal.Body>
    </Modal>
    )
}

export default AddCategory;