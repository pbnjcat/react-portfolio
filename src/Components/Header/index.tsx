import { useState } from "react";
import {
  Image,
  Stack,
  Title,
  Group,
  Box,
  Divider,
  Drawer,
  ScrollArea,
  Anchor,
  Burger,
  List,
  ListItem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { Link } from "react-router-dom";
import ColorToggle from "../ColorSchemeToggle";

import classes from "./Header.module.scss";

const links = [
  {
    label: "Blog",
    path: "/blog",
  },
  {
    label: "Resume",
    path: "/resume",
  },
];

export default function Header() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Box className={classes.wrapper}>
      <Box mt={10} component={Link} to="/" className={classes.brand}>
        <Title order={2} fw={300} fz={25}>
          RANDY LI
        </Title>
      </Box>
      {/* header links */}
      <List className={classes.link_list} visibleFrom="xs">
        <ListItem className={classes.link_list_item}>
          <Anchor component={Link} to="/" className={classes.link}>
            Experience
          </Anchor>
        </ListItem>
        {links.map((link, index) => (
          <ListItem key={index} className={classes.link_list_item}>
            <Anchor component={Link} to={link.path} className={classes.link}>
              {link.label}
            </Anchor>
          </ListItem>
        ))}
        <ColorToggle />
      </List>

      <Burger className={classes.burger_icon} onClick={open} />
      <ScrollArea className={classes.drawer} visibleFrom="sm">
        <Divider my="sm" />
        <Drawer.Root
          size="100%"
          position="left"
          opened={opened}
          onClose={close}
          hiddenFrom="xs"
          zIndex={1000000}
        >
          <Drawer.Overlay />
          <Drawer.Content>
            <Drawer.Header className={classes.drawer_header}>
              <Anchor
                component={Link}
                to={"/"}
                onClick={close}
                className={classes.drawer_header_title}
              >
                RANDY LI
              </Anchor>
              <Drawer.CloseButton size={45} />
            </Drawer.Header>
            <Drawer.Body>
              <Stack>
                {links.map((link, index) => (
                  <Anchor
                    key={index}
                    component={Link}
                    onClick={close}
                    to={link.path}
                    className={classes.drawer_item}
                  >
                    {link.label}
                  </Anchor>
                ))}
                <Group justify="center">
                  <ColorToggle />
                </Group>
              </Stack>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Root>
        <Divider my="sm" />
      </ScrollArea>
    </Box>
  );
}
