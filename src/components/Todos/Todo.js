import {useState} from "react";
import {v4 as uuidv4} from "uuid";
import TodoHeader from "./TodoHeader/TodoHeader";
import TodoList from "./TodoLists/TodoList";
import TodoForm from "./TodoForm/TodoForm";

function Todo() {
    const [todos, setTodos] = useState([]);
    const addTodoHandler = (title, description) => {
        const newTodo = {
            title: title,
            description: description,
            isCompleted: false,
            isEdit: false,
            id: uuidv4()
        };
        setTodos([...todos, newTodo]);
    };

    const deleteTodoHandler = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    };

    const [addClassBlock, setAddClassBlock] = useState(false);

    function handleClick() {
        setAddClassBlock(addClassBlock => !addClassBlock);
    }

    let toggleClassCheck = addClassBlock ? ' todo-grid' : '';

    const toggleTodoHandler = (id) => {
        setTodos(todos.map((todo) => {
            return todo.id === id
                ? {...todo, isCompleted: !todo.isCompleted}
                : {...todo}
        }))
    };

    const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;


    // const editTodoHandler = (id) => {
    //     setTodos(todos.map((todo) => {
    //         return todo.id === id
    //             ? {...todo, isEdit:false, title: todo.title, description: todo.description}
    //             : {...todo}
    //     }))
    //     console.log(2);
    // };

    return (
        <>
            <main className={`todo${toggleClassCheck}`}>
                <div className="wrapper">
                    <TodoHeader addClass={handleClick}/>
                    {!todos.length && <h2>Todo list is empty</h2>}
                    <TodoList
                        todos={todos}
                        setTodos={setTodos}
                        deleteTodo={deleteTodoHandler}
                        toggleTodo={toggleTodoHandler}
                    />
                </div>
                {completedTodosCount > 0 && (
                    <h3 className="title--completed">
                        {`You have completed 
                        ${completedTodosCount} ${completedTodosCount > 1
                            ? 'todos'
                            : 'todo'
                        }`}</h3>)
                }
                <TodoForm
                    addTodo={addTodoHandler}
                />
            </main>
        </>
    );
}

export default Todo;