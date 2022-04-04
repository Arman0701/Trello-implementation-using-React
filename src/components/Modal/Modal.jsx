import style from './Modal.module.css'

export default function Modal({ active, setActive, children }) {
    return (
        <div onClick={() => setActive()} className={active ? style.modal : style.modalActive} >
            <div onClick={e => e.stopPropagation()} className={style.modalContent}>
                {children}
            </div>
        </div>
    );
}