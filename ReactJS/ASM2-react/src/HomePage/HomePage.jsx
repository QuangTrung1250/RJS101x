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


function HomePage() {

  return (
    <Fragment>
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
