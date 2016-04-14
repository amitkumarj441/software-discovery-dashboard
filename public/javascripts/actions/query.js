export const ADD_FIELD = 'ADD_FIELD';
export const REMOVE_FIELD = 'REMOVE_FIELD';
export const UPDATE_FIELD = 'UPDATE_FIELD';

export function addField(attribute) {
  return dispatch => dispatch({
    type: ADD_FIELD,
    attribute,
  });
}

export function removeField(attribute) {
  return dispatch => dispatch({
    type: REMOVE_FIELD,
    attribute,
  });
}

export function updateField(attribute, value) {
  return dispatch => dispatch({
    type: UPDATE_FIELD,
    attribute,
    value,
  });
}
