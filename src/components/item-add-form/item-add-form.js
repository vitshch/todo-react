import React, {Component} from "react";
import './item-add-form.css';

class ItemAddForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddItem(this.state.label);
        this.setState({
            label: ''
        })
    };

    render() {
        return (
            <form className="item-add-form d-flex"
                    onSubmit={this.onSubmit}>
                <input
                    type="text"
                    className="form-control"
                    onChange={this.onLabelChange}
                    value={this.state.label}
                    placeholder="What needs to be done?"
                />
                <button
                    className="btn btn-outline-secondary text-nowrap"
                >
                    Add Item
                </button>
            </form>
        );
    }
};

export default ItemAddForm;