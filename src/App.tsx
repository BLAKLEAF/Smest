import { useReducer, lazy, Suspense } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ActionType, initialState, reducerfunction } from "./Reducer/Reducer";
import { Context } from "./Context/Context";
import Navbar from "./Components/Navbar";
import ModalPage from "./Components/ModalPage";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Modal_Box_Style } from "./Styled-Components/Styled-Components";
const LogInPage = lazy(() => import("./Components/LogInPage"));
const SignUpPage = lazy(() => import("./Components/SignUpPage"));
const Dashboard = lazy(() => import("./Components/Dashboard"));

function App() {
  const [state, dispatch] = useReducer(reducerfunction, initialState);
  const { loggedIn } = state;
  return (
    <Router>
      <div className="App">
        <Context.Provider value={{ state, dispatch }}>
          <Navbar />
          <Suspense
            fallback={
              <Box sx={Modal_Box_Style}>
                <CircularProgress />
              </Box>
            }
          >
            <Routes>
              <Route path="/" element={<Navigate to="signup" />} />
              <Route path="signup" element={<SignUpPage />} />
              <Route path="login" element={<LogInPage />} />
              <Route
                path="dashboard"
                element={loggedIn ? <Dashboard /> : <LogInPage />}
              />
            </Routes>
          </Suspense>
          <ModalPage />
        </Context.Provider>
      </div>
    </Router>
  );
}

export default App;
