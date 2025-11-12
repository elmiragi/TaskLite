// import React from 'react';
type PropsEditInput = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement >) => void;
    onBlur: () => void;
    
}
export function EditInput(props: PropsEditInput){
    return <>
    <div>
        <input style={{ backgroundColor: 'white', color: 'black' }} 
        type='text'
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        />
    </div>
    </>
};