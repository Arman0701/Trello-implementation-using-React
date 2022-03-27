import Logo from '../../components/Logo/Logo';
import style from './style.module.css';

export default function HomePage() {

    return (
        <div className={style.homePage}>
            <div className={style.header}>
                <Logo />
                <div className={style.profileBtn}>Profile</div>
            </div>
            <div className={style.main}>

                {/* there will be mapped some boards with <BoardItem /> component */}

            </div>
        </div>
    );
}