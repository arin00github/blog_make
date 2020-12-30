import { Fragment } from "react";
import { Collapse, Container, Nav, Navbar, NavbarToggler } from "reactstrap";
import { Link } from 'react-router-dom'


const AppNavbar = () =>{
    return(
        <Fragment>
        <Navbar color="dark" dark expand="lg" className="sticky-top">
            <Container>
                <Link to="/" className="text-white">arin's blog</Link>
                <NavbarToggler/>
                    <Collapse isOpen={true} navbar>
                        <Nav className="ml-auto d-flex justify-content-around">
                        {true ? <h1 className="text-white">authLink</h1> : <h1>guestLkink</h1>}
                        </Nav>
                    </Collapse>
            </Container>
        </Navbar>
        </Fragment>
    )
}

export default AppNavbar;