import React, { Component } from 'react';
import { Button, Container, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {ToastsContainer, ToastsStore} from 'react-toasts';
import * as cartActions from '../actions/cartActions';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Cart extends Component {
    constructor(props) {
        super(props);
        const cars = this.props.cart;
        var totalAmount = 0;
        cars.forEach(c => {
            totalAmount =totalAmount + ((parseInt(c.qty))*(parseInt(c.price)));
        });
        this.state = {
            totalAmount,
            cars
        }
    }

    payment = () => {
        
        const { addToCart } = this.props.cartActions;
        addToCart([]);
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
                <Link to={"/shopping/cardeatils/"+car.id}>
                    {car.name} 
                </ Link>
                <div className="cart-price-container">
                    <div>Price: {car.price}</div>
                    <div>
                        {/* <i className="fa fa-minus cart-icons" onClick={() => this.remove()}></i> */}
                            <div className="cart-qty">Qty: {car.qty || 1}</div>
                        {/* <i className="fa fa-plus cart-icons" onClick={() => this.add()}></i> */}
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




Cart.propTypes = {
  cartActions: PropTypes.object,
  cart: PropTypes.array
};

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    cartActions: bindActionCreators(cartActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

