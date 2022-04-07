import { Container, Row, Col, Button } from 'reactstrap';
import './App.css'
import { STAFFS } from './staffs'
import InfoStaff from './InfoStaff'
import React, { useState } from 'react';
import { Fragment } from 'react/cjs/react.development';

function List() {
    const [staffId, setStaffId] = useState(null);
    const [col, setCol] = useState(3);
    return (
        <Fragment>
            <Container id='list'>
                <div className='container button-group'>
                    <Button color="primary" outline onClick={() => setCol(2)}>
                        2  Cột
                    </Button>
                    <Button color="primary" outline onClick={() => setCol(3)}>
                        3 Cột
                    </Button>
                    <Button color="primary" outline onClick={() => setCol(6)}>
                        6  Cột
                    </Button>
                </div>
                <Row xs="1" md={col} lg={col}>
                    {STAFFS.map(STAFF => (
                        <Col className="bg-light border list-text" key={STAFF.id} onClick={() => setStaffId(STAFF.id)}>
                            {STAFF.name}
                        </Col>
                    ))}
                </Row>
            </Container>
            <InfoStaff staffId={staffId} />
        </Fragment>
    )
}
export default List

