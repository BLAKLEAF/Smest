import { createContext, Dispatch } from "react";
import { IAction, IState, initialState } from "../Reducer/Reducer";

export interface IContext {
  state: IState;
  dispatch: Dispatch<IAction<IState>>;
}

export let Context = createContext<IContext>({
  state: initialState,
  dispatch: () => null,
});
