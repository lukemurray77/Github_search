import {combineReducers} from 'redux';

import searchRepos from './search-repos-reducer';
import modalOpen from './modal-reducer';

export default combineReducers({
	repos: searchRepos,
	modalOpen: modalOpen
});