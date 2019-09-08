const intialState = {
  counter: 0
};

export default function rootReducer(state = intialState, action) {
  switch (action.type) {
    case "ADD":
      return {
        counter: state.counter + 1
      };
    case "SUB":
      return {
        counter: state.counter - 1
      };
    case "ADD_INPUT":
      console.log(action);
      return {
        counter: state.counter + action.payload
      };
    case "SUB_INPUT":
      console.log(action);
      return {
        counter: state.counter - action.payload
      };

    default:
      return state;
  }
}
