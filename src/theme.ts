import {
  Button,
  Card,
  Title,
  createTheme,
  DEFAULT_THEME,
} from "@mantine/core";

import classes from './styles/theme.module.scss'
import './styles/_variables.scss';

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
  }
});