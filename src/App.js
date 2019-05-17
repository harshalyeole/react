import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Colors from './components/ColorsComponent';
import Caculator from './components/CaculatorComponent';
import Home from './components/HomeComponent';
import Shopping from './components/ShoppingComponent';
import CarDetails from './components/CarDetailsComponent';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Cart from './components/CartComponent';
import { Switch, Route } from 'react-router-dom';
import './App.css';
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
            <Switch>
              <Route exact path='/colors' component={() => <Colors/>} />
              <Route exact path='/calculator' component={() => <Caculator/>} />
              <Route exact path='/' component={() => <Home/>} />
              <Route exact path='/shopping' component={() => <Shopping/>} />
              <Route exact path='/shopping/cardeatils/*' component={() => <CarDetails/>} />
              <Route exact path='/shopping/cart' component={() => <Cart/>} />
            </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
