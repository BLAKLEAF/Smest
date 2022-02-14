import styled from "styled-components";
import TextField from "@mui/material/TextField";

const Sign_Up_IN_Underline_h3 = `
h3 {
  margin-bottom: 10px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    height: 3px;
    width: 100%;
    background: linear-gradient(90deg, #ac32e4 0%, #7918f2 48%, #4801ff 100%);
  }
}
`;

const Position_Center = `
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Flex_Between_Center = `
display: flex;
justify-content: space-between;
align-items: center;
`;

export const Input = styled(TextField)({
  root: { margin: "5px" },
  "& label": {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "bold",
    color: "aliceblue",
  },
  "& label.Mui-focused": {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "bold",
    color: "#EC4F56",
  },
  "& .MuiInput-underline:after": {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "bold",
    borderBottomColor: "aliceblue",
  },
  "& .MuiInputBase-root": {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "bold",
    color: "aliceblue",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "3px solid",
      borderRadius: "10px",
      borderColor: "aliceblue",
    },
    "&:hover fieldset": {
      border: "3px solid",
      borderColor: "aliceblue",
    },
    "&.Mui-focused fieldset": {
      border: "3px solid",
      borderColor: "aliceblue",
    },
  },
});

export const Button = styled.button`
  border: 3px solid aliceblue;
  padding: 6px;
  background: transparent;
  color: aliceblue;
  font-weight: bolder;
  font-family: Poppins, "sans-serif";
  /* border-radius: 20px; */
  width: 90px;

  &:hover {
    background-color: aliceblue !important;
    color: #ec4f56 !important;
    cursor: pointer;
  }
`;

export const NavbarDiv = styled.nav.attrs(
  (props: { loggedIn: boolean }) => props
)`
  background: #121212;
  position: fixed;
  top: 0;
  padding: 0 5%;
  width: 100%;
  height: 100px;
  z-index: 9;
  ${Flex_Between_Center}
  box-sizing: border-box;
  section {
    ${Flex_Between_Center}
    width: ${(props) => (props.loggedIn ? "max-content" : "200px")};
  }
`;

export const SignUpPageForm = styled.form`
  ${Position_Center}
  width: 400px;
  height: 650px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  border: 3px solid aliceblue;
  border-radius: 20px;
  padding: 30px;
  ${Sign_Up_IN_Underline_h3}
  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

export const LoginForm = styled.form`
  ${Position_Center}
  border: 3px solid aliceblue;
  border-radius: 20px;
  padding: 30px;
  width: 400px;
  height: 300px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  ${Sign_Up_IN_Underline_h3}
`;

export const Modal_Box_Style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 500,
  color: "#ffc3a0",
  bgcolor: "#404040",
  border: "none !important",
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
};

export const DashBoardDiv = styled.div`
  margin: 120px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  section {
    width: 550px;
    height: 700px;
    overflow-y: hidden;
    border: 3px solid aliceblue;
    border-radius: 10px;
    padding: 10px;
    ${Flex_Between_Center}
    align-items: flex-start;
    flex-direction: column;
    ${Sign_Up_IN_Underline_h3}
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
    p {
      font-size: 15px;
    }
  }
`;
