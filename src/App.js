import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./pages/user";
import Home from "./pages/home";
import SignIn from "./pages/signIn";
import ErrorPage from "./pages/404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
