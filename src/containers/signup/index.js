import React, { useEffect } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { useHistory} from 'react-router-dom'
import { useForm } from 'react-hook-form';
import Layout from '../../components/layouts'
import { isAuthenticate } from '../../middelwares/authCheck'
import {useDispatch} from 'react-redux'
import Input from '../../shares/input'
import { userRegister } from '../../action';

const Singup = () => {
    const history = useHistory();
    const {register,handleSubmit} = useForm();
    const dispatch = useDispatch();
    useEffect(()=>{
        if(isAuthenticate()){
            console.log(isAuthenticate())
            history.push('/')
         }
    },[])

    const signUp = (data) =>{
         console.log(data)
       dispatch(userRegister(data))
    }
    
    return (
        <Layout>
            <Container>
                <Row style={{ margin: "5rem" }}>
                    <Col md={{ span: 8, offset: 2 }}>
                        <Form onSubmit={handleSubmit(signUp)}>
                            <Row>
                                <Col md={{ span: 6 }}>
                                    <Input
                                        controlId="firstname"
                                        label="First Name"
                                        type="text"
                                        autoComplete="first-new"
                                        placeholder="First Name"
                                        register={register('firstName')}
                                        errorMsg=""
                                    />
                                </Col>
                                <Col md={{ span: 6 }}>

                                    <Input
                                        controlId="lastname"
                                        label="Last Name"
                                        autoComplete="last-new"
                                        type="text"
                                        placeholder="Last Name"
                                        register={register('lastName')}
                                        errorMsg=""
                                    />
                                </Col>
                            </Row>
                            <Input
                                controlId="formBasicEmail"
                                label="Email Adress"
                                type="email"
                                autoComplete="email-new"
                                placeholder="Enter Email"
                                register={register('email')}
                                errorMsg=""
                            />

                            <Input
                                controlId="formBasicPassword"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                register={register('password')}
                                placeholder="Password"
                                errorMsg=""
                            />
                            <Input
                                controlId="contactnumber"
                                label="Contact Number"
                                type="text"
                                value=""
                                autoComplete="contact-new"
                                placeholder="Contact Number"
                                register={register('contactNumber')}
                                errorMsg=""
                            />

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

export default Singup
