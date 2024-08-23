import { Text, Title, Box, Container, Image } from '@mantine/core';

import Hero from '../../Components/Hero';
import classes from './HomePage.module.scss'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Box component="section">
        <Container className={classes.about}>
          <Title order={1}>About Me</Title>
          <Text c="black" style={{ textAlign: "center" }}>
            Everything you need to control spend and optimize finance operations, all on a single platform.
          </Text>
        </Container>
        <Container >
          <Image src={''} />
        </Container>

      </Box>
    </>
  )
}