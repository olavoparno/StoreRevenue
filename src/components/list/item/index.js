import React from "react";

const Item = (props) => {
    return (
        <div className={props.className}>{props.value}</div>
    );
}

export default Item;