import style from "./Header.module.css";
import signinIcon from "../../assets/icons/signinIcon.svg";
import loginIcon from "../../assets/icons/loginIcon.svg";
import diamondIcon from "../../assets/icons/diamondIcon.svg";
import gearIcon from "../../assets/icons/gearIcon.svg";
import userIcon from "../../assets/icons/userIcon.svg";
import plusIcon from "../../assets/icons/plusIcon.svg";

import { Link } from "react-router-dom";

export default function Header({ createTask, createBoard, login, signup, logout, boards, profile, settings }) {
    return (
        <div className={style.header}>
            <div className={style.logo}>
                <div className={style.logoImage}></div>
                Trello
            </div>
            <div className={style.buttons}>
                {createTask && (
                    <div className={style.button}>
                        <img className={style.btnImage} src={plusIcon} alt="555"/>
                        Create task
                    </div>
                )}
                {boards && (
                    <div className={style.button}>
                        <img className={style.btnImage} src={diamondIcon} alt="555"/>
                        Boards
                    </div>
                )}
                {createBoard && (
                    <div className={style.button}>
                        <img className={style.btnImage} src={plusIcon} alt="555"/>
                        Create board
                    </div>
                )}
                {profile && (
                    <div className={style.button}>
                        <img className={style.btnImage} src={userIcon} alt="555" />
                        Profile
                    </div>
                )}
                {settings && (
                    <div className={style.button}>
                        <img className={style.btnImage} src={gearIcon} alt="555" />
                        Settings
                    </div>
                )}
                {login && 
                    <Link to='/log-in' >
                        <div className={style.button}>
                            <img className={style.btnImage_rotated} src={loginIcon} alt="555" />
                            Log in
                        </div>
                    </Link>
                }
                {signup && (
                    <div className={style.button}>
                        <img className={style.btnImage} src={loginIcon} alt="555" />
                        Sign up
                    </div>
                )}
                {logout && (
                    <div className={style.button}>
                        <img className={style.btnImage} src={signinIcon} alt="555" />
                        Logout
                    </div>
                )}
            </div>
        </div>
    );
}
