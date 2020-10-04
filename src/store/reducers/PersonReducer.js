import { v4 as uuidv4 } from 'uuid'
import {
  ADD_PERSON,
  EDIT_PERSON,
  DELETE_PERSON,
} from '../types/PersonTypes'

const initialState = {
  persons: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON:
      return {
        ...state,
        persons: [...state.persons, {
          ...action.payload,
          id: uuidv4()
        }]
      }
    case EDIT_PERSON:
      // const index = state.persons.findIndex(person => person.id === action.payload.id)
      console.log(action.payload)

      return {
        ...state,
        persons: state.persons.map(person => {
          if (person.id === action.payload.id) {
            return action.payload
          };
          return person
        })
      }
    case DELETE_PERSON:
      return {
        ...state,
        persons: state.persons.filter(person => action.payload.id !== person.id)
      }
    default:
      return state
  }
}
