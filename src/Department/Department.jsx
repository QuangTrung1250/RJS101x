import { Container, Row, Col } from 'reactstrap';
import { DEPARTMENTS } from '../staffs'
import { Fragment } from 'react/cjs/react.development';
import { Link } from 'react-router-dom';

function Department() {

       return (
        <Fragment>
            <Container className='list'>
                <Row xs="1" md="2" lg="3">
                {DEPARTMENTS.map(DEPARTMENT => (
                    <Link to={`/Department/${DEPARTMENT.name}`} key={DEPARTMENT.id} className="list-payroll">
                        <Col className=" list-text" >
                        <div className=' bg-light border list-text-content'>
                            <h2><i>{DEPARTMENT.name}</i></h2>
                            <p>Số lượng nhân viên: {DEPARTMENT.numberOfStaff}</p>
                        </div>
                    </Col>
                    </Link>
                    ))}
                </Row>
            </Container>
        </Fragment>
    )
}
export default Department

