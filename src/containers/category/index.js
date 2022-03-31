import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Image, Row, Spinner, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { Category } from '../../action/category.action';
import Layout from '../../components/layouts';
import AddCategory from './modal/addCategory';
import DeleteCategory from './modal/deleteCategory';
toast.configure()
const category = () => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.category);
    const { result, loading } = categories;
    let dropdownCat = [];
    const [show, setShow] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [deleteId, setDeleteId] = useState('');
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const deletModalShow = (id) => {
        setDeleteId(id);
        setShowDelete(true);
    }
    // console.log(fetchCategory);
    useEffect(() => {
        dispatch(Category())
    }, [])

    const getDropdowncat = (allCats) => {
        console.log(allCats)
        if (allCats) {
            for (let cats of allCats) {
                dropdownCat.push(cats)
                if (cats.children.length > 0) {
                    getDropdowncat(cats.children)
                }
            }
        }
    }
    if (result.length > 0) {
        getDropdowncat(result);
    }
    return (
        <div>
            <Layout sidebar>
                <Container fluid>
                    <Row>
                        <Col md={12} className="mt-5">
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <h2>All Categories</h2>
                                {loading ? <div>
                                    <Spinner animation="grow" size='sm' variant="primary" />
                                    <Spinner animation="grow" size='sm' variant="secondary" />
                                    <Spinner animation="grow" size='sm' variant="success" />
                                    <Spinner animation="grow" size='sm' variant="danger" />
                                    <Spinner animation="grow" size='sm' variant="warning" />
                                    <Spinner animation="grow" size='sm' variant="info" />
                                    <Spinner animation="grow" size='sm' variant="light" />
                                    <Spinner animation="grow" size='sm' variant="dark" />
                                </div> : ''}
                                {/* <Button variant="primary" onClick={() => {toastr(true)}}>toast <i className="fa fa-plus"></i></Button>
                                <Button variant="primary" onClick={() => {toastr(false)}}>toastCancel <i className="fa fa-plus"></i></Button> */}
                                <Button variant="primary" onClick={handleShow}>Add Category <i className="fa fa-plus"></i></Button>
                            </div>
                        </Col>
                        <Col md={12} className="mt-4">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>ParentId</th>
                                        <th>Category Image</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {dropdownCat.length} */}
                                    {

                                        loading?<tr>Loadin......</tr>:
                                        dropdownCat.map((cat) =>
                                            <tr key={cat._id}>
                                                <td>{cat._id}</td>
                                                <td>{cat.name}</td>
                                                <td>{cat.parentId}</td>
                                                <td><Image src={'data:image/png;base64,' + cat.categoryImage} style={{ height: '50px', width: "50px" }} thumbnail /></td>
                                                <td><Button size="sm" variant="primary"><i className="fa fa-pencil"></i></Button> || <Button size="sm" variant="danger" onClick={() => { deletModalShow(cat._id) }}><i className="fa fa-trash"></i></Button></td>
                                            </tr>
                                        )

                                    }
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <AddCategory show={show} handleClose={handleClose} dispatch={dispatch} categories={dropdownCat} />
                    <DeleteCategory show={showDelete} id={deleteId} setCate={dispatch} setShow={setShowDelete} setDeleteId={setDeleteId} />
                </Container>

            </Layout>
        </div>
    )
}

export default category
