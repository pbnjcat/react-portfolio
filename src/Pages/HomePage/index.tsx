import { Text, Title, Box, Group, Image } from '@mantine/core';

import Hero from '../../Components/Hero';
import classes from './HomePage.module.scss'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Box component="section">
        <Group className={classes.about}>
          <Title order={1}>About Me</Title>
          <Text c="black" style={{ textAlign: "center" }}>
            Everything you need to control spend and optimize finance operations, all on a single platform.
          </Text>
        </Group>
        <Group >
          <Image src={''} />
        </Group>

      </Box>
    </>
  )
}