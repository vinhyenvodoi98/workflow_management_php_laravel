import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import "./LoginPage.css";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            msg: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        await this.setState({
            email: data.get("email"),
            password: data.get("password")
        });
        await axios
            .post("http://localhost:8181/api/login", {
                email: this.state.email,
                password: this.state.password
            })
            .then(res => {
                localStorage.setItem("token", res.data.token);
                window.location.href = "/";
            })
            .catch(error => {
                this.setState({ msg: error.response.data.msg });
            });
    }

    render() {
        return (
            <div className="login_container">
                <div className="box">
                    <div className="choice_container">
                        <div className="c1">
                            <div className="c11" />
                            <div id="left">
                                <h1 className="s1class text-color">
                                    {this.homepageRender}
                                    <span>SIGN</span>
                                    <span className="su">IN</span>
                                </h1>
                            </div>
                            <Route
                                render={({ history }) => (
                                    <div
                                        id="right"
                                        onClick={() => {
                                            history.push("/register");
                                        }}
                                    >
                                        <h1 className="s2class">
                                            <span>SIGN</span>
                                            <span className="su">UP</span>
                                        </h1>
                                    </div>
                                )}
                            />
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div className="choice_container">
                        <div className="c2">
                            <h1 className="space_around">Login</h1>

                            <form
                                className="form logon"
                                onSubmit={this.handleSubmit}
                            >
                                {this.state.msg ? (
                                    <p className="colorError">
                                        {this.state.msg}
                                    </p>
                                ) : (
                                    <p></p>
                                )}
                                <label className="space_around" htmlFor="email">
                                    Enter email
                                </label>
                                <input
                                    className="input space_around"
                                    id="email"
                                    name="email"
                                    type="text"
                                    placeholder="Email*"
                                />

                                <label
                                    className="space_around"
                                    htmlFor="password"
                                >
                                    Enter your password
                                </label>
                                <input
                                    className="input space_around"
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Password*"
                                />
                                <button className="button">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;
