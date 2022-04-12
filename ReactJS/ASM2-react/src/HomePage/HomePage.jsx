import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import { Routes, Route, Link  } from 'react-router-dom';
import List from './List'
import { Fragment } from 'react/cjs/react.development';
// // import { Department } from '../Department/Department'
// import { Payroll } from '../Payroll/Payroll'

function HomePage() {
   return (
     <Fragment>
  <Navbar
    color="primary"
    dark
    expand
    fixed="top"
    light
  >
    <NavbarBrand href="/" className='text-center nav-header'>
      Ứng dụng quản lý nhân sự v1.0.0
    </NavbarBrand>
    <Nav className="ml-auto" navbar>
              <NavItem>

                <Link to="/">Nhaanvien</Link>

              </NavItem>
              <NavItem>

              <Link to="/Department">Department</Link>

              </NavItem>
              <NavItem>

              <Link to="/Payroll">Payroll</Link>

              </NavItem>
              </Nav>
    </Navbar>
    <Routes>
      <Route path="/" element={<List />} />
      {/* <Route path="/Department" element={<Department />} /> */}
      {/* <Route path="/Payroll" element={<Payroll />} /> */}
    </Routes>

    </Fragment>
  )
}
export default HomePage
