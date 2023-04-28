import { Checkbox } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckIcon from '@mui/icons-material/Check';

/* eslint-disable-next-line */
export interface CustomCheckBoxProps {
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  icon?: 'check' | 'circle' | 'default';
}

export function CustomCheckBox({
  color = 'primary',
  icon = 'default',
}: CustomCheckBoxProps) {
  const getIcon = () => {
    switch (icon) {
      case 'circle':
        return <RadioButtonUncheckedOutlinedIcon />;

      case 'check':
        return <CheckOutlinedIcon />;

      default:
        return <CheckBoxOutlineBlankIcon />;
    }
  };

  const getCheckedIcon = () => {
    switch (icon) {
      case 'circle':
        return <CheckCircleIcon />;

      case 'check':
        return <CheckIcon />;

      default:
        return <CheckBoxIcon />;
    }
  };

  return (
    <Checkbox
      inputProps={{ 'aria-label': 'check' }}
      color={color}
      icon={getIcon()}
      checkedIcon={getCheckedIcon()}
    />
  );
}

export default CustomCheckBox;
