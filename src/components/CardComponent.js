import React, { Component } from 'react';
import { Card, CardSubtitle, CardImg, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

class CarCard extends Component {
    carDeatils (car) {
        console.log("Car", car);
        // Use Redux here
    }

    render() {
        const car = this.props.car;
        return (
            <div key={car.id}>
                <Link key={car.id} className="card-link" to={"/shopping/cardeatils/"+car.id}>
                    <Card key={car.id} onClick={() => this.carDeatils(car)}>
                        <CardImg key={car.id} width="100%" src={car.image} alt={car.name} />
                        <CardTitle key={car.id} >{car.name}</CardTitle>
                        <CardSubtitle key={car.id} >$ {car.price}</CardSubtitle>
                    </Card>
                </Link>
            </div>
        );
    }
}

export default CarCard;