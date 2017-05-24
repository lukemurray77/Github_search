import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment';

class Repo extends Component {
    render() {
        const newDate = moment(new Date());
        const oldDate = moment(this.props.time);
        const lastUpdate = newDate.diff(oldDate, 'days');
        const pathToRepo = `/${this.props.user}/${this.props.name}`
        const stars = this.props.stars ? <p><i className="fa fa-star star" aria-hidden="true"></i> {this.props.stars}</p> : '';

        return (
            <div className="columns each-repo">
                <div className="column is-three-quarters">
                    <Link to={pathToRepo}>
                        <h3 className="repo-title">{this.props.user}/{this.props.name}</h3>
                    </Link>
                    <p className="repo-description">{this.props.description}</p>
                    <p className="last-updated">Last updated {lastUpdate} days ago.</p>
                </div>
                <div className="column">
                    <p>{this.props.language}</p>
                    {stars}
                </div>

            </div>
        );
    }
}

export default Repo;


/*
<Link to={pathToRepo}>
                    <div className='box'>
                        {this.props.name}
                        {this.props.description}
                        {this.props.url}
                        {this.props.time}
                    </div>
                </Link>*/