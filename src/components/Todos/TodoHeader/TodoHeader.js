function TodoHeader({ addClass }) {

    return(
      <header className="todo__header">
          <button className="todo__header--btn" onClick={ addClass }>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
          </button>
          <h1 className="todo__header--title">My Tasks</h1>
      </header>
    );
}

export default TodoHeader;