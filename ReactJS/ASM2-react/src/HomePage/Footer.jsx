import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEnvelope, faFax, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <div id="footer">
            <div className="container">
                <div className="row justify-content-center footer">
                    <div className=" col-xs-12 col-md-4 ">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <FontAwesomeIcon icon={faPhone} />: +84 1234 5678<br />
                            <FontAwesomeIcon icon={faFax} />: +84 8765 4321<br />
                            <FontAwesomeIcon icon={faEnvelope} />: trungdqfx15226@funix.edu.vn
                        </address>
                    </div>
                    <div className="col-xs-12 col-md-8 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-google" href="http://google.com/+"><FontAwesomeIcon icon={faGoogle} /></a>
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><FontAwesomeIcon icon={faFacebook} /></a>
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><FontAwesomeIcon icon={faLinkedin} /></a>
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a className="btn btn-social-icon btn-youtube" href="http://youtube.com/"><FontAwesomeIcon icon={faYoutube} /></a>
                            <a className="btn btn-social-icon btn-mail" to="mailto:"><FontAwesomeIcon icon={faEnvelope} /></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="footer-copyright ">
                        <p>© Copyright 2022 trungdqfx15226@funix.edu.vn</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Footer;
