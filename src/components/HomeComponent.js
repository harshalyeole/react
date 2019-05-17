import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';

class Home extends Component {
    render() {
        return (
        <div>
            <Container>
                <Breadcrumb>
                    <BreadcrumbItem active>Home</BreadcrumbItem>
                </Breadcrumb>
                <Row>             
                    <Col md="4" />
                    <Col md="4">
                        <div>This shows <span className="assignment3">Assignment 3: Routing!</span></div>
                        <br />
                        <ul className="list-unstyled">
                            <li><Link to='/colors'>Assignment 1: Colors</Link></li>
                            <li><Link to='/calculator'>Assignment 2: Calculator</Link></li>
                            <li><Link to='/'>Assignment 3: Routing</Link></li>
                            <li><Link to='/shopping'>Final Assignment: Shopping</Link></li>
                        </ul>
                    </Col>
                    <Col md="4" />
                </Row>
            </Container>
        </div>);
    }

}

export default Home;