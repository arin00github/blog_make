import { Fragment } from 'react';
import { Row, Spinner } from 'reactstrap';


export const GrowingSpinner = (
    <Fragment>
        <Row className="d-flex justify-content-center">
            <Spinner style={{width:"2rem", height:"2rem"}} type="grow" color="dark"/>
        </Row>
    </Fragment>
)