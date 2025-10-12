
import { styled } from "@mui/material/styles";
import {TaskInput} from "../components/task-input";
import { useState } from "react";
import {addTask, type Task} from "../entities/task";
import { TaskList } from "../components/task-list";

const Wrapper = styled("div")(({ theme }) => ({
  background: "#f7f7f7ff",
  padding: theme.spacing(0),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "10vh",
  textAlign: "center",
}));


export function TaskPage() {
  const taskss: Task[] = [
    {
      id: "1",
      title: "выучить react",
      created: new Date(),
      completed: false,
    },
    {
      id: "2",
      title: "закрепить ts",
      created: new Date(),
      completed: false,
    },
  ];
  const [tasks, setTasks] = useState(taskss);
  // const [task, setTask] = useState("");

  function handleRemoveTask(id: string) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

    function handleAddTask(title: string) {
      const newTask = addTask(title);
      setTasks([newTask, ...tasks]);
  }


  return (
    <>
      <Wrapper>
        <TaskInput onAdd={handleAddTask}/>
        <TaskList tasks={tasks} onRemove={handleRemoveTask}/>
      </Wrapper>
      
    </>
  );
}

{
  /* <>
    <Wrapper>
    <input 
    onChange={(event => setUsername(event.target.value))}
    value={ username }  
    type='text' 
    placeholder='Введите текст...'/>
    <p>Ваш список задач</p>
    </Wrapper>
    <MainBtn text='Добавить'>

    </MainBtn>
    </> */
}
