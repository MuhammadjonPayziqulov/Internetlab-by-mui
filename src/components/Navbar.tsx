import { Menu, Close, ChevronRight } from "@mui/icons-material"
import { Box, AppBar, Toolbar, Typography, Button, List, ListItem, ListItemButton, ListItemText, Drawer, styled, CssBaseline } from "@mui/material"
import Logo from "../assets/Logo.png"
import LogoForMobile from "../assets/Logo_Black_text.png"
import { useState } from "react"

export const Navbar = () => {
    const [open, setOpen] = useState(false)
    const navItems = ['Как это работает', '3-й блок', 'Вопросы и ответы', 'Форма'];
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

    const drawer = (
        <Box component="nav">
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #ECEFF2", }}>
                <img src={LogoForMobile} alt="logo" />
                <Button onClick={() => setOpen(false)}>
                    <Close sx={{ color: "#191C1F" }} />
                </Button>
            </Toolbar>
            <List>
                {navItems.map((item) => (
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
            {/* // <div style={{  backgroundImage: `URL("../assets/Bg_header.png)`, height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}> */}
            {/* <div style={{background:"#2A6CEA", opacity:0.8, width:"100%", height:"100vh", position:"absolute"}}></div> */}
            <CssBaseline />
            <Box sx={{ display: 'flex' }}>
                <AppBar component="nav" position="fixed" sx={{zIndex:999}}>
                    <Toolbar sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", bgcolor: "#2A6CEA" }}>
                        <img src={Logo} alt="Logo" />
                        <Button
                            onClick={() => setOpen(true)}
                            color="inherit"
                            sx={{ display: { md: 'flex', lg: "none" } }}
                        >
                            <Menu />
                        </Button>
                        <Box sx={{ display: { xs: "none", sm: "none", md: 'none', lg: "flex" } }}>
                            {navItems.map((item) => (
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
                        p: 3, textAlign: "center", mt: "233px",
                        maxWidth: { lg: "800px", md: "600px", }, mx: "auto"
                    }}>
                    <Typography variant="h1" color="white"
                        sx={{
                            fontSize: { lg: "52px", md: "32px", sm: "24px", xs: "24px" },
                            fontWeight: 600,
                            lineHeight: { lg: "64px", md: "40px", sm: "32px", xs: "32px" }
                        }}>
                        Говорят, никогда не поздно сменить профессию
                    </Typography>
                    <Typography variant="h6" color="white"
                        sx={{
                            fontSize: { lg: "18px", md: "16px", sm: "16px", xs: "16px" },
                            fontWeight: 400,
                            lineHeight: { lg: "32px", md: "28px", sm: "28px", xs: "28px" },
                            mt: { lg: "18px", md: "17px", sm: "10px", xs: "10px" },
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
        </div>
    )
}
