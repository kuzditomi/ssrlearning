import { FC } from "react";
import { Todo } from "./todo.models";
import { TodoItem } from "./TodoItem";

interface TodoListProps{
    todos: Todo[];
}

export const TodoList: FC<TodoListProps> = ({ todos }) => {
    return (
        <ul>
            {todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)}
        </ul>
    )
}