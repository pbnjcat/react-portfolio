import { useState } from "react";
import {
  Button,
  Group,
  Image,
  Box,
  Divider,
  Text,
  Anchor,
  HoverCard,
  UnstyledButton,
  Drawer,
  Collapse,
  ScrollArea,
  Burger,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { Link } from "react-router-dom";
import ColorToggle from "../ColorSchemeToggle/ColorSchemeToggle";
import Logo from "../../assets/images/finance-icon-17-light.png";

import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronUp,
} from "@tabler/icons-react";

import classes from "./Header.module.scss";

const mockdata = [
  {
    icon: IconCode,
    title: "Open source",
    description: "This Pokémon’s cry is very loud and distracting",
  },
  {
    icon: IconCoin,
    title: "Free for everyone",
    description: "The fluid of Smeargle’s tail secretions changes",
  },
  {
    icon: IconBook,
    title: "Documentation",
    description: "Yanma is capable of seeing 360 degrees without",
  },
  {
    icon: IconFingerprint,
    title: "Security",
    description: "The shell’s rounded shape and the grooves on its.",
  },
  {
    icon: IconChartPie3,
    title: "Analytics",
    description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    icon: IconNotification,
    title: "Notifications",
    description: "Combusken battles with the intensely hot flames it spews",
  },
];

export default function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [loading, setLoading] = useState(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);

  const links = mockdata.map((item, index) => (
    <UnstyledButton key={index}>
      <Group>
        <item.icon />
        <Box>
          <Text>{item.title}</Text>
          <Text size="xs">{item.description}</Text>
        </Box>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box className={classes.wrapper}>
      <Box component={Link} to="/" className={classes.brand}>
        <Image alt="header" src={Logo} h={40} w={40} />
      </Box>
      <Group visibleFrom="md" className={classes.link_container}>
        <Link to="/" className={classes.link}>
          About Us
        </Link>
        <Link to="/" className={classes.link}>
          Customers
        </Link>
        <HoverCard width={600} radius="md" position="bottom" shadow="md">
          <HoverCard.Target>
            <Box component="a" className={classes.link}>
              <Text>Resources</Text>
              <IconChevronUp className={classes.icon_up} size={24} />
            </Box>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Group justify="space-between" px="md">
              <Text fw={500}>Resources</Text>
              <Anchor href="#" fz="xs">
                View All
              </Anchor>
            </Group>
            <Divider my="sm" />
            <Group className={classes.links_grid}></Group>
          </HoverCard.Dropdown>
        </HoverCard>
        <Link to="/" className={classes.link}>
          Pricing
        </Link>
      </Group>
      <Group visibleFrom="md" gap={10} className={classes.action_btn}>
        <Button
          variant="outline"
          component={Link}
          to="/signup"
          loading={loading}
          loaderProps={{ type: "oval", color: "gray" }}
        >
          <Text>Sign Up</Text>
        </Button>
        <Button
          component={Link}
          to="/login"
          variant="filled"
          loading={loading}
          loaderProps={{ type: "oval", color: "gray" }}
        >
          <Text>Sign In</Text>
        </Button>
        <ColorToggle />
      </Group>
      <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="md" />
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Menu"
        hiddenFrom="md"
        classNames={{
          title: classes.drawer_title
        }}
        zIndex={1000000}
      >
        <ScrollArea h={"100vh"} mx="-md" className={classes.drawer}>
          <Divider my="sm" />
          <Link to="#" className={classes.link}>
            Home
          </Link>
          <Collapse in={linksOpened}>{links}</Collapse>
          <Link to="#" className={classes.link}>
            Learn
          </Link>
          <Link to="#" className={classes.link}>
            Academy
          </Link>
          <Divider my="sm" />
          <Group justify="center" pb="xl" px="md">
            <Button variant="outline">Log in</Button>
            <Button variant="filled">Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
