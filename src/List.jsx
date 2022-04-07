import { Container, Row, Col, Button } from 'reactstrap';
import './App.css'
import { STAFFS } from './staffs'
import InfoStaff from './InfoStaff'
import React, { useState } from 'react';

function List() {
    const [staffId, setStaffId] = useState(null);
    const [col, setCol ] = useState(3);

  
    return (
        <Container id='list'>
            <div className='container'>
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
<div ></div>
            <Row xs={col} md={col} lg= {col}>
                {STAFFS.map(STAFF => (
                    <Col className="bg-light border list-text" key={STAFF.id} onClick={() => setStaffId(STAFF.id)}>
                        {STAFF.name}
                    </Col>
                ))}
            </Row>
            <InfoStaff staffId={staffId} />
        </Container>

    )
}

export default List

