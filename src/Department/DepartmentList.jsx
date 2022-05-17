import { Card, CardBody, CardTitle, CardText, Row, Col, Container } from 'reactstrap';
import { STAFFS, DEPARTMENTS } from '../staffs'
import { Link } from 'react-router-dom';
import React from 'react';
import { useParams } from 'react-router-dom';

function DepartmentList({ staffs }) {
  const {room} = useParams();
  let newstaffs = [...staffs];

  const staffss =   newstaffs.filter(STAFF => STAFF.department.name === room);
 
    return (
      <div className='container list'>
        <h6><i> <Link to="/Department" className='link-staff'>Phòng ban </Link> / 
          <Link to={`/Department/${room}`} className='link-staff'>   {room} </Link>
          </i></h6>
                    <Container >
                <Row xs="2" md="3" lg="6">
                    {staffss.map(STAFF => (
                        <Col className=" list-text"
                            key={STAFF.id}                    
                            >
                            <Link to={`/nhan-vien/${STAFF.id}`}>
                                <div className=' bg-light border list-text-content'>
                                    <div className='image-staff' style={{ backgroundImage: `url(${STAFF.image})` }} ></div>
                                    {STAFF.name}
                                </div>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
      </div>
    )
}


export default DepartmentList

