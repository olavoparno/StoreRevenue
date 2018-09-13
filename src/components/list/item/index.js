import React from "react";

class Item extends React.Component {
    componentDidMount() {
        console.log();
    };
    render() {
        return (
            <div className={this.props.className}>{this.props.value}</div>
        );
    }
}

export default Item;