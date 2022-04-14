import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import { Routes, Route, Link  } from 'react-router-dom';
import List from './List'
import { Fragment } from 'react/cjs/react.development';
import Department from '../Department/Department'
import Payroll from '../Payroll/Payroll'
import InfoStaff from './InfoStaff'
import Footer from './Footer';

function HomePage() {
   return (
     <Fragment>
  <Nav pills className='nav-menu-fix'>
    <NavItem>
      <NavLink href="/">
         <img src='src/assets/images/logo.png' alt='logo' className='nav-logo' />
      </NavLink>
    </NavItem>
    <Link to="/" className="nav-menu">Nhân viên</Link>
      <Link to="/Department" className="nav-menu">Phòng ban</Link>
      <Link to="/Payroll" className="nav-menu">Bảng lương</Link>
    </Nav>

    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/Department" element={<Department />} /> 
      <Route path="/Payroll" element={<Payroll />} /> 
      <Route path="/InfoStaff/" element={<InfoStaff staffId= {0}/>} />
    </Routes>
<Footer />
    </Fragment>
  )
}
export default HomePage
