import {
  Button,
  Title,
  Group,
  Image,
  Box,
  SimpleGrid,
  Divider,
  Text,
  Anchor,
  HoverCard,
  UnstyledButton,
  Drawer,
  Collapse,
  ScrollArea,
  Burger
} from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';


import classes from "./Header.module.scss";
import Logo from "../../assets/finance-icon-17-light.png";
import { Link } from "react-router-dom";
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from "@tabler/icons-react";

const mockdata = [
  {
    icon: IconCode,
    title: 'Open source',
    description: 'This Pokémon’s cry is very loud and distracting',
  },
  {
    icon: IconCoin,
    title: 'Free for everyone',
    description: 'The fluid of Smeargle’s tail secretions changes',
  },
  {
    icon: IconBook,
    title: 'Documentation',
    description: 'Yanma is capable of seeing 360 degrees without',
  },
  {
    icon: IconFingerprint,
    title: 'Security',
    description: 'The shell’s rounded shape and the grooves on its.',
  },
  {
    icon: IconChartPie3,
    title: 'Analytics',
    description: 'This Pokémon uses its flying ability to quickly chase',
  },
  {
    icon: IconNotification,
    title: 'Notifications',
    description: 'Combusken battles with the intensely hot flames it spews',
  },
];

export default function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);


  const links = mockdata.map((item) => (
    <UnstyledButton>
      <Group>

      </Group>
    </UnstyledButton>
  ));

  return (
    <Box pb={60}>
      <header className={classes.header}>
        <Link to="/">
          <Box className={classes.brand}>
            <Image alt="header" src={Logo} h={30} w={30} />
            <Title order={2} className={classes.title} visibleFrom="sm">
              Buy the News
            </Title>
          </Box>
        </Link>
        <Group h="100%" gap={0} visibleFrom="lg">
          <Link to="/" className={classes.link}>
            About the Team
          </Link>
          <Link to="/" className={classes.link}>
            Customers
          </Link>
          <HoverCard width={600} radius="md" position="bottom" shadow="md">
            <HoverCard.Target>
              <Box component="a" className={classes.link}>
                <Text>Resources</Text>
                <IconChevronDown />
              </Box>
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <Group justify="space-between" px="md">
                <Text fw={500}>Resources</Text>
                <Anchor href="#" fz="xs">View All</Anchor>
              </Group>
              <Divider my="sm" />
              <SimpleGrid cols={3}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
              </SimpleGrid>
            </HoverCard.Dropdown>
          </HoverCard>
          <Link to="/" className={classes.link}>
            Pricing
          </Link>
        </Group>
        <Group visibleFrom="sm">
          <Button variant="outline" color="white">
            Sign In
          </Button>
          <Button variant="filled" color="#ECE3CE">
            <Text c={"black"}>See a demo</Text>
          </Button>
        </Group>
        <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
      </header>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="md"
        zIndex={1000000}
      >
        <ScrollArea h={"100vh"} mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            Home
          </a>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>
          <Divider my="sm" />
          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
