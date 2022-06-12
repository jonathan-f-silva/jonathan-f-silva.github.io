import { Container } from '@chakra-ui/react'
import Hero from '../components/Hero'

function Home() {
  return (
    <Container maxW={{ base: 'full', lg: 'container.xl'}} mt='5'>
      <Hero />
    </Container>
  )
}

export default Home
