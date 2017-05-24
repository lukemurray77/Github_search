import {combineReducers} from 'redux';

import searchRepos from './search-repos-reducer';

export default combineReducers({
	repos: searchRepos
});