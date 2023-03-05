import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function question(props) {
    return (
        <>

            <Box sx={{ flexGrow: 1 }} pt={4}>
                <Container >
                    <Grid container spacing={2} justifyContent="center">


                        <Grid item xs={12} md={3}>
                            <Card sx={{ minWidth: 275 }}>

                                <CardActions>
                           

                                <Button size="small"><Link to="/AreaUnderTheCurve_901" state={{ some: "AreaUnderTheCurve_901" }} style={{textDecoration:"none"}}> Q.1)  Area Under The Curve </Link></Button>
                                </CardActions>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <Card sx={{ minWidth: 275 }}>

                                <CardActions>
                                    <Button size="small"><Link to="/BinomialTheorem_901" state={{ some: "BinomialTheorem_901" }}  style={{textDecoration:"none"}}> Q.2) Binomial Theorem </Link></Button>
                                </CardActions>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <Card sx={{ minWidth: 275 }}>

                                <CardActions  >
                                    <Button size="small" ><Link to="/DifferentialCalculus2_901"  style={{textDecoration:"none" }}  state={{ some: "DifferentialCalculus2_901" }} > Q.3) Differential Calculus2 </Link></Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Container >

            </Box>


        </>
    );
}

export default question;