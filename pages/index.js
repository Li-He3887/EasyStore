import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../navigation/Nav';
import Footer from '../footer/footer';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* first page */}
      <div className={styles.nav}>
        <Navigation />
      </div>

      <div className={styles.first}>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg={5}>
              <Stack direction='horizontal'>
                <img src="bag.png"  />
                <div className={styles.shop}>Shopping App</div>
              </Stack>
                <p className="fs-1 fw-bold">Convert your store into a mobile app</p>
                <h4 className="text-start">Shopping App - an app drives more conversions and repeat purchases for your business</h4>
                <Button size="lg" className={styles.btn}>Explore Shopping App</Button>
            </Col>

            <Col xs lg={6} >
              <img src="/Artboard 8.png" height="auto" width="auto"/>
            </Col>
          </Row>
        </Container>
      </div>

      {/* second page */}
      <div className={styles.second}>
        <h1 className='text-center fw-bold'>Elevate Your Business to the</h1>
        <h1 className='text-center fw-bold'> Next Level With Mobile App</h1>

        <>
          <Container>
            <Row className="justify-content-md-center">
              <Col xs lg={3}>
                <Card border="light">
                  <Card.Img variant="top" src="/Artboard 8 copy.png" />
                  <Card.Body className="text-center">
                    <Card.Title>Optimized sales for shopping experience</Card.Title>
                    <Card.Text>
                      Create a direct mobile channel to provide shoppers 
                      with quick access to general info, shopping 
                      catalogue and manage loyalty 
                      program right at their fingertips
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs lg={3}>
                <Card border="light">
                  <Card.Img variant="top" src="/Artboard 8 copy 2.png" />
                  <Card.Body className="text-center">
                    <Card.Title>Outplay your competitor</Card.Title>
                    <Card.Text>
                      Having a mobile app for a small business is 
                      becoming less common these days, and 
                      this is where you can gain an advantage 
                      over your competition.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs lg={3}>
                <Card border="light">
                  <Card.Img variant="top" src="Artboard 8 copy 3.png" />
                  <Card.Body className="text-center">
                    <Card.Title>Increase engagement</Card.Title>
                    <Card.Text>
                      Simply accessible and get even closer to a 
                      direct interaction and stay connected to 
                      your customers wherever they go.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </>
      </div>

      {/* third page*/}
      <div className={styles.third}>
        <h1 className="text-center fw-bold">How Customers Buy From You on Shopping App</h1>
        <>
          <Container>
            <Row className="justify-content-md-center">
              <Col xs lg={3}>
                <Card border="light" className="bg-light text-center fw-bolder">
                  <Card.Img variant="top" src="Artboard 8 copy 4.png" />
                  <Card.Body>
                    <h3>1. Search your businessby entering store URL or scan QR code</h3>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs lg={1}>
                <img alt="" className={styles.arrow_picture} src="/arrow.png" />
              </Col>
              
              <Col xs lg={3}>
                <Card border="light" className="bg-light text-center">
                  <Card.Img variant="top" src="Artboard 8 copy 5.png" />
                  <Card.Body>
                    <h3>2. Browser your store</h3>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs lg={1}>
                <img alt="" className={styles.arrow_picture} src="/arrow.png" />
              </Col>

              <Col xs lg={3}>
                <Card border="light" className="bg-light text-center">
                  <Card.Img variant="top" src="Artboard 8 copy 6.png" />
                  <Card.Body>
                    <h3>3. Add products to bag</h3>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs lg={3}>
                <Card border="light" className="bg-light text-center">
                  <Card.Img variant="top" src="Artboard 8 copy 7.png" />
                  <Card.Body>
                    <h3>4. Login account to check out</h3>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs lg={1}>
                <img alt="" className={styles.arrow_picture} src="/arrow.png" />
              </Col>

              <Col xs lg={3}>
                <Card border="light" className="bg-light text-center">
                  <Card.Img variant="top" src="Artboard 8 copy 8.png" />
                  <Card.Body>
                    <h3>5. Get notified of orders at any time</h3>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </>
      </div>

      {/*four page */}
      <div className={styles.four}>
        <h1 className='text-center fw-bold'>What They Think About EasyStore</h1>

        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="2">
              <img alt="" className={styles.arrow_picture2} src="/arrow_left.png" />
            </Col>

            <Col xs lg="3">
              <Card style={{ width: '18rem', height: '27rem' }}>
                <img alt="" className={styles.back_img} src="testtimonial-bg.svg" />
                <Card.Img variant="top" src="cocoonya.jpg" className={styles.img1} />
                <Card.Body>
                  <p className={styles.test_p}>
                    "It helps our customers to place order easily and for us to manage our store peacefully. No
                    hassle, it's <span className={styles.test_pink}>time efficient</span> time too! With just a few clicks
                    you twirl your business smoothly." 
                  </p>
                  <img src="cocoonya-profile.jpg" className={styles.testimonial_prof} />
                  <p className={styles.test_p1}>Sonya, Founder of COCO ONYA</p>
                  <p className={styles.test_p2}>www.thecocoonya.com</p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col xs lg="3">
              <Card style={{ width: '18rem', height: '27rem' }}>
                <img alt="" className={styles.back_img} src="testtimonial-bg.svg" />
                <Card.Img variant="top" src="bengbeng.png" className={styles.img2} />
                <Card.Body>
                <p className={styles.test_p}>
                  "<span className={styles.test_pink}>
                    Simple, user-friendly interface
                  </span>
                  .Recommends for beginners. The Best malaysian alternative of Shopify. Able to build a new business."
                </p>
                <img src="bengbeng-profile.jpg" className={styles.testimonial_prof} />
                <p className={styles.test_p1}>Jun Qi, Co-founder of BengBeng Sourdough</p>
                <p className={styles.test_p2}>www.bengbengsourdough.com</p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col xs lg="3">
              <Card style={{ width: '18rem', height: '27rem' }}>
                <img alt="" className={styles.back_img} src="testtimonial-bg.svg" />
                <Card.Img variant="top" src="hermanas.jpg" className={styles.img3} />
                <Card.Body>
                  <p className={styles.test_p}>
                    "When we started HERMANAS, we use Whatsapp and Instagram.
                    It's hard to keep track of thousands of messages.
                    <span className={styles.test_pink}>EasyStore cut us a significant amount of
                    time and easy to manage</span>."
                  </p>
                  <img src="hermanas-profile.jpg" className={styles.testimonial_prof} />
                  <p className={styles.test_p1}>Jue, Founder of HERMANAS</p>
                  <p className={styles.test_p2}>www.hermanas.my</p>
                </Card.Body>
              </Card>
            </Col>

            <Col xs lg="1">
              <img alt="" className={styles.arrow_picture3} src="/arrow_right.png" />
            </Col>
          </Row>
        </Container>
      </div>

      {/* fifth page*/}
      <div className="container p-5">
        <h1 className='text-center fw-bold'>Start selling online for free</h1>
        <div className="col-md-12 text-center pt-3  pb-5">
          <Button variant="primary" size="lg" className={styles.start_btn}>
            Get Started
          </Button>{' '}
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  )
}
