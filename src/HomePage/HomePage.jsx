import { Routes, Route } from 'react-router-dom';
import List from './List'
import { Fragment } from 'react/cjs/react.development';
import Department from '../Department/Department'
import Payroll from '../Payroll/Payroll'
import InfoStaff from './InfoStaff'
import Footer from './Footer';
import NotFound from './NotFound'
import DepartmentList from '../Department/DepartmentList'
import Search from './Search';
import Header from './Header';
import {Modal, Button, Form} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { STAFFS, DEPARTMENTS } from '../staffs';
import '../assets/CSS/App.css'


function HomePage() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [staffs, setStaffs] = useState(STAFFS);

  const newStaff = {
    id: 0,
    name: "",
    doB: "",
    salaryScale: 1,
    startDate: "",
    department: DEPARTMENTS[0],
    annualLeave: 0,
    overTime: 0,
    image: '/src/assets/images/alberto.png',
  };

  const [staffform, setStaffform] = useState(newStaff);
  const [errorForm, setErrorForm] = useState({});
  const [isSubmit, setIsSbumit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStaffform({ ...staffform, id: staffs.length , [name]: value });
 

  }
  const handleChange2  =(e) => {
    const { name, value } = e.target;
    console.log(value)
    const xxx = DEPARTMENTS.filter(x => x.id === value)

    setStaffform({ ...staffform, department: xxx[0] });
  }


  const formSubmit = (e) => {
    e.preventDefault();
    setErrorForm(validate(staffform))
    setIsSbumit(true);
  
  }
 
  useEffect(() => {
      if (Object.keys(errorForm).length === 0 && isSubmit) {  
        setIsSbumit(false);
        setShow(false);
        
        setStaffs([...staffs, staffform]);
        setStaffform(newStaff);
      }
  }, [errorForm])

  const validate = (values) => {
    let isError = {};
    if (!values.name) {
      isError.name = "Bạn cần nhập tên";
    }else if (values.name.length < 3) {
      isError.name = "Yêu cầu nhiền hơn 2 ký tự";
    }else if (values.name.length > 30) {
      isError.name = "Yêu cầu ít hơn 30 ký tự";
    }
    if (!values.doB) {
      isError.doB = "Bạn cần chọn ngày sinh";
    }
    if (!values.startDate) {
      isError.startDate = "Bạn cần chọn ngày làm việc";
    }
    return isError;
  }

  return (
    <Fragment>
      <Header />
      <div style={{
                  marginTop: '70px',
                  display: 'flex',
                  justifyContent: 'right',
                 }}>
        <Button variant="primary" onClick={handleShow}>
        Thêm nhân viên
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm nhân viên</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={formSubmit}>
          {/* <pre>
            {JSON.stringify(staffform, null, 2)}
          </pre>
          <pre>
            {JSON.stringify(errorForm, null, 2)}
          </pre> */}
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Tên</Form.Label>
    <Form.Control type="text" placeholder="Nguyễn Văn A" name="name" value={staffform.name} onChange={handleChange}/>
    <Form.Text className="text-muted fail-form ">
      {errorForm.name}
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Ngày sinh</Form.Label>
    <Form.Control type="date" placeholder="12/05/1995" name="doB" value={staffform.doB} onChange={handleChange}/>
    <Form.Text className="text-muted fail-form ">
      {errorForm.doB}
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Ngày vào công ty</Form.Label>
    <Form.Control type="date" placeholder="14/02/2022" name="startDate" value={staffform.startDate} onChange={handleChange}/>
    <Form.Text className="text-muted fail-form ">
      {errorForm.startDate}
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Phòng ban</Form.Label>
   
    <Form.Select aria-label="Default select example" onChange={handleChange2} >
      {DEPARTMENTS.map((departments) => (
        <option key={departments.id} value={departments.id}  >  {departments.name}</option>
      ))}
    </Form.Select>
 
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Hệ số lương</Form.Label>
    <Form.Control type="number" placeholder="1.0 => 3.0" name="salaryScale" value={staffform.salaryScale} onChange={handleChange} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Số ngày nghỉ còn lại</Form.Label>
    <Form.Control type="number" placeholder="0"  name="annualLeave" value={staffform.annualLeave} onChange={handleChange} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Số ngày đã làm thêm</Form.Label>
    <Form.Control type="number" placeholder="0" name="overTime" value={staffform.overTime} onChange={handleChange}/>
  </Form.Group>

  <Button variant="primary" type="submit">
    Thêm
  </Button>
</Form>
        </Modal.Body>
      
      </Modal>
                 </div>
      <Routes>
        <Route path="/" element={<List staffs = {staffs}/>} />
        <Route path="/Search/:input" element={<Search staffs = {staffs}/>} />
        <Route path="/Department" element={<Department />} />
        <Route path="/Payroll" element={<Payroll staffs = {staffs}/>} />
        <Route path="/nhan-vien/:staffId" element={<InfoStaff staffs = {staffs}/>} />
        <Route path="/Department/:room" element={<DepartmentList staffs = {staffs}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Fragment>
  )
}
export default HomePage
