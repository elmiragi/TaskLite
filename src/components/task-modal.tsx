import { useEffect, useState } from "react";
import type { Task } from "../entities/task";
import { styled } from "@mui/material/styles";



const Overlay = styled('div')(() => ({
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.45)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
}));

const MainDiv = styled("div")(({}) => ({
        background: '#fdfdfdff',
        border: '1px solid #e0e0e0',
        borderRadius: 12,
        outline: 'none',
        boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.04)',
        display: "flex",
        flexDirection: 'column',
        minHeight: '20vh',  
        width: '500px',       
        textAlign: 'left', 
}));

const SecondDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: 'column',
  padding: theme.spacing(2),
}));

const NextDiv = styled("div")(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(2),
  flexDirection: 'column',
}));

const NewInput = styled("input")(({ theme }) => ({
    padding: theme.spacing(2),
    background: '#ffffffff',
    margin: theme.spacing(1),
    color: 'black',
    border: '1px solid #e0e0e0',
    borderRadius: 12,
    outline: 'none',
    boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.04)'
}));

const NewTextarea = styled("textarea")(({ theme }) => ({
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    background: '#ffffffff',
    color: 'black',
    border: '1px solid #e0e0e0',
    borderRadius: 12,
    outline: 'none',
    boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.04)',
}));

const DeleteButton = styled("button")(({ theme }) => ({
    padding: theme.spacing(2),
    background: '#fdfdfdff',
    color: 'black',
    border: '1px solid #e0e0e0',
    borderRadius: 12,
    outline: 'none',
    boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.04)',
    margin: theme.spacing(1),
}));

const SaveButton = styled("button")(({ theme }) => ({
    padding: theme.spacing(2),
    background: '#9b79cf',
    margin: theme.spacing(1),
    borderRadius: 12,
}));

const EditButton = styled("div")(({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(2),
}));

const DeadlineBox = styled("input")(({ theme }) => ({
    backgroundColor: "#fff",
    color: "#000",
    margin: theme.spacing(1),
    border: "1px solid #e0e0e0",
    borderRadius: 10,
    padding: theme.spacing(2),
    colorScheme: 'light',
}));

type TaskModalProps = {
    task: Task;
    onSave: (id: string, title: string, description?: string, deadline?: Date | null) => void;
    onClose: () => void;
}

export function TaskModal(props:TaskModalProps) {
    const [title, setTitle]=useState(props.task.title);
    const [description, setDescription]=useState(props.task.description ?? '')
    const [deadline, setDeadline] = useState<string>(props.task.deadline ? props.task.deadline?.toISOString().split('T')[0] : '')

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.code === 'Escape') props.onClose();
        }
        window.addEventListener('keydown', handler );
        return () => window.removeEventListener('keydown', handler );
    });

    return (
        <Overlay>
        <MainDiv>
            <SecondDiv>
                <NextDiv>
                    <h2>Редактирование задачи</h2>
                    <NewInput value={title} type='text' onChange={(e) => setTitle(e.target.value)}></NewInput>
                    <NewTextarea value={description} placeholder='Описание' onChange={(e) => setDescription(e.target.value)}></NewTextarea>
                    <div>
                        Дедлайн:
                        <DeadlineBox value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                        type='date'
                        ></DeadlineBox>
                    </div>
                </NextDiv>
                <EditButton>
                    <DeleteButton onClick={() => props.onClose()}>Отмена</DeleteButton>
                    <SaveButton onClick={() => { 
                        props.onSave(
                          props.task.id,
                          title,
                          description,
                          deadline ? new Date(deadline) : null); 
                        props.onClose(); }}>Сохранить</SaveButton>
                </EditButton>
            </SecondDiv>
        </MainDiv>
        </Overlay>
    )
}