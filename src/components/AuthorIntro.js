
import React from 'react';

import { Box, Grid } from '@mui/material';
import img from '../assets/img/DisplayImage.png'
import Typography from '@mui/material/Typography';

import { authorIntroTheme } from '../styles/Theme';
import {
  authorIntroductionConfig, authorImageConfig
} from '../configs/HomePageConfig';


function AuthorIntro() {
  return (
    <Grid container justifyContent="center" spacing={12}>
        <Grid 
          item 
          xs={3} 
          container
          direction="column"
          style={{justifyContent:"center", alignItems:"center"}}
        >
          <Box>
            {authorIntroductionConfig.map( (configItem) => (
              <Typography  variant="h6" color="primary" >
                {configItem.item}
              </Typography>
              )) 
            }
          </Box>
        </Grid>

        <Grid item xs={3}>
          <img 
            src={img} 
            alt={authorImageConfig.altText} 
            width={authorIntroTheme.authorImage.width}
            height={authorIntroTheme.authorImage.height}
          />
        </Grid>

    </Grid>
  );
}

export default AuthorIntro;