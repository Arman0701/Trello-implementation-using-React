import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn/SingIn";
import SignInModal from "./pages/SignInModal/SignInModal";
import HomePage from "./pages/HomePage/HomePage";

export default function App() {
    return <>
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-in" element={<SignInModal />} />
            <Route path="/home" element={<HomePage />} />
            {/* <Route path="/" element={<SignIn />} /> */}
            {/* <Route path="/" element={<SignIn />} /> */}
        </Routes>
    </>
}