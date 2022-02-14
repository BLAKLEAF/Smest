import { Button, NavbarDiv } from "../Styled-Components/Styled-Components";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context/Context";
import { ActionType } from "../Reducer/Reducer";

function Navbar() {
  let { state, dispatch } = useContext(Context);
  let { loggedIn } = state;
  let navigate = useNavigate();

  return (
    <NavbarDiv loggedIn={loggedIn}>
      <img src="https://smest.in/static/media/logo.a0aaa1b9.svg" alt="" />
      <section>
        {!loggedIn ? (
          <>
            <Link to="signup">
              <Button>Sign Up</Button>
            </Link>
            <Link to="login">
              <Button>Sign In</Button>
            </Link>
          </>
        ) : (
          <Button
            onClick={() => {
              dispatch({
                type: ActionType.LOGGED_IN,
                payload: { loggedIn: false },
              });
              navigate("/login");
            }}
          >
            Sign Out
          </Button>
        )}
      </section>
    </NavbarDiv>
  );
}

export default Navbar;
