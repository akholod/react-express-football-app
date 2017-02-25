import React from 'react';

export default (props) => {
    console.log(props.header);
    return (
        <div className='app-header-component'>
            <h1> {props.header} Table</h1>
        </div>
    )
}
