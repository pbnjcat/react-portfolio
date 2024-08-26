import { Box, Text, Button, Title, Image, Paper } from "@mantine/core";

import { IconArrowDown } from "@tabler/icons-react";
import classes from "./Hero.module.scss";

export default function Hero() {
  return (
    <Box className={classes.hero_wrapper}>
      <Paper className={classes.content}>
        <Title className={classes.content_title}>Hello, I am Randy.</Title>
        <Text className={classes.content_description}>A web developer.</Text>
        <Box>
          <Button
            p={0}
            variant="transparent"
            size="lg"
            className={classes.action_btn}
          >
            Read more about me
            <IconArrowDown />
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
