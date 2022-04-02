import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "./BoardSinglePage.module.css";
import Header from '../../components/Header/Header';

import filter from "../../helpers/filtering_helper";
import capitalize from "../../helpers/capitalize_helper";
import getData from "../../helpers/getData.js";

import SimpleTaskItem from "../../components/SimpleTaskItem/SimpleTaskItem";

export default function BoardSinglePage() {
    const [ localState, setLocalState ] = useState(null);
    const [ filtered, setFiltered ] = useState(false);
    const params = useParams();
    
    useEffect(() => {
        if (!localState) {
            getData(`https://624084882aeb48a9af74b006.mockapi.io/tasks/?boardID=${params.boardID}`)
            .then(res => setLocalState(res.items[0]));
        }
    }, [localState, params.boardID]);

    useEffect(() => {
        if (localState) {
            setFiltered(filter(localState.tasks, 'status', 'todo', 'doing', 'done'));
        }
    }, [localState]);

    return (
        <div className={style.boardSinglePage}>
            <Header createTask logout profile settings boards tasks />
            { localState && <p className={style.boardTitle}>{capitalize(localState.name)} Tasks</p> }
            <div className={style.boardMain}>
                {   
                    filtered.todo &&
                    <div className={style.tasksCol}>{
                        filtered.todo.map(item => <SimpleTaskItem key={item.id} item={item} />)
                    }</div>
                }
                {   
                    filtered.doing &&
                    <div className={style.tasksCol}>{
                        filtered.doing.map(item => <SimpleTaskItem key={item.id} item={item} />)
                    }</div>
                }
                {   
                    filtered.done &&
                    <div className={style.tasksCol}>{
                        filtered.done.map(item => <SimpleTaskItem key={item.id} item={item} />)
                    }</div>
                }
            </div>
        </div>
    );
}
