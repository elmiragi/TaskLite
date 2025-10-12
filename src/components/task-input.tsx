import {useState} from 'react';
import {MainBtn} from '../buttons';
import { styled } from "@mui/material/styles";
import { MAX_TITLE_LENGTH } from "../utils/constants";
import { isValidTaskTitle, normalizeTitle } from "../utils/validation";

type TaskInputProps = {
    onAdd: (task: string) => void;
}

const InputRow = styled("div")(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  width: "100%",
  maxWidth: 720,
  alignItems: "center",
}));

const TextInput = styled("input")(() => ({
  flex: 1,
  height: 44,
  backgroundColor: "#fff",
  color: "#000",
  border: "1px solid #e0e0e0",
  borderRadius: 12,
  padding: "0 16px",
  outline: "none",
  boxShadow: "inset 0 1px 2px rgba(0,0,0,0.04)",
  "::placeholder": {
    color: "#9e9e9e",
  },
}));

const ErrorText = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(1),
  color: "#d32f2f",
  fontSize: 12,
}));

export function TaskInput(props: TaskInputProps) {
    const [task, setTask] = useState('');
    const tooLong = task.length > MAX_TITLE_LENGTH;

    function handleAddTask() {
        const normalized = normalizeTitle(task);
        if (!isValidTaskTitle(normalized)) {
          return;
        }
        props.onAdd(normalized);
        setTask('');
    }
    return (
        <>
        <InputRow>
            <TextInput
                className=""
                onChange={event => setTask(event.target.value)}
                value={task}
                type="text"
                placeholder="Введите задачу"
            />
            <MainBtn onClick={handleAddTask} text="Добавить" />
        </InputRow>

        {tooLong && (
          <ErrorText>
            Превышена максимальная длина {MAX_TITLE_LENGTH} символов. Укоротите текст.
          </ErrorText>
        )}
        </>
    )
}