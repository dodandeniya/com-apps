import CustomeButton from '../../components/custome-button/custome-button';
import { Grid } from '@mui/material';

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
        <CustomeButton label="Custom 1" variant="contained" />
      </Grid>
      <Grid item>
        <CustomeButton
          label="Custom 2"
          variant="contained"
          color="secondary"
          borderRadius="50px"
        />
      </Grid>
      <Grid item>
        <CustomeButton label="Custom 3" color="success" />
      </Grid>
    </Grid>
  );
}

export default Home;
