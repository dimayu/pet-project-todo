import {useState} from "react";

function TodoForm() {
    const [adClass, setAdClass] = useState("todo__add");

    return(
        <div className={adClass}>
            <button className="todo__btn-add" onClick={() => setAdClass(adClass + " active")}>+</button>
            <form action="" className="todo__form">
                <div className="todo__form--close" onClick={() => setAdClass("todo__add")}>&#9587;</div>
                <p>Todo Title</p>
                <input type="text" placeholder="Todo title....." className="todo__form--input"/>
                <p>Task</p>
                <input type="text" placeholder="Write anything in your mind" className="todo__form--input"/>
                <button className="todo__form--btn">Save</button>
            </form>
        </div>
    );
}

export default TodoForm;