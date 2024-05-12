import { Typography, Box, Grid, CardContent, Stack, styled } from "@mui/material"
import Waiting from "../assets/waiting.png"
import Truck from "../assets/delivery-truck.png"
import Secure from "../assets/secure.png"
import MoneyBags from "../assets/money-bags.png"
import Driver from "../assets/DriverWithTruck.png"
import { Container, Title } from "./Styled"

const CardGridWrapper = styled(Grid)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    [theme.breakpoints.down("lg")]: {
        gridTemplateColumns: "auto auto auto"
    },
    [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "6"
    },
    [theme.breakpoints.down("sm")]: {
        gridColumn: "12"
    },
    [theme.breakpoints.down("xs")]: {
        gridColumn: "12"
    }
}))

const CardContentStyled = styled(Stack)(({ theme }) => ({
    display: "flex",
    [theme.breakpoints.down("lg")]: {
        flexDirection: "column",
    },
    [theme.breakpoints.down("md")]: {
        flexDirection: "row",
        gap: "2px"
    },
    [theme.breakpoints.down("sm")]: {
        flexDirection: "row",
        gap: "2px"
    },
    [theme.breakpoints.down("xs")]: {
        flexDirection: "row",
        gap: "2px"
    }
}))

const CardContentTitleStyled = styled(Typography)({
    color: "#191C1F",
    fontSize: "16px",
    lineHeight: "24px"
})

const CardContentSubtitleStyled = styled(Typography)({
    color: "#5E646A",
    fontSize: "14px",
    lineHeight: "24px"
})

const ResultTextSubtitle = styled(Typography)({
    maxWidth: "550px",
    color: "#5E646A",
    fontWeight: 400,
    lineHeight: "28px",
    fontSize: "16px"
})


export const Main = () => {
    return (
        <Container>
            <Box sx={{ py: { lg: "80px", md: "56px", sm: "56px", xs: "56px" } }} bgcolor="white">
                <Title>
                    Как это работает
                </Title>
                <Box>
                    <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        mt={{ lg: "61px", md: "42px", sm: "26px", xs: "26px" }}
                        mb={{ lg: "80px", md: "56px", sm: "56px", xs: "56px" }}>
                        <CardGridWrapper  >
                            <CardContent>
                                <CardContentStyled>
                                    <Box>
                                        <img src={Waiting} alt="Waiting image" style={{ zIndex: 0 }} />
                                    </Box>
                                    <Box>
                                        <CardContentTitleStyled>
                                            Прочитай задание внимательно
                                        </CardContentTitleStyled>
                                        <CardContentSubtitleStyled>
                                            Думаю у тебя не займет это больше двух-трех минут
                                        </CardContentSubtitleStyled>
                                    </Box>
                                </CardContentStyled>
                            </CardContent>
                        </CardGridWrapper>
                        <CardGridWrapper>
                            <CardContent>
                                <CardContentStyled>
                                    <Box>
                                        <img src={Truck} alt="Truck image" />
                                    </Box>
                                    <Box>
                                        <CardContentTitleStyled>
                                            Изучи весь макет заранее
                                        </CardContentTitleStyled>
                                        <CardContentSubtitleStyled>
                                            Подумай как это будет работать на разных разрешениях и при скролле
                                        </CardContentSubtitleStyled>
                                    </Box>
                                </CardContentStyled>
                            </CardContent>
                        </CardGridWrapper>
                        <CardGridWrapper >
                            <CardContent>
                                <CardContentStyled>
                                    <Box>
                                        <img src={Secure} alt="Secure image" />
                                    </Box>
                                    <Box>
                                        <CardContentTitleStyled>
                                            Сделай хорошо
                                        </CardContentTitleStyled>
                                        <CardContentSubtitleStyled>
                                            Чтобы мы могли тебе доверить подобные задачи в будущем
                                        </CardContentSubtitleStyled>
                                    </Box>
                                </CardContentStyled>
                            </CardContent>
                        </CardGridWrapper>
                        <CardGridWrapper >
                            <CardContent>
                                <CardContentStyled>
                                    <Box>
                                        <img src={MoneyBags} alt="MoneyBags image" />
                                    </Box>
                                    <Box>
                                        <CardContentTitleStyled>
                                            Получи предложение
                                        </CardContentTitleStyled>
                                        <CardContentSubtitleStyled>
                                            Ну тут все просто, не я придумал правила, но думаю так и будет)))
                                        </CardContentSubtitleStyled>
                                    </Box>
                                </CardContentStyled>
                            </CardContent>
                        </CardGridWrapper>
                    </Grid>
                </Box>
                <Box>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: { lg: "row", md: "row", sm: "column-reverse", xs: "column-reverse" },
                        gap: "10px"
                    }}>
                        <Box>
                            <Typography sx={{
                                color: "#191C1F",
                                fontWeight: 600,
                                fontSize: { lg: "32px", md: "20px", sm: "20px", xs: "20px" },
                                lineHeight: { lg: "40px", md: "24px", sm: "24px", xs: "24px" }
                            }}>
                                Круто, ты дошел до третьего блока
                            </Typography>
                            <ResultTextSubtitle sx={{
                                marginBottom: "35px",
                                marginTop: { lg: "18px", md: "15px", sm: "7px", xs: "27px" }
                            }}>
                                63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы свыше 15 000 ₽.
                            </ResultTextSubtitle>
                            <ResultTextSubtitle>
                                Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах.
                            </ResultTextSubtitle>
                        </Box>
                        <Box>
                            <img src={Driver} alt="Driver" width="100%" />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}
