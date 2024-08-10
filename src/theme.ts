import { createTheme, Title } from '@mantine/core';
import classes from './styles/_variables.scss';

export const theme = createTheme({
  primaryColor: 'cyan',
  components: {
    Title: Title.extend({
      defaultProps: {
      }
    })
  }
});