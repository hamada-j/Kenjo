import { CHANGE_MESSAGE, CHANGE_DATA } from "./actions";
import { tassign } from "tassign";

export interface IAppState {
  message: string;
  data: {
    orderId: number;
    orderNum: number;
  };
}
export const INITIAL_STATE: IAppState = {
  message: "",
  data: {
    orderId: -1,
    orderNum: -1
  }
};
export function rootReducer(state, action) {
  console.log(action);
  switch (action.type) {
    case CHANGE_MESSAGE: {
      return tassign(state, { message: action.message });
    }
  }

  return state;
}
