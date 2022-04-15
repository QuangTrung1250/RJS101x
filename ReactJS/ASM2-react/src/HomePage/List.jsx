import { Container, Row, Col } from 'reactstrap';
import { STAFFS } from '../staffs'
import React, { useState } from 'react';
import { Fragment } from 'react/cjs/react.development';
import { Link } from 'react-router-dom';

function List() {
    const [staffId, setStaffId] = useState('');
    return (
        <Fragment>
            <Container className='list'>
                <div>
                    <h2>Danh sách nhân viên</h2>
                </div>
                <Row xs="2" md="3" lg="6">
                    {STAFFS.map(STAFF => (
                        <Col className=" list-text"
                            key={STAFF.id}
                            onMouseOver={() => setStaffId(STAFF.id) }
                            >
                            <Link to={`nhan-vien/${staffId}`}>
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

