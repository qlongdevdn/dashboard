import { IconButton, Toolbar } from '@mui/material';
import { DrawerHeader } from './index';
interface Iprops {
    isOpen: boolean;
    setOpen?: any;
}
function ToolBar(props: Iprops) {
    const handleDrawerOpen = () => {
        props.setOpen(!props.isOpen);
    };

    return (
        <Toolbar className="header__menu">
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className="header__menu--header"
                sx={{
                    ...(props.isOpen && { display: 'none' })
                }}
            >
                <img src="../../images/menu_close.svg" alt="menu" className="header__menu--icon-header" />
            </IconButton>
            <DrawerHeader className="header__container pheader">
                <div className="header__container">
                    <div className="header__logo">{!props.isOpen && <img src="../../images/logo_menu.svg" alt="logo Pomina" className="header__menu--logo-header" />}</div>
                </div>
            </DrawerHeader>
        </Toolbar>
    );
}

export default ToolBar;
