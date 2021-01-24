import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

//layouts
import MainLayout from './layouts/MainLayout'
// pages
import Homepage from './pages/homepage/homepage';
import Catalog from './pages/catalog/catalog';
import Cart from './pages/cart/cart';
import Success from './pages/cart/order/success'

class App extends Component{

  render(){
    return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={() => (<MainLayout><Homepage/></MainLayout>)}/>
                <Route path="/catalog"  render={() => (<MainLayout><Catalog/></MainLayout>)}/>
                <Route path="/cart" render ={() => (<MainLayout><Cart/></MainLayout>)}/>
                <Route path="/success"><Success/></Route>
           </Switch>
        </BrowserRouter>
    </div>
  );}
 
}

export default App;
