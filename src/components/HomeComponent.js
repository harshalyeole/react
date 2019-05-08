import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Breadcrumb, BreadcrumbItem } from 'reactstrap';

class Home extends Component {
    render() {
        return (
        <div>
            <Container>
                <Breadcrumb>
                    <BreadcrumbItem active>Home</BreadcrumbItem>
                </Breadcrumb>
                <Row className="justify-content-center">             
                    <div>
                        <ul className="list-unstyled">
                            <li><Link to='/colors'>Assignment 1</Link></li>
                        </ul>
                    </div>
                </Row>
            </Container>
        </div>);
    }

}

export default Home;