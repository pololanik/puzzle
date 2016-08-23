import * as types from '../constants/ActionTypes';
import * as moveTypes from '../constants/MoveTypes';
import {addPossibleMoves, isFinish, moveTop, moveBottom, moveLeft, moveRight} from './utils';
import Levels from '../constants/Levels';

const initialState = {
  levelId: 0,
  currentBlockId: null,
  panelItems: Levels[0]
};

export default function (state = initialState, action) {
  const getNextState = () => {
    switch (action.type) {
      case types.CLICK_BLOCK: {
        return {
          ...state,
          currentBlockId: state.currentBlockId === action.id ? null : action.id
        };
      }
      case types.NEXT_LEVEL: {
       return {...initialState, levelId: initialState.levelId+1, panelItems: Levels[initialState.levelId+1]};
      }
      case types.CHANGE_LEVEL: {
        return {...initialState, levelId: action.levelId, panelItems: Levels[action.levelId]};
      }
      case types.MOVE: {
        switch (action.direction) {
          case moveTypes.TOP:
            return {
              ...state,
              panelItems: state.panelItems.map((i) => (i.id === action.id ? moveTop(i) : i))
            };
          case moveTypes.BOTTOM:
            return {
              ...state,
              panelItems: state.panelItems.map((i) => (i.id === action.id ? moveBottom(i) : i))
            };
          case moveTypes.LEFT:
            return {
              ...state,
              panelItems: state.panelItems.map((i) => (i.id === action.id ? moveLeft(i) : i))
            };
          case moveTypes.RIGHT:
            return {
              ...state,
              panelItems: state.panelItems.map((i) => (i.id === action.id ? moveRight(i) : i))
            };
        }
      }
      default:
        return state;
    }
  }
  const nextState = getNextState();
  return {...nextState, isFinish: isFinish(nextState.panelItems), panelItems: addPossibleMoves(nextState.panelItems)};
}
