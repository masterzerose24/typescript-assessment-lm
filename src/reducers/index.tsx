import { AppEvents } from "../events";
import { IAction } from "../actions";

export interface IUserState {
  name: string;
  age: number;
}
const initState: IUserState = {
  name: '',
  age: 0,
}

export const reducer = (state = initState, action: IAction) => {
  switch (action.type) {
    case AppEvents.SET_AGE: {
      return {
        ...state,
        age: action.payload
      }
    }

    case AppEvents.SET_NAME: {
      return {
        ...state,
        name: action.payload,
      }
    }

    default:
      return state;
  }
};