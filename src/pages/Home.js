
import React from 'react';

import { Grid } from '@mui/material';
import AuthorIntro from '../components/AuthorIntro';
import MediaCard from '../components/Card'
import ResponsiveAppBar from '../components/Navbar';

function Home() {
  return (
    <Grid>
      <Grid item >
        <ResponsiveAppBar/>
      </Grid>
      <Grid item padding={5}>
        <AuthorIntro></AuthorIntro>
      </Grid>
      <Grid item paddingX={2}>
        {/* <MediaCard></MediaCard> */}
      </Grid>
    </Grid>
  );
}

export default Home;