import React, {Component} from "react";
import './item-status-filter.css';

class ItemStatusFilter extends Component {

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'},
    ];

    render() {
        const {filter} = this.props;
        const buttons = this.buttons.map(({name, label}) => {
            console.log(filter, name);
            const isActive = filter === name;
            const itemClass = isActive ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button type="button"
                        key={name}
                        className={`btn ${itemClass}`}
                        onClick={() => this.props.onFilterChange(name)}
                >{label}</button>
            );
        });
        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }

}

export default ItemStatusFilter;