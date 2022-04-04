import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import style from "./BoardSinglePage.module.css";

import filter from "../../helpers/filtering_helper";
import capitalize from "../../helpers/capitalize_helper";
import getData from "../../helpers/getData.js";
import {v1 as getID} from 'uuid';

import Header from '../../components/Header/Header';
import SimpleTaskItem from "../../components/SimpleTaskItem/SimpleTaskItem";
import Modal from "../../components/Modal/Modal";
import sendData from "../../helpers/sendData";

export default function BoardSinglePage() {
    const [ localState, setLocalState ] = useState(null);
    const [ filtered, setFiltered ] = useState(false);
    const [ modalActive, setModalActive ] = useState(true);
    const params = useParams();

    const titleInputRef = useRef(null);
    const priorityInputRef = useRef(null);
    const statusInputRef = useRef(null);
    const descriptionInputRef = useRef(null)
    
    useEffect(() => {
        if (!localState) {
            getData(`https://624084882aeb48a9af74b006.mockapi.io/tasks/?boardID=${params.boardID}`)
            .then(res => setLocalState(res[0]));
        }
    }, [localState, params.boardID]);

    useEffect(() => {
        if (localState) {
            setFiltered(filter(localState.tasks, 'status', 'todo', 'doing', 'done'));
        }
    }, [localState]);

    useEffect(() => {
        console.log(localState);
        // sendData("https://624084882aeb48a9af74b006.mockapi.io/tasks/", localState);
    }, [localState]);

    function addNewTask() {
        setLocalState({
            ...localState,
            tasks: [
                ...localState.tasks,
                {   
                    id: getID(),
                    title: titleInputRef.current.value,
                    status: statusInputRef.current.value,
                    priority: priorityInputRef.current.value,
                    description: descriptionInputRef.current.value,
                }
            ]
        });
        titleInputRef.current.value = '';
        statusInputRef.current.value = '';
        priorityInputRef.current.value = '';
        descriptionInputRef.current.value = '';
    }

    function toggleModal(){
        setModalActive(!modalActive);
    }

    return (
        <div className={style.boardSinglePage}>
            <Header createTask logout profile settings boards tasks createTaskHandler={toggleModal} />
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
            <Modal active={modalActive} setActive={toggleModal} >
                <input ref={titleInputRef} className={style.modalInput} type="text" placeholder='Enter the title of task' />
                <input ref={priorityInputRef} className={style.modalInput} type="text" placeholder='Enter the priority of task (low, medium, high)' />
                <input ref={statusInputRef} className={style.modalInput} type="text" placeholder='Enter the status of task (todo, doing, done)' />
                <input ref={descriptionInputRef} className={style.modalInput} type="text" placeholder='Enter the description' />
                <div onClick={() => {addNewTask(); toggleModal()}} className={style.modalButton}>Create New Task</div>
            </Modal>
        </div>
    );
}
