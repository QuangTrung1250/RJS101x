import { Container, Row, Col } from 'reactstrap';
import { DEPARTMENTS } from '../staffs'
import { Fragment } from 'react/cjs/react.development';

function Department() {
    return (
        <Fragment>
            <Container className='list'>
                <div>
                    <h2>Phòng ban</h2>
                </div>
                <Row xs="1" md="2" lg="3">
                {DEPARTMENTS.map(DEPARTMENT => (
                        <Col className=" list-text" key={DEPARTMENT.id} >
                        <div className=' bg-light border list-text-content'>
                            <h2><i>{DEPARTMENT.name}</i></h2>
                            <p>Số lượng nhân viên: {DEPARTMENT.numberOfStaff}</p>
                        </div>
                    </Col>
                    ))}
                </Row>
            </Container>
        </Fragment>
    )
}
export default Department

