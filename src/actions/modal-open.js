import * as types from './types';

export function modalOpen () {
  return {
    type: types.MODAL_OPEN,
  };
}

export function modalClose () {
  return {
    type: types.MODAL_CLOSE,
  };
}