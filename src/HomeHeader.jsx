import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css'
function HomeHeader() {
   return (
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
    </Navbar>
  )
}
export default HomeHeader
