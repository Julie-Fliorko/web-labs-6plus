//import logo from './logo.svg';
import React, {Component} from "react";
import {Switch, Route } from "react-router-dom";
import { auth } from './firebase/utils';

//layouts
import MainLayout from './elements/layouts/MainLayout';
import HomepageLayout from "./elements/layouts/HomepageLayout";

//elements
import Homepage from "./elements/pages/Homepage/homepage";
import Registration from './elements/pages/Authentication/registration'
import './default.scss';
import './App.css';
import Cart from "./elements/pages/Cart/cart";
import Catalog from "./elements/pages/Catalog/catalog";
import Login from "./elements/pages/Authentication/LogIn/LogIn";

const initialState ={
    currentUser: null
};

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            ...initialState
        }
    }
    authListener = null;
    componentDidMount(){
        this.authListener = auth.onAuthStateChanged(userAuth => {
            if (userAuth) return;
            this.setState({
                currentUser: userAuth
            });
        });
    }
    componentWillUnmount(){
        this.authListener()
    }
    render(){    
        return (
        <div ><div className = "App" >
            <Switch >
                <Route exact path = "/"
                    render = {
                            () => ( <HomepageLayout ><Homepage /></HomepageLayout>)}/>
                <Route path = "/catalog"
                    render = {
                        () => ( <MainLayout ><Catalog /></MainLayout>)} />
                <Route path = "/cart" render = {() => ( <MainLayout ><Cart /></MainLayout>)} />
                <Route path = "/account/register" render={() => (<Registration/>)}></Route>
                <Route path = "/account/login" render={() => (<Login/>)}></Route>
            </Switch> 
        </div> </div>);}

    }
    export default App;