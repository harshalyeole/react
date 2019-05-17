import React, { Component } from 'react';
import { Button, Container, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { CARS } from '../data/mock'
import {ToastsContainer, ToastsStore} from 'react-toasts';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalAmount: "5,65,24,114",
            cars: CARS
        }
    }

    add  = () => {
        // let { cartItem, cartItem: {qty} } = this.state;
        // cartItem.qty = qty +1;
        // this.setState({
        //     cartItem: cartItem,
        //     new: 1
        // });
        ToastsStore.success("Added one more!")
    };

    remove = () => {
        // let { cartItem, cartItem:  {qty} } = this.state;
        // if (cartItem.qty !== 0) {
        //         cartItem.qty = qty -1;
        //         this.setState({
        //         cartItem: cartItem
        //     })
            ToastsStore.error("Removed from cart!")
        // }
    };
    payment = () => {
        this.setState({
            cars: [],
            totalAmount: 0
        })
        ToastsStore.success("Order Placed, Thanks for the Payment!")
    }

    renderCartItem = () => this.state.cars.map((car) => (
        <Col md="12" className="cart-item display-inline">
            <Col md="4" className="cart-img-container display-inline">
                <img className="cart-img" width="100%" src={car.image} alt={car.name} />
            </Col>
            <Col md="6"  className="cart-name-container display-inline"> 
                {car.name} 
                <div className="cart-price-container">
                    <div>Price: {car.price}</div>
                    <div>
                        <i className="fa fa-minus cart-icons" onClick={() => this.remove()}></i>
                            <div className="cart-qty">Qty: {car.qty || 1}</div>
                        <i className="fa fa-plus cart-icons" onClick={() => this.add()}></i>
                    </div>
                </div>
            </Col>
            <Col md="2" className="cart-total-container display-inline">
                Rs. { car.price * car.qty || car.price }
            </Col>
        </Col>
    ));

    render() {
        return (
            <Container>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/'>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link to='/shopping'>Shopping</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Cart</BreadcrumbItem>
                </Breadcrumb>
                <Col className="cart-payment-container">
                    <Col md="8" className="cart-total display-inline">Total Amount: <span>Rs. {this.state.totalAmount}</span></Col>
                    <Col md="4" className="display-inline"><Button color="success" block onClick={(e) => this.payment()} disabled={this.state.totalAmount === 0}>Place Order</Button>{' '}</Col>
                </Col>
                <Col>{this.renderCartItem()}</Col>
                <Col className={this.state.totalAmount === 0 ? "go-shopping": "hide"}>
                    Go <Link to='/shopping'>Shopping</Link>!
                </Col>
                <ToastsContainer store={ToastsStore}/>
            </ Container>
        );
    }
}

export default Cart;