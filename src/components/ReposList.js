import React, { Component } from 'react';
import Repo from './Repo';
import { Link } from 'react-router';


class ReposList extends Component {
    render() {
        return (
            <div>
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

            </div>
        );
    }
}

export default ReposList;