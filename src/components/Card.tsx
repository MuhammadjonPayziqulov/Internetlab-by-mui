import { ChevronLeft, ChevronRight, Lens } from "@mui/icons-material"
import { Box, Typography, Toolbar, Card, CardHeader, Avatar, CardContent, Stack, CardActionArea } from "@mui/material"

export const CardPost = () => {
    return (
        <Box bgcolor="#F6F8FA" pt="57px" pb="45px">
            <Typography textAlign="center" color="#191C1F" fontWeight={600}
                fontSize={{ lg: "40px", md: "40px", sm: "24px", xs: "24px" }}
                mb={{ lg: "32px", md: "32px", sm: "26px", xs: "26px" }}>
                Отзывы
            </Typography>
            <Toolbar>
                <Box>
                    <ChevronLeft sx={{ color: "#C2C8CD", fontSize: "40px", cursor: "pointer", "&:hover": { color: "#2A6CEA" }, display: { lg: "flex", md: "none", sm: "none", xs: "none" } }} />
                </Box>
                <Stack direction="row" spacing={4} mx="auto">
                    <CardActionArea>
                        <Card sx={{ maxWidth: 341, height: 280, p: "5px" }} >
                            <CardHeader
                                avatar={
                                    <Avatar >
                                        К
                                    </Avatar>
                                }
                                title="Константинов Михаил Павлович"
                                subheader="Санкт-Петербург"
                            />
                            <CardContent sx={{ mt: "-10px" }}>
                                <Typography variant="body2" color="#191C1F" fontWeight={400} fontSize="14px" lineHeight="24px">
                                    Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы
                                </Typography>
                            </CardContent>
                        </Card>
                    </CardActionArea>
                    <CardActionArea sx={{ display: { lg: "block", md: "block", sm: "none", xs: "none" } }}>
                        <Card sx={{ maxWidth: 341, height: 280, p: "5px" }} >
                            <CardHeader
                                avatar={
                                    <Avatar />
                                }
                                title="Иван Иванов"
                                subheader="Санкт-Петербург"
                            />
                            <CardContent sx={{ mt: "-10px" }}>
                                <Typography variant="body2" color="#191C1F">
                                    Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.
                                </Typography>
                            </CardContent>
                        </Card>
                    </CardActionArea>
                    <CardActionArea sx={{ display: { lg: "flex", md: "none", sm: "none", xs: "none" } }}>
                        <Card sx={{ maxWidth: 341, height: 280, p: "5px", }} >
                            <CardHeader
                                avatar={
                                    <Avatar >
                                        К
                                    </Avatar>
                                }
                                title="Артем Корнилов"
                                subheader="Самара"
                            />
                            <CardContent sx={{ mt: "-10px" }}>
                                <Typography variant="body2" color="#191C1F">
                                    Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.
                                </Typography>
                            </CardContent>
                        </Card>
                    </CardActionArea>
                </Stack>
                <Box>
                    <ChevronRight sx={{ color: "#C2C8CD", fontSize: "40px", cursor: "pointer", "&:hover": { color: "#2A6CEA" }, display: { lg: "flex", md: "none", sm: "none", xs: "none" } }} />
                </Box>
            </Toolbar>
            <Stack mt="50px" direction="row" spacing={1} justifyContent="center">
                <Lens sx={{ color: "#2A6CEA", width: "8px", height: "8px" }} />
                <Lens sx={{ color: "#C2C8CD", width: "8px", height: "8px" }} />
                <Lens sx={{ color: "#C2C8CD", width: "8px", height: "8px" }} />
                <Lens sx={{ color: "#C2C8CD", width: "8px", height: "8px" }} />
                <Lens sx={{ color: "#C2C8CD", width: "8px", height: "8px" }} />
            </Stack>
        </Box>
    )
}
