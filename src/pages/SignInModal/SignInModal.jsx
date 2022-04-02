import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import style from './SignInModal.module.css';

export default function Modal({ toggleLoginWindow }) {
    const navigate = useNavigate();
    const inputRef = useRef(null);
    const passwordRef = useRef(null);
    const handleUserLogin = () => {
        if (localStorage.getItem('login') === inputRef.current.value &&
            localStorage.getItem('pass') === passwordRef.current.value) {
                setTimeout(() => {
                    navigate('/home');
                }, 500);
            }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleUserLogin();
    }

    return (
        <div className={style.modalWrapper}>
            <div className={style.modal}>
                <div onClick={toggleLoginWindow} className={style.modalLogo}>
                    <div className={style.modalLogoImage}></div>
                    Trello
                </div>
                <div className={style.modalMain}>
                    <p className={style.modalTitle}>Login to Trello</p>
                    <input onKeyDown={handleKeyPress} ref={inputRef} placeholder='Enter login' autoFocus type="text" className={style.loginInput} />
                    <input onKeyDown={handleKeyPress} ref={passwordRef} placeholder='Enter password' type="password" className={style.passInput} />
                    <div onClick={handleUserLogin} className={style.submitButton}>Log in</div>
                </div>
            </div>
        </div>
    );
}