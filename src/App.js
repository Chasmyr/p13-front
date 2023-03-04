import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./components/user";
import Home from "./pages/home";
import SignIn from "./pages/signIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
