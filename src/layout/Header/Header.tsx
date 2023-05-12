import { Box } from '@mui/material';
import { FC, useState } from 'react';
import { AppBar } from '../Sidebar/index';
import NavBar from '../Sidebar/NavBar';
import ToolBar from '../Sidebar/ToolBar';

interface IProps {
    children?: React.ReactNode;
}
const Header: FC<IProps> = () => {
    const [open, setOpen] = useState<boolean>(false);

    const checkIsOpen = () => {
        setOpen(!open);
    };

    return (
        <Box className="header-container">
            <AppBar position="fixed" open={open}>
                <ToolBar isOpen={open} setOpen={setOpen} />
            </AppBar>
            <NavBar isOpen={open} handleDrawerOpen={checkIsOpen} />
        </Box>
    );
};

export default Header;
