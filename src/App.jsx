import React from 'react';
import {Container,Grid,Typography} from '@mui/material';
import {Form} from './components/Form'
import { NewProvider } from './context/NewProvider';
import {ListNews} from './components/ListNews';


export const App = () => {
  return (
    <NewProvider>
      <Container>
        <header>
          <Typography align="center" marginY={5} component="h1" variant="h3">
            Look for News
          </Typography>
        </header>
        <Grid 
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} md={6} lg={4}>
            <Form/>
          </Grid>
        </Grid>
        <ListNews/>
      </Container>
    </NewProvider>
  )
}

