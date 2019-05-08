import React, {Component} from 'react';
import { Container, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

class Calculator extends Component {
  render() {
    return (
      <div>
        <Container>
            <Breadcrumb>
              <BreadcrumbItem>
                <li><Link to='/'>Home</Link></li>
              </BreadcrumbItem>
              <BreadcrumbItem active>Calculator</BreadcrumbItem>
            </Breadcrumb>
            <div className="container-title"> Assignment 2: Calculator (Coming Soon) </div>
        </Container>
      </div>
    );
  }
}

export default Calculator;