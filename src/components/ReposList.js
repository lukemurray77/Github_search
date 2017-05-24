import React, {Component} from 'react';
import Repo from './Repo';



class ReposList extends Component {
    render () {
        const numberOfRepos = this.props.repos.length ? `${this.props.repos.length} repository results`: '';

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
                                    language={repo.language}
                                    stars={repo.stargazers_count}
                                />
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default ReposList;