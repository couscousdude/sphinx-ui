import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Landing(props) {
    const { auth } = props;
    let navigate = useNavigate();
    const handleClick = () => {
        if (auth) {
            navigate("/dashboard");
        } else {
            navigate("/signin");
        }
    }

    return (
        <Button variant="text" onClick={handleClick}>
            Enter
        </Button>
    )
}