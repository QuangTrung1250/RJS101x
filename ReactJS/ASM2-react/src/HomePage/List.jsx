import { Container, Row, Col, Button } from 'reactstrap';
import { STAFFS } from '../staffs'
import InfoStaff from './InfoStaff'
import React, { useState } from 'react';
import { Fragment } from 'react/cjs/react.development';
import { Link } from 'react-router-dom';

function List() {
    const [staffId, setStaffId] = useState(null);
    const [linkStaffId, setLinkStaffId] = useState('');

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
                            onClick={() => { setStaffId(STAFF.id) }}
                            onMouseOver={() => setLinkStaffId('/nhan-vien/' + STAFF.name)}>
                            <Link to={linkStaffId}>
                                <div className=' bg-light border list-text-content'>
                                    <div className='image-staff' style={{ backgroundImage: `url(${STAFF.image})` }} ></div>
                                    {STAFF.name}
                                </div>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
            <InfoStaff staffId={staffId} linkStaffId={linkStaffId} />
        </Fragment>
    )
}
export default List

