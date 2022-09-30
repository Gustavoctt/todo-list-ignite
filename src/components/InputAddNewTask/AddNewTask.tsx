import { FormEvent, useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';

import styles from './AddNewTask.module.css';

interface AddNewTaskProps{
  handleAddTodo: (todo: string) => void
}

export function AddNewTask({ handleAddTodo }: AddNewTaskProps){
  const [ description, newDescription ] = useState('');

  function handleAddNewTodo(event: FormEvent){
    event.preventDefault();
    handleAddTodo(description);
    newDescription('');
  }
  
  return(
    <form onSubmit={handleAddNewTodo}>
      <input 
        className={styles.inputNewTask}
        type="text" 
        placeholder='Adicione uma nova tarefa'  
        value={description}
        onChange={(event) => newDescription(event.target.value)}
      />
      <button type='submit' className={styles.buttonCreate}>
        Criar
        <AiOutlinePlusCircle />
      </button>
    </form>
  )
}