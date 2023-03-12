import { Avatar, Grid, Typography } from '@mui/material'
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Calendar } from 'react-calendar';


// to made paper component using Material ui 

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Calender_Teams = () => {

    const [calendar_Value, setCalendar_Value] = React.useState(new Date());
    const [toggleCalendar, settoggleCalendar] = React.useState(false);

    const toggleCalendarHandler = () => {
        settoggleCalendar(!toggleCalendar);

    }
    return (

        <Grid container style={{
            backgroundColor: "white",
            height: "80vh", width: "93vw", marginTop: "15.5vh", marginLeft: "6vw", overflow: "auto"
        }}>

            {/* it contains subheader  */}
            <Stack sx={{ mb: 1, pt: 0.5, mx: "auto", width: "98%", backgroundColor: "#48db0d", }}>
                <Item sx={{ pt: 1.5, textAlign: "left", }}>
                    <Box sx={{ display: 'inline-block', mr: 3 }}><Avatar src="/broken-image.jpg" sx={{ width: 40, height: 40, }} />
                    </Box>
                    <Box sx={{ display: 'inline-block' }}><Typography variant='h3' style={{ fontSize: '24px', fontWeight: "bold" }} >Gokul Jana</Typography ><Typography >Choose a time that works for you.</Typography>
                    </Box>
                </Item>

            </Stack>


            {/* it contains current month-year and icons  */}
            <Box sx={{ width: "80vw", mx: "auto" }} >

                <Stack direction="row" sx={{ m: "40px auto", display: "flex", justifyContent: "space-between", }}>
                    <Item ><Typography /></Item>
                    <Item><Typography variant='p' component={"h2"} sx={{ fontSize: '15px', }} >February 2023</Typography > </Item>
                    <Item>
                        <CalendarMonthIcon sx={{ cursor: 'pointer' }} onClick={toggleCalendarHandler} />


                        <KeyboardArrowLeftIcon />
                        <KeyboardArrowRightIcon />
                        {toggleCalendar ? <Calendar onChange={(e) => { setCalendar_Value(e.target.value) }} value={calendar_Value} style={{ height: "7vh", width: "4px" }} /> : null}

                    </Item>

                </Stack>


                {/* it contains calendar structure  */}
                <Stack direction="row" spacing={2} sx={{ mx: "auto", width: "90%", display: "flex", justifyContent: "space-around", backgroundColor: "#faf0e6", }}>

                    {/* rendering day-column for 7 times  */}
                    {[1, 2, 3, 4, 5, 6, 7].map((e) => (
                        <Item >

                            <Stack spacing={1}>
                                <Item ><Paper square elevation={1} sx={{ height: 60, width: 90, borderRadius: 1, }}>
                                    <Typography>Wed</Typography>
                                    <Typography sx={{ fontWeight: "bold", }}>01</Typography>
                                </Paper></Item>

                                <Item>

                                    {/* rendering meeting time for 9 times  */}
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => (


                                        <Paper variant="outlined" square elevation={24} sx={{ mb: 1, height: 30, width: 90, border: "2px solid #4c9c84", borderRadius: 2, pt: 1, '&:hover': { backgroundColor: "#31a381" } }}>

                                            <Typography sx={{ fontWeight: "bold", fontSize: 15 }}>01:30 PM</Typography>
                                        </Paper>
                                    ))}
                                </Item>

                            </Stack>
                        </Item>
                    ))}

                </Stack>




            </Box>

        </Grid >
    )

}

export default Calender_Teams