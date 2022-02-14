export interface IUser {
  firstName: string;
  surName: string;
  mobileNumber: string;
  email: string;
  dateOfBirth?: string;
  gender?: string;
  password: string;
}

export interface IModal {
  openModal?: boolean;
  messageTitle?: any;
  message?: any;
}
export interface IState {
  user?: IUser;
  users?: IUser[];
  userId?: string;
  modal?: IModal;
  loggedIn?: boolean;
  fetchedData?: any;
}

export let user: IUser = {
  firstName: "",
  surName: "",
  mobileNumber: "",
  dateOfBirth: "",
  email: "",
  gender: "",
  password: "",
};

export const initialState: IState = {
  user,
  users: [
    {
      firstName: "Pratik",
      surName: "Bankar",
      mobileNumber: "9623637180",
      dateOfBirth: "05-05-1996",
      email: "blakleaf.003@gmail.com",
      gender: "Male",
      password: "Password@123",
    },
  ] as IUser[],
  userId: "",
  loggedIn: false,
  modal: {
    openModal: false,
  },
  fetchedData: [],
};

export enum ActionType {
  HANDLE_INPUT_CHANGE = "HANDLE_INPUT_CHANGE",
  HANDLE_SIGNUP_FORM_SUBMIT = "HANDLE_SIGNUP_FORM_SUBMIT",
  HANDLE_DATA_FETCH = "HANDLE_DATA_FETCH",
  MODAL_STATE = "MODAL_STATE",
  CLEAN_UP = "CLEAN_UP",
  LOGGED_IN = "LOGGED_IN",
}

export interface IAction<T> {
  type: ActionType;
  payload?: T;
  key?: string;
  value?: string;
}

export function reducerfunction(state: IState, action: IAction<IState>) {
  let { type, payload, key, value } = action;

  switch (type) {
    case ActionType.HANDLE_INPUT_CHANGE:
      return {
        ...state,
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        user: <any>{
          ...state.user,
          [key as any]: value,
        },
      };
    case ActionType.HANDLE_SIGNUP_FORM_SUBMIT:
      return {
        ...state,
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        users: <any>[...(state.users as any), payload?.user],
      };
    case ActionType.HANDLE_DATA_FETCH:
      return {
        ...state,
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        fetchedData: payload?.fetchedData,
      };
    case ActionType.MODAL_STATE:
      return {
        ...state,
        modal: payload?.modal,
      };
    case ActionType.LOGGED_IN:
      return {
        ...state,
        loggedIn: payload?.loggedIn,
      };
    case ActionType.CLEAN_UP:
      return {
        ...state,
        user,
      };

    default:
      return { ...state };
  }
}
