// import './App.css';
import { Divider, VStack } from '@chakra-ui/react';
import Nav from './components/Nav';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <VStack textAlign="center" spacing="10">
      <Nav />
      <Home />
      <Divider />
      <Projects />
    </VStack>
  );
}

export default App;
