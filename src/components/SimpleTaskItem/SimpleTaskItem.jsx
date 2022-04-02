import style from "./SimpleTaskItem.module.css";
import { useRef, useState } from "react";

export default function SimpleTaskItem({ item }) {
    const nameRef = useRef(null);
    const [ edited, setedited ] = useState(true);
    const [ value, setValue ] = useState(item.title);
    const [ descValue, setDescValue ] = useState(item.description);
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    const handleEdit = () => {
        setedited(!edited);
        nameRef.current.focus();
    };
    const handleDescChange = (e) => {
        setDescValue(e.target.value);
    };
    const bgColor = () => {
        switch (item.priority) {
            case "low":
                return "rgb(0,0,200)";
            case "medium":
                return "rgb(0,200,0)";
            case "high":
                return "rgb(200,0,0)";
        }
    };

    return (
        <div className={style.simpleTaskItem}>
            <div className={style.taskNameBlock}>
                <input
                    ref={nameRef}
                    value={value}
                    readOnly={edited}
                    onChange={handleChange}
                    className={style.taskName}
                    />
                <i onClick={handleEdit} className="fa fa-marker"></i>
            </div>
            <div>
                <p
                    style={{ backgroundColor: bgColor() }}
                    className={style.priority}
                >
                    {item.priority}
                </p>
            </div>
            <textarea
                rows={6}
                value={descValue}
                onChange={handleDescChange}
                className={style.description}
            />
        </div>
    );
}
