import classes from './Footer.module.scss';
import config from '../../config';
import { IconBrandGithub } from '@tabler/icons-react';

/**
 * Footer component.
 */
export default function Footer() {
  let date = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <p>
        <a
          aria-label={`visit ${config.siteAuthor} website`}
          href={config.authorUrl}
          rel='author'>
          {config.siteAuthor}
        </a>
        {date}©
      </p>
    </footer>
  );
}
