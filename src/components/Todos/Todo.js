import {useState} from "react";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function Todo() {
    return(
        <>
            <main className="todo">
                <div className="wrapper">
                    <TodoHeader />
                    <TodoList />
                </div>
                <TodoForm />
            </main>
        </>
    );
}

export default Todo;