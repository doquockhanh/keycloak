import './App.css';
import React from 'react';
import 'ajax'
import {Route, Switch} from "react-router-dom";
import Form from './myE/form'
import Product from "./myE/product";

export default function App() {
    return(
        <Switch>
            <Route exact path={"/"} component={Form} />
            <Route exact path={"/products"} component={Product} />
        </Switch>
    )
}
