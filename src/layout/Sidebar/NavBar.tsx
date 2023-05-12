import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { DrawerHeader, Drawer } from './index';
// import NavItem from './NavItem';
import { Link } from 'react-router-dom';

interface Iprops {
    isOpen: boolean;
    handleDrawerOpen?: any;
}

function NavBar(props: Iprops) {
    const [open, setOpen] = useState<boolean>(true);
    console.log(open);
    useEffect(() => {
        setOpen(props.isOpen);
    }, [props.isOpen]);

    // const checkIsOpen = (e: boolean) => {
    //     setOpen(e);
    //     props.handleDrawerOpen(e);
    // };

    return (
        <Drawer variant="permanent" open={open} className="navbar--left">
            <DrawerHeader className="navbar--inside">
                <div>
                    <Link to="/">
                        <Typography>
                            <img src="../../images/logo_menu.svg" alt="logo" className="header__menu--logo" />
                        </Typography>
                    </Link>
                </div>
                <div className="header__menu">
                    <IconButton
                        onClick={() => {
                            setOpen(!open), props.handleDrawerOpen();
                        }}
                    >
                        <img src="../../images/menu_close.svg" alt="menu" className="header__menu--icon header__menu--icon-navbar" />
                    </IconButton>
                </div>
            </DrawerHeader>
            {/* <NavItem open={open} checkIsOpen={checkIsOpen} /> */}
        </Drawer>
    );
}
export default NavBar;
