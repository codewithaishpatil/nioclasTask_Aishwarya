import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { Link } from 'react-router-dom';



function Mathjax(props) {
    const [user, setUser] = useState([]);
    let { state } = useLocation();


    const fetchData = async () => {
        try {
            const url = `https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${state.some}`;

            const response = await fetch(url);
            const json = await response.json();
            setUser(json[0].Question)
            console.log("data", json[0].Question);
        } catch (error) {
            console.log("error", error);
        }
    };




    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>


            <Box sx={{ flexGrow: 1 }} pt={4}>
                <Container >
                    <Grid container justifyContent="center"  >
                        <Grid p={3} sx={{ height: "auto", border: "2px solid grey", backgroundColor: "#e4e4f1" }}>
                            <MathJaxContext>
                                <MathJax>{user}</MathJax>
                            </MathJaxContext>
                        </Grid>
                    </Grid>

                    <Grid container justifyContent="end" mt={5}>
                        <Link to="/" style={{textDecoration:"none"}} ><Button  variant="contained" size="small" >Back to Questions</Button></Link>
                    </Grid>

                </Container >
            </Box>
        </div>
    );
}

export default Mathjax;