import { Button } from '@mui/material';
import styles from './custome-button.module.scss';

/* eslint-disable-next-line */
export interface CustomButtonProps {
  label: string;
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  borderRadius?: number | string;
  variant?: 'text' | 'contained' | 'outlined';
}

export function CustomButton({
  color = 'primary',
  ...props
}: CustomButtonProps) {
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

export default CustomButton;
