import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomBackgroundRequest } from 'src/redux/actions/supports.action';
import { getRandomBackgroundDetail } from 'src/redux/selectors/supports.selector';
const Login = () => {
    const dispatch = useDispatch();
    const [urlBackground, seturlBackgroud] = useState<string>();
    const objBackground = useSelector(getRandomBackgroundDetail);

    useEffect(() => {
        const url = process.env.API_RANDOM_BACKGROUD;
        const key = process.env.ACCESS_KEY_API_RANDOM_BACKGROUND;
        if (key !== 'undefined') {
            dispatch(getRandomBackgroundRequest.request({ host: url, key: key }));
        }
    }, [dispatch]);
    useEffect(() => {
        if (objBackground?.urls) {
            seturlBackgroud(objBackground.urls.regular);
        }
    }, [objBackground]);

    return (
        <div className="body-container">
            <Card className="card-container">
                <Grid className="child-container" container>
                    <Grid item xs={6}>
                        <CardContent className="background-auth-container"  sx={{  backgroundImage: `url(${urlBackground})`}} alt-img="Image random from unsplash" >
                            {/* <img className="background-auth" src={urlBackground} alt="Image random from unsplash" /> */}
                        </CardContent>
                    </Grid>
                    <Grid item xs={6} className='form-auth'>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Word of the Day
                            </Typography>
                            <Typography variant="h5" component="div"></Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                adjective
                            </Typography>
                            <Typography variant="body2">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
        </div>
    );
};

export default Login;
