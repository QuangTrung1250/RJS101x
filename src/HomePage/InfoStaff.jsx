import { Card, CardBody, CardTitle, CardText, Row } from 'reactstrap';
import { STAFFS } from '../staffs'
import dateFormat from "dateformat";
import { Link } from 'react-router-dom';
import React from 'react';
import { useParams } from 'react-router-dom';

function InfoStaff({staffs}) {
  const {staffId} = useParams();
  let newstaffs = [...staffs];

    return (

      <div className='container list'>
        <h6><i> <Link to="/" className='link-staff'>Nhân viên</Link> /
          <Link to={`/nhan-vien/${staffId}`} className='link-staff'>  {newstaffs[staffId].name} </Link>
          </i></h6>
        <Row>
          <div className='col-xs-12 col-md-4 col-lg-3 '>
            <img src={newstaffs[staffId].image} alt="infoStaff" className='staffImage' />
          </div>
          <Card className='col-xs-12 col-md-8 col-lg-9'>
            <CardBody className='container'>
              <CardTitle tag="h5">
                Họ và tên: {newstaffs[staffId].name}
              </CardTitle>
              <CardText>
                Ngày sinh: {dateFormat(newstaffs[staffId].doB, "dd/mm/yyyy")}
              </CardText>
              <CardText>
                Ngày vào công ty: {dateFormat(newstaffs[staffId].startDate, "dd/mm/yyyy")}
              </CardText>
              <CardText>
                Phòng ban: {newstaffs[staffId].department.name}
              </CardText>
              <CardText>
                Số ngày nghỉ còn lại: {newstaffs[staffId].annualLeave}
              </CardText>
              <CardText>
                Số ngày đã làm thêm: {newstaffs[staffId].overTime}
              </CardText>
            </CardBody>
          </Card>
        </Row>
      </div>
    )
  
}

export default InfoStaff

