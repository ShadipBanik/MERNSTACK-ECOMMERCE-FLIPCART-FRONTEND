import React from 'react'
import { Container,Col, Row } from 'react-bootstrap'
import Header from '../header';
import Sidebar from '../sidebar';
const Layout = (props) => {
    console.log(props)
    return (
        <div>
              <Header/>
              <Container fluid>
              { 
                props.sidebar?
                <Row>
                    <Col md={2} style={{padding:0}}>
                        <Sidebar />
                    </Col>
                    <Col md={10} style={{ marginLeft: 'auto' }}>{props.children}</Col>
                </Row>
                : props.children
                
              } 
              </Container>
        </div>
    )
}

export default Layout;
