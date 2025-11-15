
import { styled } from "@mui/material/styles";
import {TaskInput} from "../components/task-input";
import { useState, useEffect} from "react";
import {addTask, type Task} from "../entities/task";
import { TaskList } from "../components/task-list";
import { TaskReady } from "../components/task-ready";
// import { EditInput } from "../components/edit-input";
import { loadTasks, saveTask } from "../entities/storage";
import { TaskModal } from "../components/task-modal";

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

const AboutCompleted = styled("div")(({ theme }) => ({
  width: '100%',
  color: 'white',
  display: 'flex',
  justifyContent: 'space-between',
  gap: theme.spacing(1),
  padding: theme.spacing(1, 0),
  alignItems: 'center',
}));

const ShowButton = styled('button')<{ active?: boolean }>(({ theme, active }) => ({
  background: active ? '#967fc4' : 'white',
  color: active ? 'white' : '#000000ff',
  padding: theme.spacing(1.5, 2),
  margin: theme.spacing(0.5),
  border: active ? 'none' : '1px solid #e0e0e0',
  borderRadius: 8,
  cursor: 'pointer',
}));

const ControlsRow = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(1, 2),
}));

const ClearButton = styled('button')(({ theme }) => ({
  background: 'none',
  color: 'black',
  padding: theme.spacing(1, 2),
  border: '2px dashed #967fc4',
  borderRadius: 8,
  cursor: 'pointer',
  ':disabled': {
    border: '2px dashed #ddd',
    color: '#aaa',
    cursor: 'not-allowed',
    background: '#f5f5f5',
    opacity: 0.8,
  }
}));


const AllSortBtn = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: theme.spacing(1, 2),
}));

const SortDateChoose = styled('select')(({ theme }) => ({
  display: 'flex',
  color: 'black',
  background: 'white',
  padding: theme.spacing(0, 0.5),
  fontWeight: 600,
  borderRadius: 4,
}));

const SearchInput = styled("input")(({theme}) => ({
  height: 44,
  backgroundColor: "#fff",
  color: "#000",
  margin: theme.spacing(1),
  border: "1px solid #e0e0e0",
  borderRadius: 10,
  padding: theme.spacing(1.5, 2.5),
  outline: "none",
  width: '100%',
  boxShadow: "inset 0 1px 2px rgba(0,0,0,0.04)",
  "::placeholder": {
    color: "#9e9e9e",
  },
}));

export function TaskPage() {

  const [isEditingTask, setIsEditingTask] = useState<Task | null>(null);
  const [tasks, setTasks] = useState<Task[]> (() => loadTasks());
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [sortByDate, setSortByDate] = useState<'new' | 'old'>('new');
  useEffect(() => {
    saveTask(tasks);
  }, [tasks]);


  function handleRemoveTask(id: string) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  function handleAddTask(title: string) {
    const newTask = addTask(title);
    setTasks([newTask, ...tasks]);
  }

  function handleEditTask(id: string, newTitle: string, newDescription?: string, newDeadline?: Date | null) {
    setTasks(tasks.map(t => (t.id === id ? {
      ...t,
       title: newTitle,
        description: newDescription ?? '',
         deadline: newDeadline
        } : t)));
  }

  function handleToggleTask(id: string) {
      setTasks(tasks.map(t => (t.id === id ? {...t, completed: !t.completed} : t)));
  }

  const filterTask = tasks
    .filter(t => {
      if (filter === 'active') return !t.completed;
      if (filter === 'completed') return t.completed;
      return true;
    })
    .sort((a, b) => {
      const ta = new Date(a.created).getTime();
      const tb = new Date(b.created).getTime();
      return sortByDate === 'new' ? tb - ta : ta - tb;
    });


  const normalize = (s: string) => s.trim().replace(/\s+/g, ' ').toLowerCase();
  const q = normalize(search);
  const searchedTasks = filterTask.filter(t => {
    if (!q) return true;
    const title = normalize(t.title);
    return title.includes(q);
  })
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const percent = total !==  0 ? Math.round((completed / total) * 100) : 0;
  const active = total-completed;
  return (
    <>
      <Wrapper>
        <TaskInput onAdd={handleAddTask}/>
        <SearchInput placeholder="Поиск задач..." value={search} onChange= {(e) => setSearch(e.target.value)} type='text'></SearchInput>
        <AboutCompleted>
          <AllSortBtn>
            <ShowButton active={filter === 'all'} onClick={() => setFilter('all')}>Все</ShowButton>
            <ShowButton active={filter === 'active'} onClick={() => setFilter('active')}>Активные</ShowButton>
            <ShowButton active={filter === 'completed'} onClick={() => setFilter('completed')}>Завершенные</ShowButton>
          </AllSortBtn>
            <SortDateChoose value={sortByDate} onChange={(e) => setSortByDate(e.target.value as 'new' | 'old')} name='sort' id='sort'>
              <option value='new'>Сначала новые</option>
              <option value='old'>Сначала старые</option>
            </SortDateChoose>
          </AboutCompleted>
      
        <TaskReady percent={percent} />
        <TaskList 
        tasks={searchedTasks} 
        onEdit={(task) => setIsEditingTask(task)} 
        onToggle={handleToggleTask}
        onRemove={handleRemoveTask}/>
        
          <ControlsRow>
            <div>Всего: {total} | Активных: {active} | Выполненных: {completed}</div>
            <ClearButton disabled={completed === 0} onClick={() => setTasks(tasks.filter(t => !t.completed))}>Очистить выполненные</ClearButton>
          </ControlsRow>
        {isEditingTask && (
          <TaskModal task={isEditingTask} onClose={() => setIsEditingTask(null)} onSave={handleEditTask}/>
        )}
        
      </Wrapper>
      
    </>
  );
}

