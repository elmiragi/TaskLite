import { TaskItem } from "./task-item";
import type { Task } from "../entities/task";
// import { sortByDate } from '../utils/task-sort-list.js';
import { styled } from "@mui/material/styles";

type TaskListProps = {
  tasks: Task[];
  onRemove: (id: string) => void;
  onEdit: (task:Task) => void;
  onToggle: (id: string) => void;
};

const ListDiv = styled("div")(() => ({
  display: "flex",
  justifyContent: 'flex-start',
  fontSize: '20px',
  fontWeight:'600',
}));

 export function TaskList(props: TaskListProps) {
   const result = props.tasks.map(task => (
    <TaskItem 
      key={task.id}
      task={task} 
      onRemove={props.onRemove}
      onEdit={props.onEdit} 
      onToggle={props.onToggle}/>
    ));

    const isEmpty = result.length > 0 ? result : <p>Список пуст</p>;
    return (
      <div>
        <ListDiv>Список задач</ListDiv>
          <div>{isEmpty}</div>
      </div>
      );
 } 

  

