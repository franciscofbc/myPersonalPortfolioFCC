import About from './components/About';
import Header from './components/header';
import ProjectList from './components/ProjectList';
import { GlobalStyle } from './styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <About />
      <ProjectList />
    </>
  );
}

export default App;
