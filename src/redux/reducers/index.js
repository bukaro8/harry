import {
  GET_CHARACTER,
  ADD_CHARACTER,
  DELETE_CHARACTER,
  SET_TERM,
} from '../actions/action-types';

const initialState = {
  characters: [],
  houses: [],
  spells: [],
  teachers: [],
  term: '',
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTER:
      return {
        ...state,
        characters: action.payload,
      };
    case ADD_CHARACTER:
      return {
        ...state,
        characters: [...state.characters, action.payload],
      };
    case DELETE_CHARACTER:
      return {
        ...state,
        characters: state.characters.filter(
          (char) => char.id !== action.payload
        ),
      };
    case SET_TERM:
      return {
        ...state,
        term: action.payload,
      };
    default:
      return { ...state };
  }
};
export default rootReducer;
