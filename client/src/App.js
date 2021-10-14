
import React from 'react';
// Check out documentation with this link:
// https://www.npmjs.com/package/@material-ui/core
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';


// Become familar with @material-ui and implement front end desing and styling
// In the components -> Form -> styles.js ||| add styling as necessary. Same for all components in folder.
const App = () => {
    const classes= useStyles();
    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Bookish</Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid containter justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;