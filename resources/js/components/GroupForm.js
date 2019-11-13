import React, { Component } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import MiniGroupForm from "./MiniGroupForm";

import "./GroupForm.css";

class GroupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [
                { name: "Srigar", id: 1 },
                { name: "Sam", id: 2 }
            ]
        };
        this.onSelect = this.onSelect.bind(this);

        this.onRemove = this.onRemove.bind(this);
    }

    onSelect(optionsList, selectedItem) {}
    onRemove(optionList, removedItem) {}
    render() {
        return (
            <div className="form text_align_form">
                <div className="form-group">
                    <p>Group name :</p>
                    <input
                        type="text"
                        className="form-control col-6"
                        id="usr"
                    />
                </div>
                <div className="form-group">
                    <p>Description :</p>
                    <textarea
                        type="text"
                        className="form-control col-6"
                        id="usr"
                    />
                </div>
                <div className="form-group">
                    <p>Manager :</p>
                    <div className="non-padding col-6">
                        <Multiselect
                            options={this.state.options} // Options to display in the dropdown
                            onSelect={this.onSelect} // Function will trigger on select event
                            onRemove={this.onRemove} // Function will trigger on remove event
                            displayValue="name" // Property name to display in the dropdown options
                        />
                    </div>
                </div>
                <div className="form-group">
                    <p>Deputy unit :</p>
                    <MiniGroupForm />
                </div>
                <div className="form-group">
                    <p>Employees :</p>
                    <MiniGroupForm />
                </div>
            </div>
        );
    }
}

export default GroupForm;
