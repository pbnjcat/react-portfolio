import { Text, Title, Image, Button, Box, Paper } from '@mantine/core';
import { useScrollIntoView } from '@mantine/hooks';

import Hero from '../../Components/Hero';
import Portrait from '../../assets/images/randy-photo.jpg'
import { IconChevronDown } from '@tabler/icons-react';

import classes from './HomePage.module.scss'

export default function HomePage() {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });

  return (
    <>
      <Hero />
      <div className={classes.circle}>
        <IconChevronDown className={classes.angle_down} size={40} />
      </div>
      <Paper component="section" className={classes.about} ref={targetRef}>
        <Title order={1}>About Me</Title>
        <Box>
          <Image src={Portrait} h={100} w={'auto'} />
          <Text style={{ textAlign: "center" }}>
            Everything you need to control spend and optimize finance operations, all on a single platform.
          </Text>
        </Box>
      </Paper>
    </>
  )
}