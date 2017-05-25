import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import InsideModal from './InsideModal';

class Repo extends Component {
    constructor(props) {
        super(props);
    }
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
                    <InsideModal
                        description={this.props.description}
                        url={this.props.url}
                        name={this.props.name}
                        time={this.props.time}
                        user={this.props.user}
                        language={this.props.language}
                        stars={this.props.stars}
                        open_issues={this.props.open_issues}
                        forks={this.props.forks}
                        avatar={this.props.avatar}
                    />
                </div>

            </div>
        );
    }
}



export default Repo;

/*
<button onClick={this.handleOpenModal}>More Info</button>
                    <Modal isOpen={this.props.isOpen}>
                        <InsideModal
                            description={this.props.description}
                            url={this.props.url}
                            name={this.props.name}
                            time={this.props.time}
                            user={this.props.user}
                            language={this.props.language}
                            stars={this.props.stars}
                            open_issues={this.props.open_issues}
                            forks={this.props.forks}
                            avatar={this.props.avatar}
                        />
                        <button onClick={this.handleCloseModal}>Close Modal</button>
                    </Modal>*/