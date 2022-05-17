import { Container, Row, Col } from 'reactstrap';
import { STAFFS } from '../staffs'
import React from 'react';
import { Fragment } from 'react/cjs/react.development';
import { Link } from 'react-router-dom';

function List({staffs}) {
    let newstaffs = [...staffs];
    return (
        <Fragment>
            <Container className='list'>
                <Row xs="2" md="3" lg="6">
                    {newstaffs.map(STAFF => (
                        <Col className=" list-text"
                            key={STAFF.id}
                        >
                            <Link to={`/nhan-vien/${STAFF.id}`}>
                                <div className=' bg-light border list-text-content'>
                                    <div className='image-staff' style={{ backgroundImage: `url(${STAFF.image})` }} ></div>

                                    {STAFF.name}
                                </div>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Fragment>
    )
}

export default List

