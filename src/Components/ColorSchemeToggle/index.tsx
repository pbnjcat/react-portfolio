import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import { IconSun, IconMoon } from '@tabler/icons-react';

import classes from './ColorSchemeToggle.module.scss'

export default function ColorToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  useHotkeys([['mod+B', () => toggleColorScheme()]]);

  return (
    <ActionIcon
      size={45}
      className={classes.light_dark}
      variant="transparent"
      color={dark ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme()} 
    >
      {dark ? (
        <IconSun size={30} />
      ) : (
        <IconMoon size={30} />
      )}
    </ActionIcon>
  );
}
