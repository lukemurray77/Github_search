import * as types from '../actions/types';

const initialState = {
    isOpen : false
};

function modalOpen (prevState = initialState, action) {
    switch (action.type) {
        case types.MODAL_OPEN: {
            return Object.assign({}, prevState, {
                isOpen: true
            });
            
        }
        case types.MODAL_CLOSE: {
            return Object.assign({}, prevState, {
                isOpen: false
            });
        }
        default: 
        return prevState;
    }
}

export default modalOpen;