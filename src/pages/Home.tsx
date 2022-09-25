import { Container } from '@chakra-ui/react';
import Hero from '../components/Hero';

function Home() {
  return (
    <Container maxW={ { base: 'full', lg: 'container.xl' } } pt="10">
      <Hero />
    </Container>
  );
}

export default Home;
