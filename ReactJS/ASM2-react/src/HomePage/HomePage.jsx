import { Button, Input, Nav, NavItem, NavLink } from 'reactstrap';
import { Routes, Route, Link } from 'react-router-dom';
import List from './List'
import { Fragment } from 'react/cjs/react.development';
import Department from '../Department/Department'
import Payroll from '../Payroll/Payroll'
import InfoStaff from './InfoStaff'
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faMoneyBill1Wave, faUser } from '@fortawesome/free-solid-svg-icons';
import NotFound from './NotFound'
import DepartmentList from '../Department/DepartmentList'
import { useState } from 'react';
import Search from './Search';
import Header from './Header';


function HomePage() {
  const [input, setInput] = useState('');

 
  return (
    <Fragment>
      <Nav pills className='nav-menu-fix'>
        <NavItem>
          <NavLink href="/">
            <img src='src/assets/images/logo.png' alt='logo' className='nav-logo' />
          </NavLink>
        </NavItem>
        <Link to="/" className="nav-menu"><FontAwesomeIcon icon={faUser} className="icon"/>Nhân viên</Link>
        <Link to="/Department" className="nav-menu"><FontAwesomeIcon icon={faAddressCard} className="icon" />Phòng ban</Link>
        <Link to="/Payroll" className="nav-menu"><FontAwesomeIcon icon={faMoneyBill1Wave} className="icon" />Bảng lương</Link>
          <Link to= {`/Search/${input}`} className="nav-menu" onClick={() => setInput('')}>Tìm kiếm </Link>
        <Input value={input} onInput={e => setInput(e.target.value)} className="nav-menu"/>

      </Nav>
      <Header />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/Search/:input" element={<Search />} />
        <Route path="/Department" element={<Department />} />
        <Route path="/Payroll" element={<Payroll />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/nhan-vien/:staffId" element={<InfoStaff />} />
        <Route path="/Department/:room" element={<DepartmentList />} />
      </Routes>
      <Footer />
    </Fragment>
  )
}
export default HomePage
