import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound(props) {
    const navigate = useNavigate();
    function handleClick() {
        navigate(-1);
    }
    return (
        <Container maxWidth="md" sx={{marginTop: "100px"}}>
            <Typography>
                This link either does not exist, is broken, or you are not signed in.
            </Typography>
            <Button onClick={handleClick}>Go Back Home</Button>
        </Container>
        
    )
}