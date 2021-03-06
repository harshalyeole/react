import React, { Component } from 'react';
import { Container, Col, CardSubtitle, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { CARS } from '../data/mock'
import { ToastsContainer, ToastsStore } from 'react-toasts';
import * as cartActions from '../actions/cartActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CarDetails extends Component {
    constructor(props) {
        super(props);
        const myString = window.location.href;
        const id = myString[myString.length - 1]
        const car = CARS[id];
        var Cart = this.props.cart;

        var qty = 0;
        if (Cart.length) {
            var foundIndex = Cart.findIndex(c => c.id === car.id);
            if (foundIndex !== -1) {
                qty = Cart[foundIndex].qty;
            }
        }

        this.state = {
            cartItem: {
                qty,
                ...car
            }
        }
    }

    add = () => {
        let { cartItem, cartItem: { qty } } = this.state;
        cartItem.qty = qty + 1;

        this.setState({
            cartItem: cartItem
        });
        // Reducer logic
        var Cart = this.props.cart;
        if (Cart.length) {
            var foundIndex = Cart.findIndex(c => c.id === cartItem.id);
            if (foundIndex !== -1) {
                Cart[foundIndex] = cartItem;
            } else {
                Cart.push(cartItem);
            }
        } else {
            Cart.push(cartItem);
        }
        const { addToCart } = this.props.cartActions;
        addToCart(Cart);
        ToastsStore.success("Added to cart!")
    }

    remove = () => {
        let { cartItem, cartItem: { qty } } = this.state;
        if (cartItem.qty !== 0) {
            cartItem.qty = qty - 1;
            this.setState({
                cartItem: cartItem
            });

            // Reducer logic
            var Cart = this.props.cart;
            if (Cart.length) {
                var foundIndex = Cart.findIndex(c => c.id === cartItem.id);
                if (foundIndex !== -1) {
                    Cart[foundIndex].qty = cartItem.qty;
                    if (cartItem.qty === 0) {
                        Cart.splice(foundIndex, 1);
                    }
                }
            } 
            const { removeFromCart } = this.props.cartActions;
            removeFromCart(Cart);
            ToastsStore.error("Removed from cart!")
        }
    }

    render() {
        const { cartItem: car } = this.state;
        return (
            <Container>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/'>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link to='/shopping'>Shopping</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>{car.name}</BreadcrumbItem>
                    <div className="cart-container">
                        <Link to='/shopping/cart'><i className="fa fa-3x fa-shopping-cart" aria-hidden="true"></i></Link>
                    </div>
                </Breadcrumb>

                <Col md="12" className="card-details-container">
                    <Col md="8" className="card-details">
                        <img className="card-img-details" width="100%" src={car.image} alt={car.name} />
                    </Col>
                    <Col md="4" className="card-details">
                        <CardTitle>{car.name}</CardTitle>
                        <CardText>{car.description}</CardText>
                        <div className="price-container">
                            <CardSubtitle>$ {car.price}</CardSubtitle>
                            <div className="icons-container">
                                <i className="fa fa-minus card-icons" onClick={() => this.remove()}></i>
                                {this.state.cartItem.qty}
                                <i className="fa fa-plus card-icons" onClick={() => this.add()}></i>
                            </div>
                        </div>
                    </Col>
                </Col>
                <ToastsContainer store={ToastsStore} />
            </ Container>
        );
    }
}


CarDetails.propTypes = {
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
)(CarDetails);