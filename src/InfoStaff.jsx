import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import './App.css'
import { STAFFS } from './staffs'
import dateFormat from "dateformat";



function ListConstrucInfo(STAFF) {
    return (
        <Col className="bg-light border list-text" key={STAFF.id}>
            {STAFF.name}
        </Col>
    )
}
function InfoStaff() {
    const birth = STAFFS[0].doB ;

    return (
        <div>
  <Card
  >
    <CardBody className='container'>
      <CardTitle tag="h5">
        Họ và tên: {STAFFS[0].name}
      </CardTitle>
      <CardText>
      Ngày sinh: {dateFormat(STAFFS[0].doB, "dd/mm/yyyy")}
      </CardText>        
      <CardText>
        Ngày vào công ty: {dateFormat(STAFFS[0].startDate, "dd/mm/yyyy")}
      </CardText>
      <CardText>
        Phòng ban: {STAFFS[0].department.name}
      </CardText>
      <CardText>
        Số ngày nghỉ còn lại: {STAFFS[0].annualLeave}
      </CardText>
      <CardText>
        Số ngày đã làm thêm: {STAFFS[0].overTime}
      </CardText>
    </CardBody>
  </Card>
</div>
    )
}
export default InfoStaff

