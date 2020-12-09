import React from 'react';
import {connect} from "react-redux";
import * as action from '../actions/index';

class Form extends React.Component {

    async checkLogin() {
        const account = {
            userName: document.getElementById("userName").value,
            password: document.getElementById("password").value
        };
        await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(account)
        }).then((response) => response.json())
            .then((json) => {

                //receive status and action after login

                this.props.loginStatus(json);

                if (this.props.login.note) {
                    setTimeout(() => {
                        this.props.history.push("/products")
                    }, 1000)
                }
            });
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Welcome to my website</h1>
                    <h3>Login</h3>
                </div>
                <div>
                    <input id="userName" placeholder={"enter username"}/>
                    <input id="password" type="password" placeholder={"enter password"}/>
                    <input type="submit" value="login" onClick={() => this.checkLogin()}/>
                </div>
                <div>
                    {this.props.login.message}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.Login,
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        loginStatus: (status) => {
            dispatch(action.saveStatus(status));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);