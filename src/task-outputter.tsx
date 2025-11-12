// import { addTask, type Task } from './entities/task.js';
// import { sortByDate } from './utils/task-sort-list.js';
// import { isValidTaskTitle, normalizeTitle } from './utils/validation.js';
// import { styled } from '@mui/material/styles';
// // import { theme } from './styles/theme';
// // import React from 'react';

// type TaskItemProps = {
//     task: Task;
//     onRemove: (id: string) => void;
// };

// const tasks: Task[] = [
//     addTask('react    hfyfhtf'),
//     addTask('    cake'),
//     addTask('homework'),
//     addTask('             '),
//     addTask('012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789'),

// ];

// const sortedTasks = tasks
//     .map(task => ({ ...task, title: normalizeTitle(task.title) }))
//     .filter(task => isValidTaskTitle(task.title))


// const BlockTask = styled('div')(({ theme }) => ({
//     background: '#ffffffff',
//     padding: theme.spacing(2),
//     display: 'flex',
//     flexDirection: 'column',    
//     minHeight: '10vh',  
//     minWidth: '120vh',       
//     textAlign: 'left', 
//     marginBottom: theme.spacing(2),
//     border: '1px solid #e0e0e0',
//     borderRadius: 12,
//     outline: 'none',
//     boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.04)',
// }));

// const TitleTask = styled('div')(({ theme }) => ({
//     background: '#ffffffff',
//     padding: theme.spacing(1),
//     fontSize: '15px',
//     fontWeight: '500',
// }));

// const CreateTask = styled('div')(({ theme }) => ({
//     background: '#ffffffff',
//     padding: theme.spacing(1),
//     fontSize: '10px',
// }));

// export function TasksOutput() {
//     const displayTasks = sortByDate(sortedTasks);
//     return (
//         <>
//         <h2>Список задач</h2>
//         {displayTasks.map((task, idx) => (
//             <BlockTask key={idx}>
//                 <TitleTask>{task.title}</TitleTask>
//                 <CreateTask>{task.created instanceof Date ? task.created.toLocaleString() : String(task.created)}</CreateTask>
//             </BlockTask>
//         ))}
//         </>
//     );
// }

