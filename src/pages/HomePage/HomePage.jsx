import { useState, useEffect, useRef, useReducer } from 'react';

import style from './HomePage.module.css';
import Header from '../../components/Header/Header';
import BoardItem from '../../components/BoardItem/BoardItem';
import Modal from '../../components/Modal/Modal';

import sendData from '../../helpers/sendData';
import getData from '../../helpers/getData';
import { v1 as getID } from 'uuid'

export default function HomePage() {
    const urlInputRef = useRef(null);
    const nameInputRef = useRef(null);
    const [apiData, setApiData] = useState(null);
    const [modalIsActive, setModalIsActive] = useState(true);

    useEffect(() => {
        if (!apiData) {
            getData("https://624084882aeb48a9af74b006.mockapi.io/boards/")
            .then(res => {
                setApiData(res);
            })
        }
    }, [apiData]);

    useEffect(() => {
        console.log(apiData);
        // sendData("https://624084882aeb48a9af74b006.mockapi.io/boards/", apiData);
    }, [apiData]);

    function addNewBoard() {
        // dispatch({
        //     type: 'addBoard',
        //     value: {
        //         id: getID(),
        //         name: nameInputRef.current.value,
        //         imageURL: urlInputRef.current.value,
        //         tasks: 0
        //     }
        // })  
        setApiData([
            ...apiData,
            {
                id: getID(),
                name: nameInputRef.current.value,
                imageURL: urlInputRef.current.value,
                tasks: 0
            }
        ])
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
                        { apiData && apiData.map(item => 
                            <BoardItem 
                                board={item} 
                                state={apiData}
                                setState={setApiData}
                                key={item.id} 
                            />
                        )}
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