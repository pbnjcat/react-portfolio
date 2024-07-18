import { Container, Text, Button, Group, Title } from '@mantine/core';
import { IconArrowDown, IconArrowUpRight } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

import CardsComponent from '../Card';
import classes from './Hero.module.scss';

export default function Hero() {
  return (
    <div className={classes.wrapper}>
      <Container component="section" size={1000} className={classes.inner} >
        <Title className={classes.title}>Spending made smarter</Title>
        <Text className={classes.description} c="dimmed">
          Easy-to-use cards, spend limits, approval flows, vendor payments,
          and more — plus an average savings of 5%
        </Text>
        <Group className={classes.controls}>
          <Link to="/chat">
            <Button
              size="xl"
              className={classes.control}
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan' }}
            >
              Try Our Product
              <IconArrowUpRight />
            </Button>
          </Link>
          <Link to="/learn-more">
            <Button
              size="xl"
              className={classes.control}
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan' }}
            >
              Learn More
              <IconArrowDown />
            </Button>
          </Link>
        </Group>
        <Container component="section" className={classes.visuals}>
          <CardsComponent />
        </Container>
      </Container>

    </div>
  );
}
