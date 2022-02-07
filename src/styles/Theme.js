

import { createTheme } from '@mui/material/styles';

// Global Themes
export const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary :{
        main: "#ffffff"
      },
    },
    typography: {
        fontFamily: "R",
    },
});

export const lightTheme = createTheme({
    palette: {
      mode: 'light',

    },

});

// Component Themes
/**
 * 1. authorIntroTheme: Theme settings for the AuthorIntro. 
 * 2. navBarTheme: Theme settings for the NavBar.
 */
export const authorIntroTheme = {
    authorImage: {
        width:'100%', 
        height:'auto',
     
    }
}
