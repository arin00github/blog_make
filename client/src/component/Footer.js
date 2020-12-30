import {Col, Row} from 'reactstrap';

const Footer = () =>{
    const thisYear = () =>{
        const year = new Date().getFullYear()
        return year
    }
    return(
        <footer id="footer" className="text-center m-auto">
            <Row>
                <Col>
                    <p>Copyrigth <span>{thisYear()}</span></p>
                </Col>
            </Row>
        </footer>
    )
}

export default Footer;