import { Link, Typography } from '@mui/material';

const Copyright = (props: any) => {
    const timeNow = new Date().getUTCFullYear().toString();
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://www.facebook.com/quanglongdev.dn/">
                Dev Da Nang
            </Link>{' '}
            {timeNow}
            {'. All rights reserved'}
        </Typography>
    );
};

export default Copyright;
