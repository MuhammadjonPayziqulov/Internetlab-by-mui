import { AddCircleOutline } from "@mui/icons-material"
import { Accordion, AccordionDetails, AccordionSummary, Box } from "@mui/material"
import { Container, Title } from "./Styled"

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
        <Container>
            <Box py="80px">
                <Title mb="42px">
                    Вопросы и ответы
                </Title>
                    <Box>
                        {demoText.map((el) => (
                            <Accordion sx={{ py: "12px", position:"static"}} key={el.header}>
                                <AccordionSummary sx={{
                                    color: "#191C1F",
                                    fontSize: "18px",
                                    fontWeight: 600,
                                    lineHeight: "32px",
                                    "&:hover": { color: "#2A6CEA" },
                                    position:"static"
                                }}
                                    expandIcon={<AddCircleOutline sx={{ "&:hover": { color: "#2A6CEA" } }} />}
                                >
                                    {el.header}
                                </AccordionSummary>
                                <AccordionDetails sx={{
                                    color: "#5E646A",
                                    fontSize: "18px",
                                    fontWeight: 400,
                                    lineHeight: "32px"
                                }}>
                                    {el.text}
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Box>
            </Box>
        </Container>
    )
}
