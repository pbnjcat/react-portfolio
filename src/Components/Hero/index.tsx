import { Container, Text, Button, Group, Title } from "@mantine/core";
import { IconArrowDown, IconArrowUpRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";

import CardsComponent from "../Card";
import CarouselComponent from "../Carousel";

import classes from "./Hero.module.scss";

export default function Hero() {
  return (
    <div className={classes.wrapper}>
      <Container component="section" className={classes.inner}>
          <Title className={classes.title}>In the Money</Title>
          <Text className={classes.description} c="dimmed">
            Easy-to-use technology, spend limits, approval flows, vendor
            payments, and more
          </Text>
        <Group className={classes.controls}>
          <Button
            component={Link}
            to="/chat"
            size="lg"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
          >
            Try Our Product
            <IconArrowUpRight />
          </Button>
          <Button
            component={Link}
            to="/learn-more"
            size="lg"
            classNames={{
              root: classes.ctrl_root,
            }}
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
          >
            Learn More
            <IconArrowDown />
          </Button>
        </Group>
        <Group className={classes.inner_visuals}>
          <CardsComponent />
          <CarouselComponent />
        </Group>
      </Container>
    </div>
  );
}
