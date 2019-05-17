import React, {Component} from 'react';
import { Col, Container, Row, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { CARS } from '../data/mock'
import Card from './CardComponent';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

class Shopping extends Component {
  render() {
    const carList = CARS.map((carItem)=> (
      <Col md="4">
        <Card car={carItem}/>
      </Col>
    ));
    
    return (
      <div>
        <Container>
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to='/'>Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>Shopping</BreadcrumbItem>
            </Breadcrumb>
            <div className="container-title"> Final Assignment: Shopping </div>
            <Row>
                { carList }
            </Row>
        </Container>
      </div>
    );
  }
}

export default Shopping;