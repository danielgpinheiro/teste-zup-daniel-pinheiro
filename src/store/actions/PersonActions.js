import {
  ADD_PERSON,
  EDIT_PERSON,
  DELETE_PERSON,
} from '../types/PersonTypes'

export const actionAddPerson = (params) => {
  return (dispatch) => {
    dispatch({
      type: ADD_PERSON,
      payload: params
    })
  }
}

export const actionEditPerson = (params) => {
  return (dispatch) => {
    dispatch({
      type: EDIT_PERSON,
      payload: params
    })
  }
}

export const actionDeletePerson = (params) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_PERSON,
      payload: params
    })
  }
}
