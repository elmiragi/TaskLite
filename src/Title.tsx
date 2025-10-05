type TitleProps = {
    title: string;
    text: string;
    user: string;
}
function Title(props: TitleProps) {
    return <><h1>{props.title}</h1>
    <h2>{props.text}</h2>
    <h2>{props.user}</h2></>;
}

export default Title