import React, { Component } from "react";
import GroupForm from "../components/GroupForm";

import "./HomePage.css";

class GroupCreatePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="container">
                <div className="underNav"></div>
                <div className="col-12 fullBox">
                    <div className="row ">
                        <div className="col-12">
                            <div className="col-12 area">
                                <GroupForm />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="underNav"></div>
            </div>
        );
    }
}

export default GroupCreatePage;
