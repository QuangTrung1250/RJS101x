import{Navbar, Container, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faMoneyBill1Wave, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import AddStaff from './AddStaff';

function Header() {
  const [input, setInput] = useState('');
  return (
  <>
    <Navbar bg="blue" expand="lg" className='nav-menu-fix'>
    <Container fluid>
      <Navbar.Brand href="/" className='nav-logo' style={{ backgroundImage: `url(/src/assets/images/logo.png)` }} >            <img src='src/assets/images/logo.png' alt='logo' className='nav-logo' /></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '200px' }}
          navbarScroll
        >
          <Nav.Link> <Link to="/" className="nav-menu"><FontAwesomeIcon icon={faUser} className="icon"/>Nhân viên</Link></Nav.Link>
          <Nav.Link><Link to="/Department" className="nav-menu"><FontAwesomeIcon icon={faAddressCard} className="icon" />Phòng ban</Link></Nav.Link>
          <Nav.Link>    <Link to="/Payroll" className="nav-menu"><FontAwesomeIcon icon={faMoneyBill1Wave} className="icon" />Bảng lương</Link></Nav.Link>

        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={input} onInput={e => setInput(e.target.value)}
          />
          <Button variant="primary"><Link to= {`/Search/${input}`} className="nav-menu" >Search </Link></Button>
        </Form>
      </Navbar.Collapse>
    </Container>
    
  </Navbar>
       
            </>

  );
}
export default Header;
