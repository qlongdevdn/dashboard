import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
const Login = () => {
    return (
        <div className="body-container">
            <Card className="card-container">
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <CardContent>
                           <div>
                                {/* <img src="" alt="Image random from unsplash" /> */}
                           </div>
                        </CardContent>
                    </Grid>
                    <Grid item xs={6}>
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
