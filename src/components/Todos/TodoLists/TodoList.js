import { RiCheckboxCircleLine, RiDeleteBinLine } from "react-icons/ri";

function TodoList({ todos, deleteTodo, toggleTodo }) {

    return(
          <div className="todo-wrapper">
              {todos.map((todo) => (
                  <div
                      className={`todo__list ${todo.isCompleted ? "todo__list--completed" : ""}`}
                      key={todo.id}
                  >
                      <RiCheckboxCircleLine
                          className="icon icon-check"
                          onClick={() => toggleTodo(todo.id)}
                      />
                      <h2 className="todo__list--title">{todo.title}</h2>
                      <h2 className="todo__list--title">{todo.description}</h2>
                      <RiDeleteBinLine
                          className="icon icon-delete"
                          onClick={() => deleteTodo(todo.id)}
                      />
                  </div>
              ))}
          </div>
    );
};

export default TodoList;