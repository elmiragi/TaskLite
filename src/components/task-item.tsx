// import styled from '@emotion/styled';
import type {Task} from '../entities/task';
import { styled } from '@mui/material/styles';
import { normalizeTitle } from '../utils/validation';
import { useState } from 'react';
// import { EditInput } from './edit-input';




const StyledButton = styled('span')(({}) => ({
    color: 'red',
    border: 'none',
    cursor: 'pointer',
    background: 'transparent',
    transition: 'all 0.2s ease-in-out',
}));



const ChangeButton = styled('span')(({ theme }) => ({
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

const Description = styled('div')(({ theme }) => ({
    background: '#ffffff00',
    padding: theme.spacing(1),
    color: 'black',
    fontSize: '13px',
}));

const Ellipsis = styled('span')(({ theme }) => ({
    cursor: 'pointer',
    marginLeft: theme.spacing(1),
    color: 'black',
    fontWeight: 600,
}));

const Title = styled('span')<{ complete: boolean }>(({ theme, complete }) => ({
    cursor: 'pointer',
    marginLeft: theme.spacing(1),
    color: complete ? 'grey' : 'black',
    textDecoration: complete ? 'line-through' : 'none',
    fontWeight: 600,
}));


type TaskItemProps = {
    task: Task;
    onRemove: (id: string) => void;
    onEdit: (task: Task) => void;
    onToggle: (id: string) => void;
};

export function TaskItem(props: TaskItemProps) {
    const [showDesc, setShowDesc] = useState(false);
    

    return (
            <BlockTask key={props.task.id}>
                <div>
                    <TitleTask>
                        <Title complete= {props.task.completed} onClick={() => props.onToggle(props.task.id)}>{normalizeTitle(props.task.title)}</Title>
                        {props.task.description !=='' && (
                            <Ellipsis onClick={() => setShowDesc((s) => !s)}>...</Ellipsis>
                        )}
                    </TitleTask>
                    {showDesc && 
                    props.task.description && 
                    <Description>{props.task.description}</Description>}
                    <CreateTask>{props.task.created instanceof Date ? props.task.created.toLocaleString() : String(props.task.created)}</CreateTask>
                </div>
                <div>
                    <ChangeButton onClick={() => props.onEdit(props.task)} >&#9998;</ChangeButton>
                    <StyledButton onClick={() => props.onRemove(props.task.id)}>&#10006;</StyledButton>
                </div>
            </BlockTask>
    );
}
