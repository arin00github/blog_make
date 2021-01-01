

import { Badge, Button, Card, CardImg, CardTitle, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMouse} from '@fortawesome/free-solid-svg-icons'
import { Fragment } from 'react';
  

const PostCardOne = ({posts}) => {



    return(
        <Fragment>
            {Array.isArray(posts) 
            ? posts.map(({_id, title, comments, views, fileUrl})=>{
                return(
                    <div key={_id} className="col-md-4">
                        <Link to={`/post/${_id}`} className="text-dark">
                            <Card>
                                <CardImg top alt="image" src={fileUrl}/>
                                <CardTitle className="d-flex justify-content-between p-2">
                                    <span className="p-2 text-truncate">{title}</span>
                                    <span>
                                        <FontAwesomeIcon icon={faMouse}/>
                                        &nbsp;
                                        <span>{views}</span>
                                    </span>
                                </CardTitle>
                                <Row className="m-1">
                                    <Button color="primary" className="p-1 btn-block">More
                                    <Badge color="red">{comments.length}</Badge>
                                    </Button>
                                </Row>

                            </Card>
                        </Link>
                    </div>
                )
            }): null}
        </Fragment>
    )
}

export default PostCardOne;