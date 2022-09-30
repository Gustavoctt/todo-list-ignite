import { HiOutlineTrash } from 'react-icons/hi';
import styles from './Task.module.css';

interface Todo{
  id: number;
  descricao: string;
  situacao: boolean
}

interface TaskProps{
  tasks: Todo[]
}

export function Task({ tasks }: TaskProps){
  
  return(
    <div className={styles.tasksFull}>
      {tasks.map(task => {
        return(
          <div 
            key={task.descricao}
            className={styles.taskItem}  
          >
            <div className={styles.taskLeft}>
              <div className={styles.inputCheckbox}>
                <input type="checkbox"  id='checkbox' defaultChecked={task.situacao}/>
              </div>
              
              <p>{task.descricao}</p>
            </div>
            <div className={styles.trashIcon}>
              <HiOutlineTrash size={14} />
            </div>
          </div> 
        )
      })}
    </div>
  )
}