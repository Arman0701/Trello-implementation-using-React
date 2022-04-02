import style from "./Header.module.css";
import signinIcon from "../../assets/icons/signinIcon.svg";
import loginIcon from "../../assets/icons/loginIcon.svg";
import diamondIcon from "../../assets/icons/diamondIcon.svg";
import gearIcon from "../../assets/icons/gearIcon.svg";
import userIcon from "../../assets/icons/userIcon.svg";
import plusIcon from "../../assets/icons/plusIcon.svg";

import { Link } from "react-router-dom";

export default function Header({ 
    login, signup,
    logout, logoutHandler,
    boards, boardsHandler,
    profile, profileHandler,
    settings, settingsHandler,
    createTask, createTaskHandler,
    createBoard, createBoardHandler,
}) {
    return (
        <div className={style.header}>
            <Link to='/home'>
                <div className={style.logo}>
                    <div className={style.logoImage}></div>
                    Trello
                </div>
            </Link>
            <div className={style.buttons}>
                {createTask && (
                    <div onClick={createTaskHandler} className={style.button}>
                        <img className={style.btnImage} src={plusIcon} alt="icons"/>
                        Create task
                    </div>
                )}
                {boards && (
                    <Link to='/home'>
                        <div onClick={boardsHandler} className={style.button}>
                            <img className={style.btnImage} src={diamondIcon} alt="icons"/>
                            Boards
                        </div>
                    </Link>
                )}
                {createBoard && (
                    <div onClick={createBoardHandler} className={style.button}>
                        <img className={style.btnImage} src={plusIcon} alt="icons"/>
                        Create board
                    </div>
                )}
                {profile && (
                    <Link to='/profile'>
                        <div onClick={profileHandler} className={style.button}>
                            <img className={style.btnImage} src={userIcon} alt="icons" />
                            Profile
                        </div>
                    </Link>
                )}
                {settings && (
                    <Link to='/settings'>
                        <div onClick={settingsHandler} className={style.button}>
                            <img className={style.btnImage} src={gearIcon} alt="icons" />
                            Settings
                        </div>
                    </Link>
                )}
                {login && 
                    <Link to='/log-in' >
                        <div className={style.button}>
                            <img className={style.btnImage_rotated} src={loginIcon} alt="icons" />
                            Log in
                        </div>
                    </Link>
                }
                {signup && (
                    <Link to='/sign-up'>
                        <div className={style.button}>
                            <img className={style.btnImage} src={loginIcon} alt="icons" />
                            Sign up
                        </div>
                    </Link>
                )}
                {logout && (
                    <Link to='/'>
                        <div onClick={logoutHandler} className={style.button}>
                            <img className={style.btnImage} src={signinIcon} alt="icons" />
                            Logout
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
}
