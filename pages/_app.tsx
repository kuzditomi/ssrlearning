import { FC, useState } from 'react'
import '../styles/globals.css'
import { AddTodo } from './AddTodo';
import { Todo } from './todo.models';
import { TodoList } from './TodoList';
import { useId } from './useId';

const TodoApp: FC = () => {
  const { getNewid } = useId();
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: getNewid(),
      description: 'prepare with react'
    },
    {
      id: getNewid(),
      description: 'learn about ssr'
    },
    {
      id: getNewid(),
      description: 'pass the interview'
    }
  ])

  const onAddTodo = (description) => {
    setTodos([
      ...todos,
      {
        id: getNewid(),
        description
      }
    ])
  }

  return (
    <main>
      <h1>Todo</h1>
      <AddTodo onAddTodo={onAddTodo} />

      <TodoList todos={todos}></TodoList>
    </main>
  );
}

export default TodoApp;
