import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Service.css';

function Service() {
    return (
        <Container fluid className='page1'>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={10} lg={8} xl={7} xxl={6}>
                        <h2 className="mb-4 display-5 text-center">Services</h2>
                        <p className="text-secondary mb-5 text-center">We have a team of experienced and talented professionals who can help you with every aspect of the product development process, from ideation to prototyping to launch.</p>
                        <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
                    </Col>
                </Row>
            </Container>

            <Container className="overflow-hidden">
                <Row className="gy-5 justify-content-center">
                    <Col xs={12} sm={6} lg={4}>
                        <div className="text-center px-xl-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-1-circle-fill text-primary mb-4" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
                            </svg>
                            <h5 className="m-2">SEO Consulting</h5>
                            <p className="m-0 text-secondary">We can help you to improve your website's visibility in search engine results pages (SERPs). This can lead to more traffic to your website.</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} lg={4}>
                        <div className="text-center px-xl-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-2-circle-fill text-primary mb-4" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24c0-.691.493-1.306 1.336-1.306.756 0 1.313.492 1.313 1.236 0 .697-.469 1.23-.902 1.705l-2.971 3.293V12h5.344v-1.107H7.268v-.077l1.974-2.22.096-.107c.688-.763 1.287-1.428 1.287-2.43 0-1.266-1.031-2.215-2.613-2.215-1.758 0-2.637 1.19-2.637 2.402v.065h1.271v-.07Z" />
                            </svg>
                            <h5 className="m-2">Cleaning</h5>
                            <p className="m-0 text-secondary">We can help you to design and develop a new website, or to update your existing website. We specialize in creating user-friendly websites.</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} lg={4}>
                        <div className="text-center px-xl-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-3-circle-fill text-primary mb-4" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z" />
          </svg>
                            <h5 className="m-2">Maintanence</h5>
                            <p className="m-0 text-secondary">We can help you to design and develop a new website, or to update your existing website. We specialize in creating user-friendly websites.</p>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
            
        </Container>
    );
}

export default Service;
