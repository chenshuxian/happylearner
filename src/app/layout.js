import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ThemeRegistry from './components/ThemeRegistry/ThemeRegistry'


export const metadata = {
  title: "HappyLearner",
  description: "Happy learn Happy fun",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <AppBar position="fixed" sx={{ zIndex: 10,  backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <Toolbar sx={{  backgroundColor: 'rgba(0, 0, 0, 0.5)', }}>
              <Typography variant="h5" noWrap component="div" color="orange">
                HappyLearner
              </Typography>
            </Toolbar>
          </AppBar>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: 'background.default',
            }}
          >
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
