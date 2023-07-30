import { Route, Routes } from "react-router-dom";
import { LoginPage, SigninPage, SignupPage } from "../pages/login";
import { NotFound } from "../pages";

const LoginRouting = () => {
    return (
      <Routes>
        <Route index element={<LoginPage />} />
        <Route
          path="/signin"
          element={<SigninPage />}
        />
        <Route
          path="/signup"
          element={<SignupPage />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  };
  
export default LoginRouting;