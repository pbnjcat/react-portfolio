import {
  Button,
  Card,
  createTheme,
  Anchor,
  Title,
  Drawer,
  DEFAULT_THEME,
} from "@mantine/core";

import classes from './styles/theme.module.scss'

export const theme = createTheme({
  fontFamily: 'Grotesk, sans-serif',
  headings: {
    fontFamily: `Grotesk, ${DEFAULT_THEME.fontFamily}`
  },
  components: {
    Card: Card.extend({
      classNames: {
        root: classes.card,
      },
      defaultProps: {
        withBorder: true,
      },
    }),
    Button: Button.extend({
      classNames: {
        root: classes.button,
      },
    }),
    Anchor: Anchor.extend({
      classNames: {
        root: classes.anchor,
      }
    }),
    Title: Title.extend({
      classNames: {
        root: classes.title,
      }
    }),
  }
});