import { useState, useEffect } from 'react';

import style from './HomePage.module.css';
import Header from '../../components/Header/Header';
import BoardItem from '../../components/BoardItem/BoardItem';

import getData from '../../helpers/getData';

export default function HomePage() {
    const [apiData, setApiData] = useState();
    useEffect(() => {   
        if (!apiData){
            getData("https://624084882aeb48a9af74b006.mockapi.io/boards").then(res => setApiData(res));
        }
    }, [apiData]);
       
    return (
        <div className={style.homePage}>
            <Header createBoard logout profile settings />
            <div className={style.main}>
                <div className={style.blur}>
                    <div className={style.items}>
                        { apiData ? apiData.items.map(item => <BoardItem key={item.id} board={item} />) : null }
                    </div>
                </div>
            </div>
        </div>
    );
}