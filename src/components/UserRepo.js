import React, {Component} from 'react';
import {Link} from 'react-router';

class UserRepo extends Component {
    render () {
        const pathToRepo = `/${this.props.user}/${this.props.name}`;
        return (
            <h1>IM A REPO</h1>
        );
    }
}

export default UserRepo;