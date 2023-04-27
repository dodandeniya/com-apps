import { Button } from '@mui/material';
import styles from './custome-button.module.scss';

/* eslint-disable-next-line */
export interface CustomeButtonProps {
  label: string;
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  borderRadius?: number | string;
  variant?: 'text' | 'contained' | 'outlined';
}

export function CustomeButton({
  color = 'primary',
  ...props
}: CustomeButtonProps) {
  return (
    <Button
      aria-label={props.label}
      color={color}
      sx={{ borderRadius: props.borderRadius }}
      variant={props.variant}
    >
      {props.label}
    </Button>
  );
}

export default CustomeButton;
