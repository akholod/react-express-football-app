import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Team extends Component {
    render() {
            console.log(this.props.data);
        return(
            <div>
                <h3>Coming soon</h3>
                <Link to='/'>Back to table</Link>
            </div>
        )
    }
}
