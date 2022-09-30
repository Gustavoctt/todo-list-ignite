import { useEffect, useState } from 'react';
import { AddNewTask } from './components/InputAddNewTask/AddNewTask';
import { Task } from './components/Task/Task';
import { Header } from './components/Header/Header';
import { BsClipboardX } from 'react-icons/bs';
import styles from './App.module.css';
import './global.css';

interface Todo {
  id: number;
  descricao: string;
  situacao: boolean
}

export function App() {
  const [tasks, setTasks] = useState<Todo[]>([])
  const [tasksFinished, setTasksFinished] = useState(0);

  useEffect(() => {
    let countFinished = 0;
    tasks.forEach((task) => ( task.situacao === true ? (countFinished += 1) : 0 ))
    setTasksFinished(countFinished)
  }, [tasks])

  function handleAddTodo(todo: string){
    const newTodo: Todo = {
      id: tasks.length + 1,
      descricao: todo,
      situacao: false
    }

    setTasks((oldTodo) => [...oldTodo, newTodo])
  }

  function handleCheckTodo(id: number){
    const checkedTodo = tasks.filter((task) => {
      if(task.id === id){
        task.situacao = !task.situacao
      }
      return task;
    })
    setTasks(checkedTodo)
  }

  function handleDeleteTask(id: number){
    const deleteTask = tasks.filter((task) => {
      return task.id !== id
    })

    setTasks(deleteTask)
  }
  return (
   <>
    <Header />

    <main className={styles.container}>
      <AddNewTask handleAddTodo={handleAddTodo} />

      <section>
        <div className={styles.taskInfo}>
          <div className={styles.createdTasks}>
            <strong>Tarefas criadas</strong>
            <span>{tasks.length}</span>
          </div>
          <div className={styles.completedTasks}>
            <strong>Concluidas</strong>
            <span>{tasksFinished} de {tasks.length}</span>
          </div>
        </div>

       
       { tasks.length == 0 ? (
          <div className={styles.tasksEmpty}>
            <BsClipboardX size={56}/>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        ) : (
          <Task 
            tasks={tasks}
            handleCheckTodo={handleCheckTodo}
            handleDeleteTask={handleDeleteTask}
          />
        ) 
       }

      </section>
    </main>
   </>
  )
}