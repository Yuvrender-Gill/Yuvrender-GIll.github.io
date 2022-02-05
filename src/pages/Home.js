
import React from 'react';

import { Grid } from '@mui/material';
import AuthorIntro from '../components/AuthorIntro';

import ResponsiveAppBar from '../components/Navbar';

function Home() {
  return (
    <Grid>
      <Grid item xs={12}>
        <ResponsiveAppBar/>
      </Grid>
      <Grid item xs={12}>
        <AuthorIntro></AuthorIntro>
      </Grid>
    </Grid>
  );
}

export default Home;