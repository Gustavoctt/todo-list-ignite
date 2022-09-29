import { AiOutlinePlusCircle } from 'react-icons/ai';

import styles from './AddNewTask.module.css';

export function AddNewTask(){
  return(
    <form>
      <input 
        className={styles.inputNewTask}
        type="text" 
        placeholder='Adicione uma nova tarefa'  
      />
      <button className={styles.buttonCreate}>
        Criar
        <AiOutlinePlusCircle />
      </button>
    </form>
  )
}