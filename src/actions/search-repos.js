import * as types from './types';
import axios from 'axios';
import {ROOT} from '../../config';

export function updateSearchInput(str) {
    return {
        type: types.UPDATE_TEXT_INPUT,
        data: str
    };
}

export function fetchAllRepos(searchText) {
    return function (dispatch) {
        dispatch(fetchReposRequest())
        axios
            .get(`${ROOT}/search/repositories?q=${searchText}&sort=stars&order=desc`)
            .then(res => {
                console.log(res.data.items)
                dispatch(fetchReposSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchReposError(err));
            });
    };
}


export function fetchReposRequest () {
    return {
        type: types.FETCH_REPOS_REQUEST
    };
}
export function fetchReposSuccess (repos) {
    return {
        type: types.FETCH_REPOS_SUCCESS,
        data: repos
    };
}
export function fetchReposError (err) {
    return {
        type: types.FETCH_REPOS_ERROR,
        data: err
    };
}