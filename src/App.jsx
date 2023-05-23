import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
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
      <Contact />
      <Footer />
    </>
  );
}

export default App;
