import style from './App.module.scss';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import { useState } from 'react';
import { Task } from '../types/Tarefa';
import Cronometro from '../components/Cronometro';

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task>();

  return (
    <div className={style.AppStyle}>
      <Formulario setTasks={setTasks}/>
      <Lista
        tasks={tasks}
        setTasks={setTasks}
        setSelectedTask={setSelectedTask}
      />
      <Cronometro taskDuration={selectedTask?.duration}/>
    </div>
  );
}

