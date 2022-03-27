import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import styles from './style.module.css';

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
        <div className={styles.modalWrapper}>
            <div className={styles.modal}>
                <div onClick={toggleLoginWindow} className={styles.modalLogo}>
                    <div className={styles.modalLogoImage}></div>
                    Trello
                </div>
                <div className={styles.modalMain}>
                    <p className={styles.modalTitle}>Login to Trello</p>
                    <input onKeyDown={handleKeyPress} ref={inputRef} placeholder='Enter login' autoFocus type="text" className={styles.loginInput} />
                    <input onKeyDown={handleKeyPress} ref={passwordRef} placeholder='Enter password' type="text" className={styles.passInput} />
                    <div onClick={handleUserLogin} className={styles.submitButton}>Log in</div>
                </div>
            </div>
        </div>
    );
}