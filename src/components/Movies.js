import { Grid } from '@material-ui/core'
import React from 'react'
import AddMovie from './AddMovie'
import ViewMovies from './ViewMovies'

const Movies = () => {
    return (
        <div> 
            <Grid container  >
            <Grid item xs={6} sm={6} md={6}> <AddMovie/> </Grid>
            <Grid item xs={6} sm={6} md={6}> <ViewMovies/> </Grid>
           </Grid>
        </div>
    )
}

export default Movies
