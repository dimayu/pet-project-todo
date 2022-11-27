import {useState} from "react";
import { RiCheckboxCircleLine, RiDeleteBinLine,RiPencilLine } from "react-icons/ri";

function TodoList({ todos, setTodos, deleteTodo, toggleTodo }) {
    const [valueTitle, setTitle] = useState("");
    const [valueDescription, setDescription] = useState("");

    const setIsEdit = (id, title, description) => {
        setTodos(todos.map((todo) => {
            return todo.id === id
                ? {...todo, isEdit: !todo.isEdit}
                : {...todo, isEdit: false}
        }))
        setTitle(title);
        setDescription(description);
    };

    const editTodo = (id) => {
        setTodos(todos.map((todo) => {
            return todo.id === id
                ? {...todo, isEdit:false, title: valueTitle, description: valueDescription}
                : {...todo}
        }))
    }


    return(
          <div className="todo-wrapper">
              {todos.map((todo) => (
                  <div
                      className={`todo__list ${todo.isCompleted ? "todo__list--completed" : ""}`}
                      key={todo.id}
                  >
                      {todo.isEdit
                          ? <>
                              <input
                                  value={valueTitle}
                                  onChange={(e) => setTitle(e.target.value)}
                                  className="todo__list--input"
                              />
                              <input
                                  value={valueDescription}
                                  onChange={(e) => setDescription(e.target.value)}
                                  className="todo__list--input"
                              />
                              <button
                                  className="btn"
                                  type="submit"
                                  onClick={() => editTodo(todo.id)}
                              >
                                  save
                              </button>
                              <button
                                  className="btn"
                                  onClick={() => setIsEdit(false)}
                              >
                                  cancel
                              </button>
                          </>
                          : <>
                              <RiCheckboxCircleLine
                                  className="icon icon-check"
                                  onClick={() => toggleTodo(todo.id)}
                              />
                              <div className="todo__list--content">
                                  <h2 className="todo__list--title">{todo.title}</h2>
                                  <h3 className="todo__list--description">{todo.description}</h3>
                              </div>
                              <div className="todo__list--right">
                                  <RiDeleteBinLine
                                      className="icon icon-delete"
                                      onClick={() => deleteTodo(todo.id)}
                                  />
                                  <RiPencilLine
                                      className="icon icon-edit"
                                      onClick={() => setIsEdit(todo.id, todo.title, todo.description)}
                                  />
                              </div>
                            </>
                      }
                  </div>
              ))}
          </div>
    );
}

export default TodoList;