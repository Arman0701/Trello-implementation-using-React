import { Link } from 'react-router-dom';
import style from './BoardItem.module.css';

export default function BoardItem(props) {
    return (
        <Link to={`/boards/board/${props.board.id}`} className={style.boardItem}>
            <div style={{ backgroundImage: `url(${props.board.imageURL})` }} className={style.boardImage}></div>
            <div>
                <div className={style.boardName}>{ props.board.name }</div>
                <div className={style.allTasks}>All Tasks: { props.board.tasks }</div>
            </div>
        </Link>
    );
}