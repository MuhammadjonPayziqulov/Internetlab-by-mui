import { Box, Button, Checkbox, Stack, TextField, Typography } from "@mui/material"

export const Form = () => {
    return (
        <>
            <Box py="80px">
                <Typography color="#191C1F" fontWeight={600} textAlign="center" fontSize={{ lg: "40px", sm: "24px", xs: "24px" }} lineHeight="32px" mb="44px">
                    Отправь форму
                </Typography>
                <Box maxWidth="700px" mx="auto">
                    <Stack mb="30px" direction={{ lg: "row", md: "row", sm: "column", xs: "column" }} justifyContent="space-between" spacing={2}>
                        <TextField variant="outlined" label="Имя" sx={{ fontSize: "18px", fontWeight: 400, bgcolor: "#F6F8FA", color: "#5E646A", width: { lg: "350px", md: "70%", sm: "100%", xs: "100%" } }} />
                        <TextField variant="outlined" label="Телефон" sx={{ fontSize: "18px", fontWeight: 400, bgcolor: "#F6F8FA", color: "#5E646A", width: { lg: "350px", md: "70%", sm: "100%", xs: "100%" } }} />
                    </Stack>
                    <Stack direction={{ lg: "row", md: "row", sm: "column", xs: "column" }} justifyContent="space-between" spacing={2}>
                        <Box display="flex" alignItems="center" width="100%">
                            <Checkbox />
                            <Typography fontSize="16px" fontWeight={400} lineHeight="28px" color="#191C1F">
                                Согласен, отказываюсь
                            </Typography>
                        </Box>
                        <Box width="100%">
                            <Button variant="contained" sx={{ width: { lg: "340px", md: "100%", sm: "100%", xs: "100%" }, py: "12px" }}>
                                Отправить
                            </Button>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </>
    )
}
