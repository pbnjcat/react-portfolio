import classes from './Footer.module.scss';
import config from '../../config';
import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react';

/**
 * Footer component.
 */
export default function Footer() {
  let date = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <div className={classes.social_links}>
        <a href="/" target="_blank" >
          <IconBrandLinkedin size={24} />
        </a>
        <a href="/" target="_blank" >
          <IconBrandGithub size={24} />
        </a>
        <a href="/" target="_blank" >
          <IconMail size={24} />
        </a>
      </div>
      <p className={classes.copyright}>
        &#169; {date} {config.siteAuthor}
      </p>
    </footer>
  );
}
