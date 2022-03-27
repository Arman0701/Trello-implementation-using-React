import style from './style.module.css'

export default function BoardItem() {

    return (
        <div className={style.boardItem}>
            <div className={style.boardName}>Board Name</div>
            <div className={style.allTasks}>All Tasks: 15</div>
        </div>
    );
}