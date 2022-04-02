import { useState, useEffect, useRef } from 'react';

import style from './HomePage.module.css';
import Header from '../../components/Header/Header';
import BoardItem from '../../components/BoardItem/BoardItem';
import Modal from '../../components/Modal/Modal'

import getData from '../../helpers/getData';
import { v1 as getID } from 'uuid'

export default function HomePage() {
    const urlInputRef = useRef(null);
    const nameInputRef = useRef(null);
    const [state, dispatch] = useState();
    const [ modalIsActive, setModalIsActive ] = useState(true);

    useEffect(() => {
        if (!state) {
            getData("https://624084882aeb48a9af74b006.mockapi.io/boards/")
            .then(res => {
                dispatch({
                    type: 'load',
                    value: res,
                })
            })
        }
    }, [state]);

    useEffect(() => {
        console.log(state);
    })

    function addNewBoard() {
        dispatch({
            type: 'addBoard',
            value: [{
                id: getID(),
                name: nameInputRef.current.value,
                imageURL: urlInputRef.current.value,
                tasks: 0
            }]
        })
        urlInputRef.current.value = '';
        nameInputRef.current.value = '';
    }
    function toggleModal() {
        setModalIsActive(!modalIsActive);
    }
       
    return (
        <div className={style.homePage}>
            <Header createBoard logout profile settings createBoardHandler={toggleModal} />
            <div className={style.main}>
                <div className={style.blur}>
                    <div className={style.items}>
                        { state ? state.value.map(item => <BoardItem key={item.id} board={item} />) : null }
                    </div>
                </div>
            </div>
            <Modal active={modalIsActive} setActive={toggleModal}>
                <input ref={urlInputRef} className={style.modalInput} type="text" placeholder='Enter the URL of image' />
                <input ref={nameInputRef} className={style.modalInput} type="text" placeholder='Enter the name of new board' />
                <div onClick={() => {addNewBoard(); toggleModal()}} className={style.modalButton}>Create New Board</div>
            </Modal>
        </div>
    );
}