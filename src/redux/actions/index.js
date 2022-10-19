import harryApi from '../../api/harryApi';
import {
  GET_CHARACTER,
  ADD_CHARACTER,
  DELETE_CHARACTER,
  SET_TERM,
} from './action-types';

export const getCharacters = () => {
  return async (dispatch, getState) => {
    const response = await harryApi.get('');
    dispatch({
      type: GET_CHARACTER,
      payload: response.data,
    });
  };
};
export const addCharacter = (data) => {
  return {
    type: ADD_CHARACTER,
    payload: data,
  };
};
export const deleteCharacter = (id) => {
  return {
    type: DELETE_CHARACTER,
    payload: id,
  };
};
export const setTerm = (term) => {
  return {
    type: SET_TERM,
    payload: term,
  };
};
