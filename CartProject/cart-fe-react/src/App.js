import './App.css';
import React from 'react';
import 'ajax'
import Form from './components/Form';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ProductList from "./components/ListProduct"

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"} component={Form}/>
                <Route exact path={"/products"} component={ProductList} />
            </Switch>
        </BrowserRouter>
    )
}
