import { Container, Row, Col, Button } from 'reactstrap';
import { STAFFS } from '../staffs'
import InfoStaff from './InfoStaff'
import React, { useState } from 'react';
import { Fragment } from 'react/cjs/react.development';

function List() {
    const [staffId, setStaffId] = useState(null);
    function STAFF() {
        return (
            STAFFS.map((STAFF) => {
                return (
                    <Col className=" list-text" key={STAFF.id} onClick={() => setStaffId(STAFF.id)}>
                        <div className=' bg-light border list-text-content'>
                            <div className='image-staff' style={{ backgroundImage: `url(${STAFF.image})` }} ></div>
                            {STAFF.name}
                        </div>
                    </Col>
                )
            })
        )
    }
    return (
        <Fragment>
            <Container className='list'>
                <div>
                    <h2>Danh sách nhân viên</h2>
                </div>
                <Row xs="2" md="3" lg="6">
                    <STAFF />
                </Row>
            </Container>
            <InfoStaff staffId={staffId} />
        </Fragment>
    )
}
export default List

