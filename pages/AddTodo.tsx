import { FC, useState } from "react";

interface AddTodoProps {
    onAddTodo: (description: string) => void;
}

export const AddTodo: FC<AddTodoProps> = ({ onAddTodo}) => {
    const [description, setDescription] = useState('');

    const onSubmit = (evt) => {
        evt.preventDefault();
        
        if(description && description.trim()){
            onAddTodo(description.trim());
            setDescription('');
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={description} onChange={e => setDescription(e.target.value)}></input>
            <button type="submit">DO IT!</button>
        </form>
    )
}