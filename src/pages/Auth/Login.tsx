import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomBackgroundRequest } from 'src/redux/actions/supports.action';
import { getRandomBackgroundDetail } from 'src/redux/selectors/supports.selector';
// import { useForm } from 'react-hook-form';
// import { userLoginRequest } from 'src/types/auth.type';
import { TextField } from '@mui/material';
import Copyright from 'src/layout/Footer/Copyright';

const Login = () => {
    const dispatch = useDispatch();
    const [urlBackground, seturlBackgroud] = useState<string>();
    const objBackground = useSelector(getRandomBackgroundDetail);
    // const {
    //     control,
    //     formState: { errors },
    //     handleSubmit,
    //     setValue,
    //     getValues,
    //     watch,
    //     clearErrors,
    //     reset
    // } = useForm<userLoginRequest>();

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
            <Card className="card-container" sx={{ mt: 1 }}>
                <Grid className="child-container" container>
                    <Grid item xs={8}>
                        <CardContent className="background-auth-container" sx={{ backgroundImage: `url(${urlBackground})` }} alt-img="Image random from unsplash"></CardContent>
                    </Grid>
                    <Grid item xs={4} className="form-auth">
                        <CardContent className="form-auth form-auth__form-login">
                            <div className="form-auth__logo-auth">
                                <Grid item className="logo-auth" sx={{ mb: 5 }} />
                                <h2>Log in</h2>
                            </div>
                            <TextField color="secondary" className="form-auth__form-input" placeholder="Please enter your email" label="Email" sx={{ mb: 4 }} type="email" />
                            <TextField className="form-auth__form-input" placeholder="Please enter your password" label="Password" type="password" />
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
            <Copyright sx={{ mb: 1 }} />
        </div>
    );
};

export default Login;
