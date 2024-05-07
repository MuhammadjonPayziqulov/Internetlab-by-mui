import { Typography, Box, Toolbar, Grid, CardContent, Stack } from "@mui/material"
import Waiting from "../assets/waiting.png"
import Truck from "../assets/delivery-truck.png"
import Secure from "../assets/secure.png"
import MoneyBags from "../assets/money-bags.png"
import Driver from "../assets/DriverWithTruck.png"

export const Main = () => {
    return (
        <Box sx={{ py: { lg: "80px", md: "56px", sm: "56px", xs: "56px" } }} bgcolor="white">
            <Typography textAlign="center"
                sx={{
                    color: "#191C1F", fontWeight: 600, lineHeight: { lg: "56px", sm: "32px", xs: "32px" },
                    fontSize: { lg: "40px", sm: "24px", xs: "24px" },
                }}
            >
                Как это работает
            </Typography>
            <Toolbar>
                <Grid mt={{ lg: "61px", md: "42px", sm: "26px", xs: "26px" }}  container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} mb={{ lg: "80px", md: "56px", sm: "56px", xs: "56px" }}>
                    <Grid item lg={3} md={6} sm={12} xs={12}>
                        <CardContent>
                            <Stack direction={{ lg: "column", md: "row", sm: "row", xs: "row" }} spacing={{ lg: 0, md: 2, sm: 2, xs: 2 }}>
                                <Box>
                                    <img src={Waiting} alt="Waiting image"  style={{zIndex:0}} />
                                </Box>
                                <Box>
                                    <Typography gutterBottom variant="h5" component="div" color="#191C1F" fontSize="16px" lineHeight="24px">
                                        Прочитай задание внимательно
                                    </Typography>
                                    <Typography variant="body2" color="#5E646A" fontSize="14px" lineHeight="24px">
                                        Думаю у тебя не займет это больше двух-трех минут
                                    </Typography>
                                </Box>
                            </Stack>
                        </CardContent>
                    </Grid>
                    <Grid item lg={3} md={6} sm={12} xs={12} >
                        <CardContent>
                            <Stack direction={{ lg: "column", md: "row", sm: "row", xs: "row" }} spacing={{ lg: 0, md: 2, sm: 2, xs: 2 }}>
                                <Box>
                                    <img src={Truck} alt="Truck image" />
                                </Box>
                                <Box>
                                    <Typography gutterBottom variant="h5" component="div" color="#191C1F" fontSize="16px" lineHeight="24px">
                                        Изучи весь макет заранее
                                    </Typography>
                                    <Typography variant="body2" color="#5E646A" fontSize="14px" lineHeight="24px">
                                        Подумай как это будет работать на разных разрешениях и при скролле
                                    </Typography>
                                </Box>
                            </Stack>
                        </CardContent>
                    </Grid>
                    <Grid item lg={3} md={6} sm={12} xs={12} >
                        <CardContent>
                            <Stack direction={{ lg: "column", md: "row", sm: "row", xs: "row" }} spacing={{ lg: 0, md: 2, sm: 2, xs: 2 }}>
                                <Box>
                                    <img src={Secure} alt="Secure image" />
                                </Box>
                                <Box>
                                    <Typography gutterBottom variant="h5" component="div" color="#191C1F" fontSize="16px" lineHeight="24px">
                                        Сделай хорошо
                                    </Typography>
                                    <Typography variant="body2" color="#5E646A" fontSize="14px" lineHeight="24px">
                                        Чтобы мы могли тебе доверить подобные задачи в будущем
                                    </Typography>
                                </Box>
                            </Stack>
                        </CardContent>
                    </Grid>
                    <Grid item lg={3} md={6} sm={12} xs={12}>
                        <CardContent>
                            <Stack direction={{ lg: "column", md: "row", sm: "row", xs: "row" }} spacing={{ lg: 0, md: 2, sm: 2, xs: 2 }}>
                                <Box>
                                    <img src={MoneyBags} alt="MoneyBags image" />
                                </Box>
                                <Box>
                                    <Typography gutterBottom variant="h5" component="div" color="#191C1F" fontSize="16px" lineHeight="24px">
                                        Получи предложение
                                    </Typography>
                                    <Typography variant="body2" color="#5E646A" fontSize="14px" lineHeight="24px">
                                        Ну тут все просто, не я придумал правила, но думаю так и будет)))
                                    </Typography>
                                </Box>
                            </Stack>
                        </CardContent>
                    </Grid>
                </Grid>
            </Toolbar>
            <Toolbar>
                <Stack direction={{ lg: "row", md: "row", sm: "column-reverse", xs: "column-reverse" }} gap="32px" alignItems="center" flexWrap={{ lg: "nowrap", md: "wrap-reverse", }}>
                    <Box>
                        <Typography fontSize={{ lg: "32px", md: "20px", sm: "20px", xs: "20px" }} color="#191C1F" fontWeight={600} lineHeight={{ lg: "40px", md: "24px", sm: "24px", xs: "24px" }}>
                            Круто, ты дошел до третьего блока
                        </Typography>
                        <Typography mb="35px" mt={{ lg: "18px", md: "15px", sm: "7px", xs: "27px" }}
                            color="#5E646A" fontWeight={400} lineHeight="28px" fontSize="16px" maxWidth="550px">
                            63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы свыше 15 000 ₽.
                        </Typography>
                        <Typography color="#5E646A" fontWeight={400} lineHeight="28px" fontSize="16px" maxWidth="550px">
                            Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах.
                        </Typography>
                    </Box>
                    <Box>
                        <img src={Driver} alt="Driver" width="100%" />
                    </Box>
                </Stack>
            </Toolbar>
        </Box>
    )
}
