import { FC } from "react";
import { Todo } from "./todo.models";

export const TodoItem: FC<{todo: Todo}> = ({ todo }) => {
    return (
        <li>{todo.description}</li>
    )
}
