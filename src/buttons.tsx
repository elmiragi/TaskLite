import { styled } from '@mui/material/styles';
// import styled from '@emotion/styled';

const StyledButton = styled('button')(() => ({
    background: '#967fc4',
    border: 'none',
    weight: '100px',
    color: '#ffffff',
    cursor: 'pointer',
    borderRadius: '12px',

    
}));


type ButtonProps = {
    text: string;
    onClick: () => void;
}
export function MainBtn(props: ButtonProps) {
    return (
    <>
        <StyledButton onClick={props.onClick}>{props.text}</StyledButton>
    </>
    );
}



// const StyledButton = styled.button`
//     background: #674c8c;
//     border: none;
//     weight: 100px;
//     color: #ffffff;
//     cursor: pointer;
//     border-radius: ${(p) => p.theme.radius.md};
// &:hover {
    //     background: #77659cff;
    // }
// `