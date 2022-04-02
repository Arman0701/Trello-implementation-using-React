import style from './NotFoundPage.module.css'

import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';

export default function NotFoundPage() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(window.history.back())
    }

    return (
        <>
            <Header />
            <div className={style.message}>
                <p className={style.text}>Page not found. Please check your URL again.</p> 
                <div className={style.location}>{window.location.href}</div>
                <div onClick={handleClick} className={style.button}><i className="fa fa-chevron-left"></i> Go Back</div>
            </div>
        </>
    );
}