import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

const Header = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" align="justify"  >MOVIE APP</Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
