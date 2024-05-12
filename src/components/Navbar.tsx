import { Menu, Close, ChevronRight } from "@mui/icons-material"
import { Box, AppBar, Toolbar, Typography, Button, List, ListItem, ListItemButton, ListItemText, Drawer, styled, CssBaseline } from "@mui/material"
import Logo from "../assets/Logo.png"
import LogoForMobile from "../assets/Logo_Black_text.png"
import { useState } from "react"
import { Container } from "./Styled"

const NAV_ITEMS = ['Как это работает', '3-й блок', 'Вопросы и ответы', 'Форма'];

const LinkBar = styled(Button)({
    color: "white",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "28px",
    "&:hover": {
        textDecoration: "underline"
    }
})

const LinkListItems = styled(ListItemButton)({
    color: "#83898F",
    fontWeight: 600,
    borderBottom: "1px solid #ECEFF2",
    ".css-10hburv-MuiTypography-root": {
        fontSize: "20px"
    }
})

export const Navbar = () => {
    const [open, setOpen] = useState(false)


    const drawer = (
        <Box component="nav">
            <Toolbar sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #ECEFF2",
            }}>
                <img src={LogoForMobile} alt="logo" />
                <Button onClick={() => setOpen(false)}>
                    <Close sx={{ color: "#191C1F" }} />
                </Button>
            </Toolbar>
            <List>
                {NAV_ITEMS.map((item) => (
                    <ListItem key={item} >
                        <LinkListItems>
                            <ListItemText primary={item} />
                            <ChevronRight />
                        </LinkListItems>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div style={{ background: "#2A6CEA", height: "100vh", opacity: 0.8, }}>
            <CssBaseline />
            <Container>
                <Box sx={{ display: 'flex' }}>
                    <AppBar component="nav" position="fixed" sx={{ zIndex: 999 }}>
                        <Toolbar sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            bgcolor: "#2A6CEA"
                        }}>
                            <img src={Logo} alt="Logo" />
                            <Button
                                onClick={() => setOpen(true)}
                                color="inherit"
                                sx={{ display: { lg: "none", md: "none", sm: "flex", xs: "flex" } }}
                            >
                                <Menu />
                            </Button>
                            <Box sx={{ display: { lg: "flex", md: "flex", sm: "none", xs: "none" } }}>
                                {NAV_ITEMS.map((item) => (
                                    <LinkBar key={item}>
                                        {item}
                                    </LinkBar>
                                ))}
                            </Box>
                        </Toolbar>
                    </AppBar>
                    {open &&
                        <nav>
                            <Drawer
                                open={open}
                                onClose={() => setOpen(false)}
                                sx={{
                                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: "100%" },
                                }}
                            >
                                {drawer}
                            </Drawer>
                        </nav>
                    }
                    <Box component="header"
                        sx={{
                            p: 3,
                            textAlign: "center",
                            mt: "233px",
                            maxWidth: { lg: "800px", md: "600px", }, mx: "auto"
                        }}>
                        <Typography variant="h1" color="white"
                            sx={{
                                fontSize: { md: "52px", sm: "32px", xs: "24px" },
                                fontWeight: 600,
                                lineHeight: { md: "50px", sm: "40px", xs: "32px" }
                            }}>
                            Говорят, никогда не поздно сменить профессию
                        </Typography>
                        <Typography variant="h6" color="white"
                            sx={{
                                fontSize: { md: "18px", sm: "16px", xs: "16px" },
                                fontWeight: 400,
                                lineHeight: { md: "32px", sm: "28px", xs: "28px" },
                                mt: { md: "18px", sm: "17px", xs: "10px" },
                                mb: { lg: "92px", md: "40px", sm: "26px", xs: "26px" }
                            }}>
                            Сделай круто тестовое задание и у тебя получится
                        </Typography>
                        <Button
                            sx={{
                                color: "#191C1F", bgcolor: "#ECEFF2", lineHeight: "24px",
                                fontSize: "20px", fontWeight: 600,
                                padding: "20px 40px",
                                "&:hover": { bgcolor: "#ECEFF2" }
                            }}>
                            Проще простого!
                        </Button>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}

// const drawerContent = () => (
//     <Box component="nav">
//         <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #ECEFF2", }}>
//             <img src={LogoForMobile} alt="logo" />
//             <Button >
//                 <Close sx={{ color: "#191C1F" }} />
//             </Button>
//         </Toolbar>
//         <List>
//             {NAV_ITEMS.map((item) => (
//                 <ListItem key={item} >
//                     <LinkListItems>
//                         <ListItemText primary={item} />
//                         <ChevronRight />
//                     </LinkListItems>
//                 </ListItem>
//             ))}
//         </List>
//     </Box>
// );