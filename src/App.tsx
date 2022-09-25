// import './App.css';
import { Divider, VStack } from '@chakra-ui/react';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <VStack textAlign="center" spacing="20">
      <Nav />
      <Home />
      <Divider id="projetos" />
      <Projects />
      <Divider id="contato" />
      <Contact />
      <Footer />
    </VStack>
  );
}

export default App;
