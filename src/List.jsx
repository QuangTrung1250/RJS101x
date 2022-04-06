import {Container, Row, Col } from 'reactstrap';
import './App.css'
import {STAFFS} from './staffs'
function List() {
    console.log(STAFFS.length)
   return (
    <Container id ='list'>
  
  <Row xs="1" md='2' lg='3'> 
   
      {STAFFS.map(STAFFS => {
          return (
           <Col className="bg-light border list-text" key={STAFFS.id}>
          {STAFFS.name}
          </Col>
          )})} 
  
    </Row>
    </Container>
  )
}
export default List

