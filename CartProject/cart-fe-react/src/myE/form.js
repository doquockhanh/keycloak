import React from "react";

class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
            message: ""
        }
    }

    setAccount(){
        this.setState({
            userName: document.getElementById("userName").value,
            password: document.getElementById("password").value,
        }, () => this.checkLogin().then(r => null));
    }

    async checkLogin(){
        const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:  JSON.stringify(this.state)
        });
        const mes = await response.json();
        this.setState({ message: mes.message});
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
                    <input type="submit" value="login" onClick={() => this.setAccount()}/>
                </div>
                <div>
                    <span>{this.state.message}</span>
                </div>
            </div>
        );
    }
}

export default Form