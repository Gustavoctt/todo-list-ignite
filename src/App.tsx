import { Header } from './components/Header/Header';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BsClipboardX } from 'react-icons/bs';

import styles from './App.module.css';
import './global.css';


export function App() {
  return (
   <>
    <Header />

    <main className={styles.container}>
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

      <section>
        <div className={styles.taskInfo}>
          <div className={styles.createdTasks}>
            <strong>Tarefas criadas</strong>
            <span>5</span>
          </div>
          <div className={styles.completedTasks}>
            <strong>Concluidas</strong>
            <span>2 de 5</span>
          </div>
        </div>

        <div className={styles.tasksEmpty}>
          <BsClipboardX size={56}/>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </section>
    </main>
   </>
  )
}