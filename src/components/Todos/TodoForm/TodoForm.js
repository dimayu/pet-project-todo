import {useState} from "react";

function TodoForm( { addTodo } ) {
    const [addClass, setAddClass] = useState(false);
    function handleClick() {
        setAddClass(addClass => !addClass);
    }
    let toggleClassCheck = addClass ? ' active' : '';

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const handleAddTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleAddDescription = (e) => {
        setDescription(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        addTodo(title,description);
    }

    return(
        <div className={`todo__add${toggleClassCheck}`}>
            <button className="todo__btn-add" onClick={handleClick}>+</button>
            <form
                  className="todo__form"
                  onSubmit={onSubmitHandler}
            >
                <div className="todo__form--close" onClick={handleClick}>&#9587;</div>
                <p>Todo Title</p>
                <input
                    value={title}
                    onChange={handleAddTitle}
                    type="text"
                    placeholder="Todo title....."
                    className="todo__form--input"
                />
                <p>Todo Description</p>
                <input
                    value={description}
                    onChange={handleAddDescription}
                    type="text"
                    placeholder="Todo description....."
                    className="todo__form--input"
                />
                <button className="todo__form--btn" type="submit" >Save</button>
            </form>
        </div>
    );
}

export default TodoForm;