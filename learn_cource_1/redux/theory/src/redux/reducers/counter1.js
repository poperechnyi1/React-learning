import {ADD, SUB, ADD_INPUT, SUB_INPUT} from '../actions/actionTypes'

const intialState = {
    counter: 0
  };
  
  export default function counter1(state = intialState, action) {
    switch (action.type) {
      case ADD:
        return {
          counter: state.counter + 1
        };
      case SUB:
        return {
          counter: state.counter - 1
        };
      case ADD_INPUT:
        return {
          counter: state.counter + action.payload
        };
      case SUB_INPUT:
        return {
          counter: state.counter - action.payload
        };
  
      default:
        return state;
    }
  }
  