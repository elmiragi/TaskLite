import { styled } from '@mui/material/styles';
// import styled from '@emotion/styled';

const StyledButton = styled('button')(() => ({
    background: '#674c8c',
    border: 'none',
    weight: '100px',
    color: '#ffffff',
    cursor: 'pointer',
    borderRadius: '12px',
}));

// const StyledButton = styled.button`
//     background: #674c8c;
//     border: none;
//     weight: 100px;
//     color: #ffffff;
//     cursor: pointer;
//     border-radius: ${(p) => p.theme.radius.md};
// `

type ButtonProps = {
    text: string;
}
export function MainBtn(props: ButtonProps) {
    return (
    <>
        <StyledButton>{props.text}</StyledButton>
    </>
    );
}
