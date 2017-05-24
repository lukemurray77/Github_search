import React, { Component } from 'react';
import Repo from './Repo';
import { Link } from 'react-router';


class ReposList extends Component {
    render() {
        let numberOfRepos= this.props.repos.length;
        if (!numberOfRepos) {
            numberOfRepos = '';
        } else 
        numberOfRepos= `${this.props.repos.length} repository results`;
        return (
            <div className="container">
                <div className="numberOfRepos">
                    {numberOfRepos}
                </div>
                <ul className="listOfRepos">
                    {this.props.repos.map(function (repo, i) {

                        return (
                                <Repo
                                    key={i}
                                    description={repo.description}
                                    url={repo.url}
                                    name={repo.name}
                                    time={repo.updated_at}
                                    user={repo.owner.login}
                                />
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default ReposList;