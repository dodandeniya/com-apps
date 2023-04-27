import { AppBar, Typography } from '@mui/material';
import styles from './header.module.scss';

/* eslint-disable-next-line */
export interface HeaderProps {
  title: string;
  color: 'primary' | 'secondary';
}

export function Header(props: HeaderProps) {
  return (
    <AppBar position="static" color={props.color}>
      <Typography
        px={1}
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        {props.title}
      </Typography>
    </AppBar>
  );
}

export default Header;
