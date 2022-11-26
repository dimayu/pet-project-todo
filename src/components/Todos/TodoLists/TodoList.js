import {useState} from "react";
import { RiCheckboxCircleLine, RiDeleteBinLine,RiPencilLine } from "react-icons/ri";

function TodoList({ todos, deleteTodo, toggleTodo, editTodo, toggleIsEdit, todo }) {
    const [valueTitle, setTitle] = useState("");
    const [valueDescription, setDescription] = useState("");
    const handleEditTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleEditDescription = (e) => {
        setDescription(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        editTodo(valueTitle, valueDescription);
    }

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
                      <div className="todo__list--content">
                          { todo.isEdit
                              ? <form onSubmit={onSubmitHandler}>
                                  <input
                                        value={valueTitle}
                                        onChange={handleEditTitle}
                                        className="todo__list--input"
                                  />
                                  <input
                                      value={valueDescription}
                                      onChange={handleEditDescription}
                                      className="todo__list--input"
                                  />
                                  <button
                                      className="btn"
                                      type="submit"
                                  >
                                      ok
                                  </button>
                                  <button
                                      className="btn"
                                      onClick={() => toggleIsEdit(false)}
                                  >
                                      cancel
                                  </button>
                                </form>
                              : <>
                                  <h2 className="todo__list--title">{todo.title}</h2>
                                  <h3 className="todo__list--description">{todo.description}</h3>
                                </>
                          }
                      </div>
                      <div className="todo__list--right">
                          <RiDeleteBinLine
                              className="icon icon-delete"
                              onClick={() => deleteTodo(todo.id)}
                          />
                          <RiPencilLine
                              className="icon icon-edit"
                              onClick={() => toggleIsEdit(todo.id)}
                          />
                      </div>
                  </div>
              ))}
          </div>
    );
};

export default TodoList;