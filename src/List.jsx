import { Container, Row, Col } from 'reactstrap';
import './App.css'
import { STAFFS } from './staffs'
function ListConstruc(STAFF) {
    return (
        <Col className="bg-light border list-text" key={STAFF.id}>
            {STAFF.name}
        </Col>
    )
}
function List() {
    console.log(STAFFS.length)
    return (
        <Container id='list'>
            <Row xs="1" md='2' lg='3'>
                {STAFFS.map(ListConstruc)}
            </Row>
        </Container>
    )
}

export default List

