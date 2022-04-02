import style from "./WelcomePage.module.css";
import Header from "../../components/Header/Header";
 
export default function Login() {
    return (
        <div>
            <Header login signup />
            <section className={style.sec1}>
                <div className={style.desc1}>
                    <p className={style.title}>Trello helps teams move work forward.</p>
                    <p className={style.subtitle}>Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique—accomplish it all with Trello.</p>
                    <div className={style.subscribeForm}>
                        <input placeholder="Example.info.com" type="text" className={style.subInput} />
                        <button className={style.subButton}>Sign up-it's free</button>
                    </div>
                </div>
                <div className={style.sec1Image}></div>
            </section>
            <section className={style.sec2}>
                <div className={style.sub2}>
                    <div className={style.desc2}>
                        <p className={style.title2}>It's more than work. It's a way of working together.</p>
                        <p className={style.subtitle2}>
                            Start with a Trello board, lists, and cards. Customize and expand with more features as your teamwork grows. Manage projects, organize tasks, and build team spirit—all in one place.
                        </p>
                        <button className={style.descButton}>Start doing <i className="fa fa-arrow-right"></i></button>
                    </div>
                    <div className={style.boardImage}></div>
                    <div className={style.sec2Footer}>Join over 1,000,000 teams worldwide that are using Trello to get more done.</div>
                </div>
            </section>
        </div>
    )
}
