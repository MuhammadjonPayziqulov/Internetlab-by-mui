import { ChevronLeft, ChevronRight, Lens } from "@mui/icons-material"
import { Box, Typography, Card, CardHeader, Avatar, CardContent, Stack, CardActionArea, styled } from "@mui/material"
import { Container, Title } from "./Styled"

const TurnIconStyled = styled(Box)({
    color: "#C2C8CD",
    cursor: "pointer",
    ":hover": { color: "#2A6CEA" }
})

const CardWrapperStyled = styled(Stack)({
    display: "flex",
    flexDirection: "row",
    margin: "0 auto",
    gap: "15px"
})

const CardStyled = styled(Card)({
    maxWidth: 341,
    height: 280,
    padding: "5px"
})

const CardContentTextStyled = styled(Typography)({
    color: "#191C1F",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "24px",
    marginTop: "-10px"
})

const CardActionAreaStyled = styled(CardActionArea)(({ theme }) => ({
    display: "flex",
    position: "static",
    [theme.breakpoints.down(850)]: {
        display: "none"
    },
    [theme.breakpoints.down("md")]: {
        display: "none"
    },
    [theme.breakpoints.down("sm")]: {
        display: "none"
    },
    [theme.breakpoints.down("xs")]: {
        display: "none"
    }
}))

const CardActionAreaStyledForMobile = styled(CardActionArea)(({ theme }) => ({
    display: "block",
    position: "static",
    [theme.breakpoints.down("md")]: {
        display: "block"
    },
    [theme.breakpoints.down(600)]: {
        display: "none"
    },
    [theme.breakpoints.down("sm")]: {
        display: "none"
    },
    [theme.breakpoints.down("xs")]: {
        display: "none"
    }
}))

const LensIconStyle = {
    color: "#C2C8CD",
    width: "8px",
    height: "8px"
}

export const CardPost = () => {
    return (
        <Box bgcolor="#F6F8FA" pt="57px" pb="45px">
            <Container>
                <Title sx={{
                    marginBottom: { lg: "32px", md: "32px", sm: "26px", xs: "26px" }
                }}>
                    Отзывы
                </Title>
                <Box sx={{
                    display: "flex",
                    alignItems: "center"
                }}>
                    <TurnIconStyled>
                        <ChevronLeft sx={{
                            display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
                            fontSize: "40px",
                        }} />
                    </TurnIconStyled>
                    <CardWrapperStyled>
                        <CardActionArea sx={{ position: "static" }}>
                            <CardStyled >
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ position: "static" }}>
                                            К
                                        </Avatar>
                                    }
                                    title="Константинов Михаил Павлович"
                                    subheader="Санкт-Петербург"
                                />
                                <CardContent>
                                    <CardContentTextStyled>
                                        Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы
                                    </CardContentTextStyled>
                                </CardContent>
                            </CardStyled>
                        </CardActionArea>
                        <CardActionAreaStyledForMobile>
                            <CardStyled>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ position: "static" }} />
                                    }
                                    title="Иван Иванов"
                                    subheader="Санкт-Петербург"
                                />
                                <CardContent>
                                    <CardContentTextStyled>
                                        Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.
                                    </CardContentTextStyled>
                                </CardContent>
                            </CardStyled>
                        </CardActionAreaStyledForMobile>
                        <CardActionAreaStyled >
                            <CardStyled>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ position: "static" }}>
                                            К
                                        </Avatar>
                                    }
                                    title="Артем Корнилов"
                                    subheader="Самара"
                                />
                                <CardContent>
                                    <CardContentTextStyled>
                                        Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.
                                    </CardContentTextStyled>
                                </CardContent>
                            </CardStyled>
                        </CardActionAreaStyled>
                    </CardWrapperStyled>
                    <TurnIconStyled>
                        <ChevronRight sx={{
                            display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
                            fontSize: "40px",
                        }} />
                    </TurnIconStyled>
                </Box>
                <Stack mt="50px" direction="row" spacing={1} justifyContent="center">
                    <Lens sx={{ color: "#2A6CEA", width: "8px", height: "8px" }} />
                    <Lens sx={LensIconStyle} />
                    <Lens sx={LensIconStyle} />
                    <Lens sx={LensIconStyle} />
                    <Lens sx={LensIconStyle} />
                </Stack>
            </Container>
        </Box>
    )
}
