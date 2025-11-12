import { styled } from "@mui/material/styles";

const ScaleCompleted = styled('div')(() => ({
  padding: '16px 0',
  width: '100%',

}));

const TextCompleted = styled('div')(() => ({
  // color: 'black',
  // padding: 0,
  // width: '100%',
  // height: '20px',
  // display: 'flex',
  // justifyContent: 'center',
  marginTop: '8px',
  fontSize: '14px',
  color: 'rgb(117, 117, 117)',
  textAlign: 'center',
}));


const LineCompleted = styled('div')(() => ({

  width: '100%',
  height: '10px',
  background: 'rgb(229, 229, 229)',
  borderRadius: '9999px',
  overflow: 'hidden',
}));

const LineFilled = styled('div')<{ percent: number }>(({ percent }) => ({
height: '100%',
width: `${percent}%`,
  background: 'linear-gradient(90deg, rgb(155, 121, 207), rgb(103, 76, 140))',
  transition: 'width 0.4s',
  borderRadius: '9999px',
}));

type TaskReadyProps = {
  // tasks: Task[];
  percent: number;
};


export function TaskReady(props: TaskReadyProps) {
  // const percent = getCompletedPercent(props.result);

  return (
    <ScaleCompleted>
      <LineCompleted>
        <LineFilled percent={props.percent}></LineFilled>
      </LineCompleted>
      <TextCompleted>Завершено {props.percent}%</TextCompleted>
    </ScaleCompleted>
  );
}

