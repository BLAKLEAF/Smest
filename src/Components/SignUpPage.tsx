import { ChangeEvent, FormEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context/Context";
import { ActionType } from "../Reducer/Reducer";
import {
  Button,
  Input,
  SignUpPageForm,
} from "../Styled-Components/Styled-Components";

function SignUpPage() {
  let { state, dispatch } = useContext(Context);
  let { user } = state;
  let navigate = useNavigate();
  const GENDER = ["Male", "Female", "Other"];

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
    dispatch({
      type: ActionType.HANDLE_SIGNUP_FORM_SUBMIT,
      payload: { user },
    });
    dispatch({
      type: ActionType.MODAL_STATE,
      payload: {
        modal: {
          openModal: true,
          messageTitle: "👍",
          message:
            "Successfully Signed Up! \n Proceed to sign in with your credentials.",
        },
      },
    });
    dispatch({
      type: ActionType.CLEAN_UP,
    });
    navigate("/login");
  };

  return (
    <SignUpPageForm onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      <Input
        name="firstName"
        value={user?.firstName}
        onChange={handleChange}
        fullWidth
        label="First Name"
        size="medium"
        required
      />
      <Input
        name="surName"
        value={user?.surName}
        onChange={handleChange}
        fullWidth
        label="Last Name"
        size="medium"
        required
      />
      <Input
        name="mobileNumber"
        value={user?.mobileNumber}
        onChange={handleChange}
        fullWidth
        label="Mobile Number"
        size="medium"
        required
        type={"number"}
      />
      <Input
        name="email"
        value={user?.email}
        onChange={handleChange}
        fullWidth
        label="Email"
        size="medium"
        required
        type="email"
      />
      <Input
        name="dateOfBirth"
        value={user?.dateOfBirth}
        onChange={handleChange}
        fullWidth
        label="Date of Birth"
        size="medium"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
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
      <section>
        {GENDER.map((value, index) => (
          <span key={index}>
            <input
              onChange={handleChange}
              value={value}
              type="radio"
              name="gender"
              checked={user?.gender === value}
            />
            <label>{value}</label>
          </span>
        ))}
      </section>
      <Button type="submit">Submit</Button>
    </SignUpPageForm>
  );
}

export default SignUpPage;
