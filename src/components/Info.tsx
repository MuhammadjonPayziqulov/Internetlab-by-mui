import { Box, Grid, Typography, styled } from "@mui/material"
import { Container } from "./Styled"

const InfoTitleTextStyled = styled(Typography)({
    marginBottom: "17px",
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "32px",
    color: "#191C1F"
})

const InfoSubtitleTextStyled = styled(Typography)({
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "28px",
    color: "#191C1F"
})

export const Info = () => {
    return (
        <>
            <Box bgcolor="#F6F8FA" py="68px">
                <Container>
                    <Box>
                        <Grid container spacing={3}>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <InfoTitleTextStyled>
                                    Опрошенных пользовались микрокредитами
                                </InfoTitleTextStyled>
                                <InfoSubtitleTextStyled>
                                    Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах
                                </InfoSubtitleTextStyled>
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <InfoTitleTextStyled>
                                    Опрошенных пользовались микрокредитами
                                </InfoTitleTextStyled>
                                <InfoSubtitleTextStyled>
                                    Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафахНе могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах
                                </InfoSubtitleTextStyled>
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <InfoTitleTextStyled>
                                    Опрошенных пользовались микрокредитами
                                </InfoTitleTextStyled>
                                <InfoSubtitleTextStyled>
                                    Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах
                                </InfoSubtitleTextStyled>
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <InfoTitleTextStyled>
                                    Опрошенных пользовались микрокредитами
                                </InfoTitleTextStyled>
                                <InfoSubtitleTextStyled>
                                    Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафахНе могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах
                                </InfoSubtitleTextStyled>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    )
}
