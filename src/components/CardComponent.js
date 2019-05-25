import React, { Component } from 'react';
import { Card, CardSubtitle, CardImg, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

class CarCard extends Component {
    carDeatils (car) {
        // Use Redux here
    }

    render() {
        const car = this.props.car;
        return (
            <div>
                <Link className="card-link" to={"/shopping/cardeatils/"+car.id}>
                    <Card onClick={() => this.carDeatils(car)}>
                        <CardImg width="100%" src={car.image} alt={car.name} />
                        <CardTitle >{car.name}</CardTitle>
                        <CardSubtitle >$ {car.price}</CardSubtitle>
                    </Card>
                </Link>
            </div>
        );
    }
}

export default CarCard;