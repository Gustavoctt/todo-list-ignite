import { HiOutlineTrash } from 'react-icons/hi';
import styles from './Task.module.css';

export function Task(){
  return(
    <div className={styles.tasksFull}>
      <div className={styles.taskItem}>
        <div className={styles.inputCheckbox}>
          <input type="checkbox"  id='checkbox'/>
        </div>
        
        <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
        <div className={styles.trashIcon}>
          <HiOutlineTrash size={14} />
        </div>
      </div> 

      <div className={styles.taskItem}>
        <div className={styles.inputCheckbox}>
          <input type="checkbox"  id='checkbox'/>
        </div>
        <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
        <div className={styles.trashIcon}>
          <HiOutlineTrash size={14} />
        </div>
      </div> 
    </div>
  )
}