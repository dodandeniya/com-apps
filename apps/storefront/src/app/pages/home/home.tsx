import CustomButton from '../../components/custom-button/custom-button';
import { Grid } from '@mui/material';
import CustomCheckBox from '../../components/custom-check-box/custom-check-box';

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      <Grid item>
        <h1>Welcome to Storefront App</h1>
      </Grid>
      <Grid item>
        <CustomButton label="Custom 1" variant="contained" />
      </Grid>
      <Grid item>
        <CustomButton
          label="Custom 2"
          variant="contained"
          color="secondary"
          borderRadius="50px"
        />
      </Grid>
      <Grid item>
        <CustomButton label="Custom 3" color="success" />
      </Grid>
      <Grid item>
        <CustomCheckBox icon="circle" color="success" />
        <CustomCheckBox icon="default" color="error" />
        <CustomCheckBox icon="check" color="primary" />
      </Grid>
    </Grid>
  );
}

export default Home;
