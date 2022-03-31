import React, { Fragment } from 'react'
import { Navbar, Nav, Container, } from 'react-bootstrap'
import { NavLink, Link,Redirect } from 'react-router-dom'
import { isAuthenticate } from '../../middelwares/authCheck'
const Header = () => {
    const signOut = () =>{
        localStorage.clear();
        return <Redirect to={`/`} />
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{zIndex:1}}>
                <Container fluid>
                    <Link to="/" className="navbar-brand">Admin Dashboard</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            {/* <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav>

                            {!isAuthenticate() && (
                                <Fragment>
                                    <li className="nav-item">
                                        <NavLink to="/signIn" className="nav-link">SINGIN </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/signUp" className="nav-link">SINGUP </NavLink>
                                    </li>
                                </Fragment>
                            )}
                            {isAuthenticate() && (
                                <Fragment>
                                    <li className="nav-item">
                                        <NavLink to="/signIn" onClick={signOut} className="nav-link">LOGOUT</NavLink>
                                    </li>
                                </Fragment>
                            )}

                            {/* <Nav.Link href="#deets">SIGNIN</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;
