import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import { IconSun, IconMoon } from '@tabler/icons-react';

export default function ColorToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  useHotkeys([['mod+B', () => toggleColorScheme()]]);

  return (
    <ActionIcon
      variant="transparent"
      color={dark ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? (
        <IconSun style={{ width: 32, height: 32 }} />
      ) : (
        <IconMoon style={{ width: 32, height: 32 }} />
      )}
    </ActionIcon>
  );
}
