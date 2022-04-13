import React from 'react';
import {Grid, Typography} from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useNews } from '../hooks/useNews';
import { New } from './New';



export const ListNews = () => {

    const {news, totalNews, handleChangePage,page} = useNews();

    const totalPages = Math.ceil(totalNews/20);


  return (
    <>
        <Typography
            textAlign={'center'}
            marginY={5}
            variant='h3'
            component={'h2'}
        >
            Last News
        </Typography>
        {/*spacing es para dejar espacio*/}
        <Grid 
        container
        spacing={2}
        >
            {news.map(noticia =>(
                <New 
                key={noticia.url}
                noticia={noticia}/>
            ))}
        </Grid>

        <Stack
            sx={{marginY:5}} 
            spacing={1} 
            direction={'row'}
            justifyContent='center'
            alignItems='center'
            >
            <Pagination 
                count={totalPages} 
                color="primary"
                onChange={handleChangePage}
                page={page}
             />
        </Stack>
        
    </>
  )
}

