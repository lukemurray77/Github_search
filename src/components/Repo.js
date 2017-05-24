import React, { Component } from 'react';
import { Link } from 'react-router';

class Repo extends Component {
    render() {
        const pathToRepo = `/${this.props.user}/${this.props.name}`
        return (
            <Link to={pathToRepo}>
                <div className='box'>
                    {this.props.name}
                    {this.props.description}
                    {this.props.url}
                    {this.props.time}
                </div>
            </Link>
        )
    }
}

export default Repo;