import React, { useEffect } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { Link,useHistory} from 'react-router-dom'
import Layout from '../../components/layouts'
import Input from '../../shares/input'
import { useForm } from 'react-hook-form';
import {login} from '../../action'
import {useDispatch,useSelector} from 'react-redux'
import { isAuthenticate } from '../../middelwares/authCheck'
const Singin = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);  
    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const {authenticate} = auth;
    const loginUser = (data) =>{
        dispatch(login(data));
    }
    useEffect(()=>{
        console.log(isAuthenticate())
        if(isAuthenticate()){
           history.push("/");
        }
    },[isAuthenticate(),history])
    if(authenticate){
        console.log(auth);
    }
    return (
        <Layout>
            <Container>
                <Row style={{ margin: "5rem" }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={handleSubmit(loginUser)} >
                            <Input
                                controlId="formBasicEmail"
                                label="Email Adress"
                                type="email"
                                autoComplete="email-new"
                                required={true}
                                register={register('email')}
                                placeholder="Enter Email"
                                errorMsg=""
                            />
                            <Input
                                controlId="formBasicPassword"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                required={true}
                                register={register('password')}
                                placeholder="Password"
                                errorMsg=""
                            />
                            <Form.Group controlId="formBasicCheckbox">
                                <Link to="#">Forget Password?  </Link>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default Singin
