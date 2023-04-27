// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CssBaseline, Container, Grid } from '@mui/material';
import { Header } from '@com-apps/com-ui';
import Home from './pages/home/home';

export function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth={false} disableGutters>
        <Grid direction="column">
          <Grid item>
            <Header color="secondary" title="Admin App" />
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
