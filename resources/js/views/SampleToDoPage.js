import React, { Component } from "react";
import ProcessTable from "../components/ProcessTable";
import CreateSampleToDoModals from "../modals/CreateSampleToDoModals";

import "./SampleToDoPage.css";

class SampleToDoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            processes: [
                {
                    processName: "QT xin nghi viec",
                    description: "QT1",
                    role: 0,
                    numberOfTime: 20,
                    creater: "Do Duc Hoang"
                },
                {
                    processName: "QT bao dam chat luong",
                    description: "QT2",
                    role: 1,
                    numberOfTime: 30,
                    creater: "Ha Viet Tien"
                },
                {
                    processName: "QT kham suc khoe",
                    description: "QT3",
                    role: 0,
                    numberOfTime: 50,
                    creater: "Tran Dan"
                }
            ]
        };
    }
    render() {
        return (
            <div className="container">
                <div className="underNav"></div>
                <div className="openModal">
                    <CreateSampleToDoModals />
                </div>
                <div className="area table">
                    <ProcessTable processes={this.state.processes} />
                </div>
            </div>
        );
    }
}

export default SampleToDoPage;
