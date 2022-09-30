import { HiOutlineTrash } from 'react-icons/hi';
import styles from './Task.module.css';

interface Todo{
  id: number;
  descricao: string;
  situacao: boolean
}

interface TaskProps{
  tasks: Todo[],
  handleCheckTodo: (id: number) => void;
  handleDeleteTask: (id: number) => void;
}

export function Task({ tasks, handleCheckTodo, handleDeleteTask }: TaskProps){
  
  return(
    <div className={styles.tasksFull}>
      {tasks.map(task => {
        return(
          <div 
            key={task.id}
            className={styles.taskItem}  
          >
            <div className={styles.taskLeft}>
              <div className={styles.inputCheckbox}>
                <input 
                  type="checkbox"  
                  id='checkbox' 
                  onClick={() => handleCheckTodo(task.id)}
                />
              </div>
              
              <p className={task.situacao ? styles.descriptonSelected : ''}>{task.descricao}</p>
            </div>
            <button 
              className={styles.trashIcon}
              onClick={() => handleDeleteTask(task.id)}
            >
              <HiOutlineTrash size={14} />
            </button>
          </div> 
        )
      })}
    </div>
  )
}