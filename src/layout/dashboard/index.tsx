import Header from '../Header/Header';
import Footer from '../Footer';
import { isAuthenticated } from '../../redux/selectors/auth.selector';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NAME_ROUTE } from '../../routes/path';
import { useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const DashboardLayout = () => {
    const isAuth = useSelector(isAuthenticated);
    const mdTheme = createTheme();

    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuth) {
            navigate(NAME_ROUTE.AUTH.DEFAULT_PATH + '/' + NAME_ROUTE.AUTH.LOGIN);
        }
    }, [isAuth, navigate]);

    return (
        <ThemeProvider theme={mdTheme}>
            <Header />
            <Footer />
        </ThemeProvider>
    );
};

export default DashboardLayout;
