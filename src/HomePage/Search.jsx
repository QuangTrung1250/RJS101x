import { Container, Row, Col } from 'reactstrap';
import { STAFFS } from '../staffs'
import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';



function Search({staffs}) {
    const { input } = useParams();
    let newStaffs = [...staffs];
    function searchByName(searchTerm) {
        return newStaffs.filter(STAFF => {
            return STAFF.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
    }

    
    if (searchByName(input).length === 0) {
        return (
            <div className="container not-found-page">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>
                            Oops!</h1>
                        <div className="error-details">
                        Không tìm thấy kết quả
                        </div>
                        <div className="error-actions">
                            <a href="/" className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-home"></span>
                               Trang chủ </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }else{
        return (
            <Container className='list'>
            <div>
                <h2>Kết quả tìm kiếm</h2>
            </div>
            <Row xs="2" md="3" lg="6">
                {searchByName(input).map(STAFF => (
                    <Col className=" list-text"
                        key={STAFF.id}
                    >
                        <Link to={`/nhan-vien/${STAFF.id}`}>
                            <div className=' bg-light border list-text-content'>
                                <div className='image-staff' style={{ backgroundImage: `url(${STAFF.image})` }} ></div>

                                {STAFF.name}
                            </div>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
            )
    }

           

    
}

export default Search

