import { Container, Text, Button, Title } from "@mantine/core";
import { IconArrowDown } from "@tabler/icons-react";
import { Link } from "react-router-dom";

import classes from "./Hero.module.scss";

export default function Hero() {

  return (
    <div className={classes.wrapper}>
      <Container component="section" className={classes.inner}>
        <Title order={1} className={classes.title}>Hello, I'm Randy</Title>
        <Text className={classes.description}>
          A web developer.
        </Text>
        <Button
          variant="transparent"
          component={Link}
          to="/learn-more"
          size="lg"
          className={classes.controls}
        >
          Learn more about me
          <IconArrowDown />
        </Button>
      </Container>
    </div>
  );
}
