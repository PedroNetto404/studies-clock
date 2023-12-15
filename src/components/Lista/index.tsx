import style from "./Lista.module.scss";
import Item from "./Item";
import { Task } from "../../types/Tarefa";

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  setSelectedTask: React.Dispatch<React.SetStateAction<Task | undefined>>;
  tasks: Task[];
}

export default function Lista({ setTasks, setSelectedTask, tasks }: Props) {
  const TaskItem = (task: Task) => (
    <Item
      key={task.id}
      task={task}
      onClick={() => {
        setTasks((ts) => ts.map((t) => ({ ...t, selected: t.id === task.id })));
        setSelectedTask(task);
      }}
    />
  );

  return (
    <aside className={style.listaTarefas}>
      <h2> Estudo do dia</h2>
      <ul>{tasks.map(TaskItem)}</ul>
    </aside>
  );
}
