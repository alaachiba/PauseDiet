import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function Section1() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl" sx={{ margin: "2% 0" }}>
                <Box sx={{ height: 'auto', flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <iframe
                                className='video'
                                title='Youtube player'
                                src={`https://www.youtube.com/embed/hQhzOyDwwmQ?si=B1610O5sVgcQLjvj?autoplay=0`}
                                width={'100%'}
                                height={'100%'}
                                style={{ borderRadius: "10px", borderStyle: "none" }}
                            >
                            </iframe>
                        </Grid>
                        <Grid item xs={4} container alignItems="center" justifyContent="center">
                            <img
                                src="https://scontent.ftun14-1.fna.fbcdn.net/v/t1.6435-9/123597915_2736669109995293_1417731200689492646_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=be3454&_nc_ohc=vatmA0__aasAX8-vj4T&_nc_ht=scontent.ftun14-1.fna&oh=00_AfC8SkGhZp9i6GHeqgmlHLEt9ULG3RJZz_DhbzCw92Ty2A&oe=64FB40AE"
                                style={{ width: "100%", height: "100%", display: "block", margin: "0 auto" }}
                                alt="Jellazi"
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>
    )
}

export default Section1;
