import { Container, Row, Col } from 'reactstrap';
import { STAFFS } from '../staffs'
import { Fragment } from 'react/cjs/react.development';
import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

for (let i = 0; i < STAFFS.length; i++) {
    STAFFS[i].salary = Math.floor(STAFFS[i].salaryScale * 3000000 + STAFFS[i].overTime / 8 * 200000)
}

function Payroll() {
    let newStaff = [...STAFFS];
    const tabs = ['name', 'salaryScale', 'annualLeave', 'overTime', 'salary'];
    const sortList = {
        'name': "Theo tên",
        'salaryScale': "Theo hệ số lương",
        'annualLeave': "Theo nghỉ phép năm",
        'overTime': "Theo thời gian làm thêm",
        'salary': "Theo lương"
    };
    const [type, setType] = useState('name')
    const aaaa = newStaff.sort((a, b) => {
        if (a[type] < b[type]) return -1;
        if (a[type] > b[type]) return 1;
        return 0;
    })

    return (
        <Fragment>
            <Container className='list'>
                <div>
                    <h2>Bảng lương</h2>
                    <Dropdown >
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Sắp xếp
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {tabs.map((tab) => (
                                <Dropdown.Item key={tab} color="primary" outline
                                    style={type === tab ? { backgroundColor: '#007bff', color: 'white' } : {}}
                                    onClick={() =>               
                                    setType(tab)
                                    }>
                                    {sortList[tab]}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <Row xs="1" md="2" lg="3">
                    {newStaff.map(STAFF => (
                        <Col className=" list-text" key={STAFF.id} >
                            <Link to={`/nhan-vien/${STAFF.id}`} className="list-payroll">
                            <div className=' bg-light border list-text-content'>
                                <h3><i>{STAFF.name}</i></h3>
                                <p><i>Mã nhân viên: {STAFF.id}</i></p>
                                <p><i>Hệ số lương: {STAFF.salaryScale}</i></p>
                                <p><i>Số giờ làm thêm: {STAFF.overTime}</i></p>
                                <div className=' bg-light border'>
                                    Lương: {STAFF.salary}
                                </div>
                            </div>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Fragment>
    )
}
export default Payroll


