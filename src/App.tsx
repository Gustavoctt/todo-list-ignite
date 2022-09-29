import { Header } from './components/Header/Header';
import { BsClipboardX } from 'react-icons/bs';
import { HiOutlineTrash } from 'react-icons/hi';

import styles from './App.module.css';
import './global.css';
import { useState } from 'react';
import { AddNewTask } from './components/InputAddNewTask/AddNewTask';
import { Task } from './components/Task/Task';


export function App() {
  const [tasks, setTasks] = useState(["", ""])
  return (
   <>
    <Header />

    <main className={styles.container}>
      <AddNewTask />

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

       
       { tasks.length == 0 ? (
          <div className={styles.tasksEmpty}>
            <BsClipboardX size={56}/>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        ) : (
          <Task />
        ) 
       }

      </section>
    </main>
   </>
  )
}