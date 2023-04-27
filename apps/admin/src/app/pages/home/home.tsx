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
        <h1>Welcome to Admin App</h1>
      </Grid>
    </Grid>
  );
}

export default Home;
