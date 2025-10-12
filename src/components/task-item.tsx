// import styled from '@emotion/styled';
import type {Task} from '../entities/task';
import { styled } from '@mui/material/styles';
import { normalizeTitle } from '../utils/validation';



type TaskItemProps = {
    task: Task;
    onAdd: (task: string) => void;
    onRemove: (id: string) => void;

};


const StyledButton = styled('span')(({theme}) => ({
    color: 'red',
    border: 'none',
    cursor: 'pointer',
    background: 'transparent',
    transition: 'all 0.2s ease-in-out',
}));



const ChangeButton = styled('span')(({theme}) => ({
color: 'green',
border: 'none',
cursor: 'pointer',
padding: theme.spacing(1),
background: 'transparent',
transition: 'all 0.2s ease-in-out',
}));

const BlockTask = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#ffffffff',
    padding: theme.spacing(2), 
    minHeight: '10vh',  
    minWidth: '120vh',       
    textAlign: 'left', 
    marginBottom: theme.spacing(2),
    border: '1px solid #e0e0e0',
    borderRadius: 12,
    outline: 'none',
    boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.04)',
}));

const TitleTask = styled('div')(({ theme }) => ({
    background: '#ffffffff',
    padding: theme.spacing(1),
    fontSize: '15px',
    fontWeight: '500',
}));

const CreateTask = styled('div')(({ theme }) => ({
    background: '#ffffffff',
    padding: theme.spacing(1),
    fontSize: '10px',
}));



export function TaskItem(props: TaskItemProps) {
    return (
            <BlockTask key={props.task.id}>
                <div >
                    <TitleTask>{normalizeTitle(props.task.title)}</TitleTask>
                    <CreateTask>{props.task.created instanceof Date ? props.task.created.toLocaleString() : String(props.task.created)}</CreateTask>
                </div>
                <div>
                   <ChangeButton onClick={() => props.onAdd(props.task.id)}>=</ChangeButton>
                    <StyledButton onClick={() => props.onRemove(props.task.id)}>x</StyledButton>
                </div>
                {/* <StyledButton onClick={() => props.onRemove(props.task.id)}>x</StyledButton> */}
            </BlockTask>
    );
}
