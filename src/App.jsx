import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectList from './components/ProjectList';
import Header from './components/Header';
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
