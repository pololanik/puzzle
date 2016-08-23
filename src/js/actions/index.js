import * as types from '../constants/ActionTypes';

export function clickItem(id) {
  return {
    type: types.CLICK_BLOCK,
    id
  };
}

export function move(id, direction) {
  return {
    type: types.MOVE, id, direction
  };
}

export function nextLevel() {
  return {
    type: types.NEXT_LEVEL
  };
}

export function changeLevel(levelId) {
  return {
    type: types.CHANGE_LEVEL, levelId
  };
}
