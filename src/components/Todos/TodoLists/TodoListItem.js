function TodoListItem(props) {
    const { todos } = props;

    return(
        <div className="todo__list">
            <h2 className="todo__list--title">{todos.title}</h2>
            <p className="todo__list--description">{todos.text}</p>
        </div>
    );
}

export default TodoListItem;