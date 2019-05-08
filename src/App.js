import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Colors from './components/ColorsComponent';
import Caculator from './components/CaculatorComponent';
import Main from './components/HomeComponent';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
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
              <Route exact path='/' component={() => <Main/>} />
            </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
