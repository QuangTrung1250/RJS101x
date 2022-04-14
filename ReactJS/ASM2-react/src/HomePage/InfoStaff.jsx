import { Card, CardBody, CardTitle, CardText, Row } from 'reactstrap';
import { STAFFS } from '../staffs'
import dateFormat from "dateformat";
import { Link } from 'react-router-dom';

function InfoStaff({ staffId }) {
  console.log(staffId)
  const linkStaff = '/nhân-viên/' + staffId;
  console.log(linkStaff)
  if (staffId == null) {
    return (
      <div>
        <Card>
          <CardBody className='container'>
            <CardTitle tag="h5">
              Bấm vào tên nhân viên để xem thông tin:
            </CardTitle>
          </CardBody>
        </Card>
      </div>)
  } else {
    
    return (
      <div className='container list'>
        <h6><i> <Link to="/" className='link-staff'>Nhân viên</Link> /  <Link to={linkStaff} className='link-staff'>{STAFFS[staffId].name} </Link></i></h6>
        <Row>
          <div className='col-xs-12 col-md-4 col-lg-3 '>
            <img src={STAFFS[staffId].image} alt="infoStaff" className='staffImage'/>
          </div>
        <Card className='col-xs-12 col-md-8 col-lg-9'>
          <CardBody className='container'>
            <CardTitle tag="h5">
              Họ và tên: {STAFFS[staffId].name}
            </CardTitle>
            <CardText>
              Ngày sinh: {dateFormat(STAFFS[staffId].doB, "dd/mm/yyyy")}
            </CardText>
            <CardText>
              Ngày vào công ty: {dateFormat(STAFFS[staffId].startDate, "dd/mm/yyyy")}
            </CardText>
            <CardText>
              Phòng ban: {STAFFS[staffId].department.name}
            </CardText>
            <CardText>
              Số ngày nghỉ còn lại: {STAFFS[staffId].annualLeave}
            </CardText>
            <CardText>
              Số ngày đã làm thêm: {STAFFS[staffId].overTime}
            </CardText>
          </CardBody>
        </Card>
        </Row>
      </div>
    )
  }
}
export default InfoStaff

