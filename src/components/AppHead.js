import React from 'react';

export default (props) => {
    console.log(props.header);
    return (
        <h1>{props.header} Table</h1>
    )
}
