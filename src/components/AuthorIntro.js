
import React from 'react';
import {
    Stack, Grid, IconButton  ,
    Typography,
    Avatar
} from '@mui/material';
import img from '../assets/img/DisplayImage1.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { authorIntroTheme } from '../styles/Theme';

import {
  authorIntroductionConfig, 
  authorImageConfig,
  authorSocialsConfig
} from '../configs/HomePageConfig';


function AuthorIntro() {
  return (
    <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} sm={12} md={2}
          style={{justifyContent:"center", alignItems:"center"}}
        >
          <Avatar 
            src={img} 
            alt={authorImageConfig.altText} 
            sx={{ 
                width:authorIntroTheme.authorImage.width,
                height:authorIntroTheme.authorImage.height 
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}
          justifyContent="center"
          style={{justifyContent:"center", alignItems:"center"}}
        >
          <Typography
            variant="h3"
            align='center'
          >
            Data Engineer @ BenchSci
          </Typography>
        </Grid>
        <Grid 
          item xs={12} sm={12} md={6}
          style={{justifyContent:"center", alignItems:"center"}}
        >
          
            {authorIntroductionConfig.map( (configItem) => (
              <Typography key={configItem.id} variant="h6" color="primary" align='center'>
                {configItem.item}
              </Typography>
              )) 
            }
        
        </Grid>
        <Grid 
          item xs={12} sm={12} md={12}
          style={{justifyContent:"center", alignItems:"center"}}
        >
          <Stack 
            direction="row" 
            spacing={3} 
            style={{justifyContent:"center", alignItems:"center"}}
          >
            <IconButton onClick={() => window.open(authorSocialsConfig[0].itemLink, "_blank")}>
                <GitHubIcon />
            </IconButton>
            <IconButton onClick={() => window.open(authorSocialsConfig[1].itemLink, "_blank")}>
                <LinkedInIcon />
            </IconButton>
            <IconButton onClick={() => window.open(authorSocialsConfig[2].itemLink, "_blank")}>
                <TwitterIcon />
            </IconButton>
          </Stack>
        </Grid>
    </Grid>
  );
}

export default AuthorIntro;