import * as types from '../actions/types';

const initialState = {
    repos: [],
    searchText: '',
    loading: false,
    err: null
};


function searchReposReducer (prevState=initialState, action) {
    switch (action.type) {
        case types.UPDATE_TEXT_INPUT: {
            return Object.assign({}, prevState, {
                searchText: action.data
            });
        }
        case types.FETCH_REPOS_REQUEST: {
            return Object.assign({}, prevState, {
                loading: true
            });
        }
        case types.FETCH_REPOS_SUCCESS: {
            const newState = Object.assign({}, prevState);
            let newRepos = [];
            newRepos = action.data.items;
            newState.repos = newRepos;
            newState.loading = false;
            return newState;
        }
        case types.FETCH_REPOS_ERROR: {
            return Object.assign({}, prevState, {
                err: action.data,
                loading: false
            });
        }
        default: 
        return prevState;
    }
}

export default searchReposReducer;