import style from './style.module.css'

export default function Logo() {

    return (
        <div>
            <div className={style.logo}>
                <div className={style.logoImage}></div>
                Trello
            </div>
        </div>
    );
}