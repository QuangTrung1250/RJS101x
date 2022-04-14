import { Container, Row, Col } from 'reactstrap';
import { STAFFS } from '../staffs'
import { Fragment } from 'react/cjs/react.development';

function Payroll() {

    return (
        <Fragment>
            <Container className='list'>
                <div>
                    <h2>Bảng lương</h2>
                </div>
                <Row xs="1" md="2" lg="3">
                    {STAFFS.map(STAFF => (
                        <Col className=" list-text" key={STAFFS.id} >
                            <div className=' bg-light border list-text-content'>
                                <h3><i>{STAFF.name}</i></h3>
                                <p><i>Mã nhân viên: {STAFF.id}</i></p>
                                <p><i>Hệ số lương: {STAFF.salaryScale}</i></p>
                                <p><i>Số giờ làm thêm: {STAFF.overTime}</i></p>
                                <div className=' bg-light border'>
                                    Lương: {Math.floor(STAFF.salaryScale * 3000000 + STAFF.overTime / 8 * 200000)}
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Fragment>
    )
}
export default Payroll

