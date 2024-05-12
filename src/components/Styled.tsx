import { Box, Typography, styled } from "@mui/material";


export const Title = styled(Typography)(({ theme }) => ({
    textAlign: "center",
    color: "#191C1F",
    fontWeight: 600,
    [theme.breakpoints.down("lg")]: {
        fontSize: "40px",
        lineHeight: "56px"
    },
    [theme.breakpoints.down("md")]: {
        fontSize: "35px",
        lineHeight: "56px"
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "24px",
        lineHeight: "32px"
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "24px",
        lineHeight: "32px"
    }
}))

export const Container = styled(Box)({
    maxWidth:"1400px",
    margin:"0 auto",
    padding:"0 10px"
})