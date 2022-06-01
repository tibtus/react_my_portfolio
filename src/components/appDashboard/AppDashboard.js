import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import './AppDashboard.scss';

function AppDashboard () {


    return (

        <div className="AppDashboard">

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={6} className={'DashboardGrid'}>
                    <Grid item xs={12} md={12}>
                        <div className={'DashboardGrid_container'}>xs=6 md=8</div>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <div className={'DashboardGrid_container'}>xs=6 md=8</div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className={'DashboardGrid_container'}>xs=6 md=4</div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className={'DashboardGrid_container'}>xs=6 md=4</div>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <div className={'DashboardGrid_container'}>xs=6 md=8</div>
                    </Grid>
                </Grid>
            </Box>


        </div>
    )
}


export default AppDashboard;