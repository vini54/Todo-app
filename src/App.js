import {Container} from "./style/app";
import {Header} from "./components/Header/Header";
import {NewTodo} from "./components/NewTodo/NewTodo";
import { Itens } from "./Context/Context";
import { useState } from "react";
import { TodoList } from "./components/TodoList/TodoList";
import { ThemeProvider } from "styled-components";
import {darkTheme, lightTheme} from "./Context/Theme";
import GlobalStyle from './style/global';
import GlobalStyles from "./style/global";

function App() {
  const [itens, setItens] = useState([])
  const [theme, setTheme] = useState("dark")
  
  const onTheme = (value) => {
    return setTheme(value)
  }
  // Mover Tudo para o index.js !!!!!!!!!!!!

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
    <Container>
    <GlobalStyles />
    <Itens.Provider value={[itens, setItens]}>
      <Header onTheme={onTheme} />
      <NewTodo />
      <TodoList />
      {/* 
<style>
    .attribution { font-size: 11px; text-align: center; }
    .attribution a { color: hsl(228, 45%, 44%); }
</style>
  
  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div>
*/}
    </Itens.Provider>
    </Container>
    </ThemeProvider>
  );
}

export default App;