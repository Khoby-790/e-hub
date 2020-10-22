import {
  CREATE_ELECTION,
  REMOVE_ELECTION,
  UPDATE_ELECTION,
} from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_ELECTION:
      const newState = [...state, action.payload];
      return [...newState];
    case REMOVE_ELECTION:
      const __ = [...state];
      __.splice(action.payload, 1);
      return [...__];
    case UPDATE_ELECTION:
      const _ = [...state];
      const id = action.payload.id;
      delete action.payload.id;
      _[id] = action.payload;
      return [..._];
    default:
      return state;
  }
};
