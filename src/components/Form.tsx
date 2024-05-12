import { Box, Button, Checkbox, Stack, TextField, Typography, styled } from "@mui/material"
import { Container, Title } from "./Styled"

const TextFieldStyled = styled(TextField)(({ theme }) => ({
    color: "#5E646A",
    fontSize: "18px",
    fontWeight: 600,
    backgroundColor: "#F6F8FA",
    [theme.breakpoints.down("lg")]: {
        width: "350px"
    },
    [theme.breakpoints.down("md")]: {
        width: "70%"
    },
    [theme.breakpoints.down("sm")]: {
        width: "100%"
    },
    [theme.breakpoints.down("xs")]: {
        width: "100%"
    }
}))

export const Form = () => {
    return (
        <>
            <Container>
                <Box py="80px">
                    <Title mb="44px">
                        Отправь форму
                    </Title>
                    <Box maxWidth="700px" mx="auto">
                        <Stack
                            direction={{ lg: "row", md: "row", sm: "column", xs: "column" }} justifyContent="space-between"
                            spacing={2}
                            mb="30px"
                        >
                            <TextFieldStyled variant="outlined" label="Имя" />
                            <TextFieldStyled variant="outlined" label="Телефон" />
                        </Stack>
                        <Stack
                            direction={{ lg: "row", md: "row", sm: "column", xs: "column" }} justifyContent="space-between"
                            spacing={2}
                        >
                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                                width: "100%"
                            }}>
                                <Checkbox />
                                <Typography sx={{
                                    fontSize: "16px",
                                    fontWeight: 400,
                                    lineHeight: "28px",
                                    color: "#191C1F"
                                }}>
                                    Согласен, отказываюсь
                                </Typography>
                            </Box>
                            <Box width="100%">
                                <Button variant="contained" sx={{
                                    width: { lg: "340px", md: "100%", sm: "100%", xs: "100%" },
                                    py: "12px"
                                }}>
                                    Отправить
                                </Button>
                            </Box>
                        </Stack>
                    </Box>
                </Box>
            </Container>
        </>
    )
}
