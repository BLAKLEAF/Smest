import { ChangeEvent, FormEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context/Context";
import { ActionType } from "../Reducer/Reducer";
import {
  Input,
  LoginForm,
  Button,
} from "../Styled-Components/Styled-Components";

function LogInPage() {
  let { state, dispatch } = useContext(Context);
  let { user, users } = state;
  let navigate = useNavigate();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.currentTarget;
    dispatch({
      type: ActionType.HANDLE_INPUT_CHANGE,
      key: name,
      value: value,
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    let response = users?.some((value) => {
      if (
        value.mobileNumber === user?.mobileNumber &&
        value.password === user.password
      ) {
        return true;
      } else {
        return false;
      }
    });

    if (response) {
      dispatch({
        type: ActionType.CLEAN_UP,
      });
      dispatch({ type: ActionType.LOGGED_IN, payload: { loggedIn: true } });
      navigate("/dashboard");
    } else {
      dispatch({
        type: ActionType.MODAL_STATE,
        payload: {
          modal: {
            openModal: true,
            message: "Wrong Credentials Supplied",
            messageTitle: "🤨",
          },
        },
      });
    }
  };

  return (
    <LoginForm onSubmit={handleSubmit}>
      <h3>Sign In</h3>
      <Input
        name="mobileNumber"
        value={user?.mobileNumber}
        onChange={handleChange}
        fullWidth
        label="Mobile Number"
        size="medium"
        required
      />
      <Input
        name="password"
        value={user?.password}
        onChange={handleChange}
        fullWidth
        label="Password"
        size="medium"
        required
      />
      <Button type="submit">Submit</Button>
    </LoginForm>
  );
}

export default LogInPage;
