import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import './App.css'
import { STAFFS } from './staffs'
import dateFormat from "dateformat";

function InfoStaff({staffId}) {
  console.log(staffId)
  if (staffId == null) {
    return (
      <div>
<Card
>
  <CardBody className='container'>
    <CardTitle tag="h5">
      Bấm vào tên nhân viên để xem thông tin:
    </CardTitle>
    </CardBody>
  </Card>
</div> )
  }else{
    return (
        <div>
  <Card
  >
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
</div>
    )
  }
}
export default InfoStaff

