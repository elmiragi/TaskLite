import { TaskItem } from "./task-item";
import type { Task } from "../entities/task";
import { sortByDate } from '../utils/task-sort-list.js';
import { styled } from "@mui/material/styles";


type TaskListProps = {
  tasks: Task[];
  onAdd: (task: string) => void;
  onRemove: (id: string) => void;
}

const ListDiv = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: 'flex-start',
  fontSize: '20px',
  fontWeight:'600',
}));

 export function TaskList(props: TaskListProps) {
    const displayTasks = sortByDate(props.tasks);
    const result = displayTasks.map(task => (
    <TaskItem key={task.id} task={task} onRemove={props.onRemove} onAdd={props.onAdd} />
  ));

  const isEmpty = result.length > 0 ? result : <p>Список пуст</p>;
  return (
    <div>
      <ListDiv>Список задач</ListDiv>
        <div>{isEmpty}</div>
    </div>
    );
 } 

  

