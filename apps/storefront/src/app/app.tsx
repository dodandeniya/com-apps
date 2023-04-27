// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Container, CssBaseline, Grid } from '@mui/material';
import Home from './pages/home/home';
import { Header } from '@com-apps/com-ui';

export function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth={false} disableGutters>
        <Grid direction="column">
          <Grid item>
            <Header color="primary" title="Storefront" />
          </Grid>
          <Grid item>
            <Home />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
