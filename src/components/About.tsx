import { AddCircleOutline } from "@mui/icons-material"
import { Accordion, AccordionDetails, AccordionSummary, Box, Toolbar, Typography } from "@mui/material"

const demoText = [
    {
        header: "Подтверждено: сознание наших соотечественников не замутнено пропагандой?",
        text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate odit eligendi magnam labore nostrum quasi modi ipsa quis cumque eius!"
    },
    {
        header: "Прототип нового сервиса - это как трубный призыв?",
        text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate odit eligendi magnam labore nostrum quasi modi ipsa quis cumque eius!"
    },
    {
        header: "Частокол на границе продолжает удивлять?",
        text: "В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий."
    },
    {
        header: "Очевидцы сообщают, что слышали грохот грома градущих изменений?",
        text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate odit eligendi magnam labore nostrum quasi modi ipsa quis cumque eius!"
    },
    {
        header: "И по сей день в центральных регионах звучит перекатами печальный плач оппозиции?",
        text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate odit eligendi magnam labore nostrum quasi modi ipsa quis cumque eius!"
    },
    {
        header: "Нынче никто не может себе позволить инициировать треск разлетающихся скреп?",
        text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate odit eligendi magnam labore nostrum quasi modi ipsa quis cumque eius!"
    },
    {
        header: "Высококачественный прототип будущего проекта обнадёживает?",
        text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate odit eligendi magnam labore nostrum quasi modi ipsa quis cumque eius!"
    }
]

export const About = () => {
    return (
        <Box py="80px">
            <Typography textAlign="center" fontWeight={600} fontSize={{lg:"40px", md:"40px", sm:"24px", xs:"24px"}} lineHeight={{lg:"56px", sm:"32px", xs:"32px"}} mb="42px">
                Вопросы и ответы
            </Typography>
            <Toolbar>
                <Box>
                    {demoText.map((el) => (
                        <Accordion sx={{ py: "12px" }} key={el.header}>
                            <AccordionSummary sx={{ color: "#191C1F", fontSize: "18px", fontWeight: 600, lineHeight: "32px", "&:hover": { color: "#2A6CEA" } }}
                                expandIcon={<AddCircleOutline sx={{ "&:hover": { color: "#2A6CEA" } }} />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                {el.header}
                            </AccordionSummary>
                            <AccordionDetails sx={{ color: "#5E646A", fontSize: "18px", fontWeight: 400, lineHeight: "32px" }}>
                                {el.text}
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </Toolbar>
        </Box>
    )
}
