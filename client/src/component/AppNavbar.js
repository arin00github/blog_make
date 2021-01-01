import { Fragment, useCallback, useEffect, useState } from "react";
import { Button, Collapse, Container, Nav, Navbar, NavbarToggler, NavItem, NavLink, Form } from "reactstrap";
import { Link } from 'react-router-dom';
import LoginModal from './auth/LoginModal';
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT_REQUEST } from "../redux/types";
import RegisterModal from "./auth/RegisterModal";

const AppNavbar = () =>{
    const [isOpen, setIsOpen] = useState(false)
    const {isAuthenticated, user, userRole} = useSelector(state => state.auth);
    //console.log(userRole, "userRole")

    const dispatch = useDispatch()

    const onLogout = useCallback(()=>{
        dispatch({
            type : LOGOUT_REQUEST
        })
    },[dispatch])

    useEffect(()=>{
        setIsOpen(false)
    },[user])

    const handleToggle = () =>{
        setIsOpen(!isOpen)
    }

    const addPostClick = () =>{

    }

    const authLink = (
        <Fragment>
            <NavLink>
                {
                    userRole === "MainJuin"
                    ? ( <Form className="col mt-2">
                        <Link to="posts" className="btn btn-success px-3 text-white" block onClick={addPostClick}>Add Post</Link>
                    </Form>) 
                    : ""
                }
            </NavLink>
            <NavItem className="d-flex justify-content-center">
                <Form className="col mt-2">
                    {user && user.name 
                    ? (<Link>
                        <Button outline color="light" block><strong>
                            {user ? `Welcome ${user.name} ` : null}</strong></Button>
                    </Link>)
                    : (<Link>
                        <Button outline color="light" block><strong>NO USER</strong></Button>
                    </Link>
                    )
                }
                </Form>
            </NavItem>
            <NavItem>
                <Form className="col">
                    <Link onClick={onLogout} to="#">
                        <Button outline color="light" block
                        className="mt-2"
                        >Logout</Button>
                    </Link>
                </Form>
            </NavItem>
        </Fragment>
    )


    const guestLink = (
        <Fragment>
            <NavItem>
                <RegisterModal/>
            </NavItem>
            <NavItem>
                <LoginModal/>
            </NavItem>
        </Fragment>
    )

    return(
        <Fragment>
        <Navbar color="dark" dark expand="lg" className="sticky-top">
            <Container>
                <Link to="/" className="text-white">arin's blog</Link>
                <NavbarToggler onClick={handleToggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto d-flex justify-content-around">
                        {isAuthenticated ? (authLink) : (guestLink)}
                        </Nav>
                    </Collapse>
            </Container>
        </Navbar>
        </Fragment>
    )
}

export default AppNavbar;