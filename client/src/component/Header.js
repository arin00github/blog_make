import { Col, Row } from "reactstrap"

const Header = () =>{
    return(
        <header id="header" className="mb-3">
            <Row>
                <Col md="6" sm="auto" className="text-center m-auto">
                <h1>My Developer Blog</h1>
                <p>초보 개발자의 작업 블로그입니다</p>
                </Col>
            </Row>
        </header>
    )
}

export default Header;