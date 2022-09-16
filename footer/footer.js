import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import style from '../styles/Footer.module.css';


function Footer() {
    return(
        <footer className={style.footer}>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                        <h4 className={style.header}>Sales Channels</h4>
                        <div className={style.p}>
                            <p>Online Store</p>
                            <p>Facebook</p>
                            <p>Facebook live</p>
                            <p>Instagram</p>
                            <p>Whatsapp</p>
                            <p>Telegram</p>
                            <p>wechat</p>
                            <p>Shopee</p>
                        </div>
                        
                    </Col>
                    <Col xs lg="2" className={style.p2}>
                        <div className={style.p}>
                            <p>Lazada</p>
                            <p>Google Shopping</p>
                            <p>Point of Sales</p>
                            <p>Referral Marketing</p>
                            <p>B2B Wholesale Portal</p>
                            <p>EasyStore Mobile App</p>
                        </div>
                    </Col>
                    <Col xs lg="2">
                        <h4 className={style.header}>Products</h4>
                        <div className={style.p}>
                            <p>Plans & Pricing</p>
                            <p>Sales Channels</p>
                            <p>Marketing</p>
                            <p>Order Processing</p>
                            <p>Product Management</p>
                            <p>Customer Relations</p>
                            <p>Business Analytics</p>
                            <p>App Integration</p>
                        </div>
                    </Col>
                    <Col xs lg="2" className={style.p2}>
                        <div className={style.p}>
                            <p>Payments Integration</p>
                            <p>Logistics Integration</p>
                        </div>
                        
                    </Col>
                    <Col xs lg="2">
                        <h4 className={style.header}>Resources</h4>
                        <div className={style.p}>
                            <p>EasyStore Experts</p>
                            <p>Blog</p>
                            <p>Brand Guidelines</p>
                            <p>Help Center</p>
                            <p>Server Status</p>
                        </div>
                    </Col>

                    <Col xs lg="2">
                        <h4 className={style.header}>EasyStore</h4>
                        <div className={style.p}>
                            <p>About Us</p>
                            <p>Our Customers</p>
                            <p>
                                Careers 
                                <span className={style.label}>We're Hiring</span>
                            </p>
                            <p>Partner Program</p>
                            <p>Affiliate Program</p>
                            <p>App Developers</p>
                            <p>Theme Designers</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className={style.footer_social}>
                <img
                    src="/icon.png"
                    className={style.footer_img}
                />
                <div className={style.footer_app}>
                    <img 
                        src="/google_play.svg"
                        width= "auto"
                        height= "100"
                    />
                    <img 
                        src="/app_store.png"
                        width= "auto"
                        height= "75"
                    />
                    <img 
                        src="/app_gallery.png"
                        width= "auto"
                        height= "37"
                    />
                </div>
            </div>

            <br />

            <div className={style.footer_last}>
                <p className="fs-6">© 2022 EasyStore Commerce Sdn Bhd (1020551-M). All Rights Reserved.</p>
                <ul className={style.footer_last_text}>
                    <p className={style.footer_last_p}>Server Status</p>
                    <p className={style.footer_last_p}>Terms of Service</p>
                    <p className={style.footer_last_p}>Privacy</p>
                    <p className={style.footer_last_p}>
                        <img 
                            src="/my.png"
                            height="15px"
                            width="25px"
                            className="pe-2"
                        />
                         Malaysia (English)
                    </p>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;