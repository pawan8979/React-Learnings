import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./actions";
import { data } from "../../../../data";

//reducer function
//whatever state is returned from the function is the new state
const reducer = (state, action) => {
  // if (action.type === "CLEAR_LIST") {
  //   return { ...state, people: [] };
  // }
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }
  if (action.type === RESET_LIST) {
    return { ...state, people: data };
  }
  if (action.type === REMOVE_ITEM) {
    let newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    );
    return { ...state, people: newPeople };
  }

  //return state; //you can also return previous state
  throw new Error(`No matching "${action.type}" - action type`); //you can throw error
};
export default reducer;
