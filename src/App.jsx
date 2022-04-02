import "./App.module.css";
import { Route, Routes } from "react-router-dom";

import WelcomePage from "./pages/WelcomePage/WelcomePage";
import SignInModal from "./pages/SignInModal/SignInModal";
import HomePage from "./pages/HomePage/HomePage";
import BoardSinglePage from "./pages/BoardSinglePage/BoardSinglePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Profile from "./pages/ProfilePage/Profile";

export default function App() {
    localStorage.setItem('login', '123');
    localStorage.setItem('pass', '123');
    
    return <>
        <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/log-in" element={<SignInModal />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/boards/board/:boardID" element={<BoardSinglePage />} />

            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    </>
}