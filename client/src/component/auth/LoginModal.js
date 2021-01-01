import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ModalBody, ModalHeader, NavLink, Modal, Alert, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { CLEAR_ERROR_REQUEST, LOGIN_REQUEST } from '../../redux/types';


const LoginModal = ()=>{
    const [modal, setModal] = useState(false)
    const [localMsg, setLocalMsg] = useState("")
    const [form, setValue] = useState({
        email : "",
        password : ""
    })

    const dispatch = useDispatch();
    const {errorMsg} = useSelector((state)=>state.auth);
    
    useEffect(()=>{
       try{
        setLocalMsg(errorMsg)
       }catch(err){
        console.log(err)
       }
    },[errorMsg])

    const handleToggle = () =>{
        dispatch({
            type : CLEAR_ERROR_REQUEST
        })
        setModal(!modal)
    }

    const onChange = (e) =>{
        setValue({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = (e) =>{
        e.preventDefault()
        const {email, password} = form
        const user = {email, password}
        
        dispatch({
            type : LOGIN_REQUEST,
            payload : user
        })
    }

    return(
        <div>
        <NavLink onClick={handleToggle} href="#">
            Login
        </NavLink>
        <Modal isOpen={modal} toggle={handleToggle}>
            <ModalHeader toggle={handleToggle}>Login</ModalHeader>
            <ModalBody>
                {localMsg ? <Alert>{localMsg}</Alert> : null}
                <Form onSubmit={onSubmit}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            type = "email"
                            name = "email"
                            id = "email"
                            placeholder = "email"
                            onChange={onChange}
                        ></Input>
                        <Label for="password">Password</Label>
                        <Input
                            type = "password"
                            name = "password"
                            id = "password"
                            placeholder = "password"
                            onChange={onChange}
                        ></Input>
                        <Button color="dark" className="mt-2">
                            login
                        </Button>
                    </FormGroup>
                </Form>
            </ModalBody>
        </Modal>
        </div>
        

    )
}


export default LoginModal;