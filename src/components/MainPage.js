import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSearchInput, fetchAllRepos } from '../actions/search-repos';
import ReposList from './ReposList';


class MainPage extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        return (
            <div className="searchForRepos container">
                <form className='searchBar' onSubmit={this.handleSubmit}>
                    <p className="text-in-search">Search for any Github repository!</p>
                    <div className="search-button">
                        <input
                            className="search-bar"
                            id='search-repos'
                            type='text'
                            placeholder='Search for repositories..'
                            onChange={this.handleChange}
                            value={this.props.searchText}
                        />
                        <input id='button' className="addCommentButton" type='submit' value='Search' />
                    </div>

                </form>
                <ReposList repos={this.props.repos} />

            </div>
        );
    }
    handleChange(e) {
        this.props.updateSearchText(e.target.value);
    }
    handleSubmit(e) {
        e.preventDefault();
        if (this.props.searchText) this.props.fetchRepos(this.props.searchText);

    }



}


function mapStateToProps(state) {
    return {
        searchText: state.repos.searchText,
        repos: state.repos.repos
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateSearchText: function (e) {
            dispatch(updateSearchInput(e));
        },
        fetchRepos: function (searchText) {
            dispatch(fetchAllRepos(searchText));
        }
    };
}



export default connect(mapStateToProps, mapDispatchToProps)(MainPage);