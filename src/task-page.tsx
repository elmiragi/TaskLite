import { useState } from 'react';
// import styled from '@emotion/styled';
import {MainBtn} from './buttons';
import { styled } from '@mui/material/styles';
import { addTask } from './entities/task';

const Wrapper = styled('div')(({ theme }) => ({
    background: '#f7f7f7ff',
    padding: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',       
    justifyContent: 'center',    
    minHeight: '10vh',         
    textAlign: 'center',  
}));

const InputRow = styled('div')(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(2),
    width: '100%',
    maxWidth: 720,
    alignItems: 'center',
}));

const TextInput = styled('input')(() => ({
    flex: 1,
    height: 44,
    backgroundColor: '#fff',
    color: '#000',
    border: '1px solid #e0e0e0',
    borderRadius: 12,
    padding: '0 16px',
    outline: 'none',
    boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.04)',
    '::placeholder': {
    color: '#9e9e9e',
    },
}));


export function TaskPage() {
    

    const [username, setUsername] = useState('');


    return (
                <>
    <Wrapper>
    <InputRow>
      <TextInput 
        onChange={(event => setUsername(event.target.value))}
        value={ username }  
        type='text' 
        placeholder='Введите задачу'
      />
      <MainBtn text='Добавить'>

      </MainBtn>
    </InputRow>
    </Wrapper>
    
    </>
    );
}



{/* <>
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
    </> */}