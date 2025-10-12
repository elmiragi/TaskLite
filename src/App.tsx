import {ThemeProvider} from '@emotion/react';
import {TaskPage} from './page/task-page';
import {GlobalStyles} from './styles/global';
import {theme} from './styles/theme';


export function App() {
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <TaskPage />
    </ThemeProvider>
  )
  
  
}










