import { useLocation } from 'react-router-dom';
import {
    Box,
    Drawer,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,

} from '@mui/material';
import { items } from './Config';
import { SideNavItem } from './SideNavItem';

export const SideNav = ({ open, onClose }: { open: any, onClose: any }) => {


    const { pathname } = useLocation();
    const theme = useTheme();
    const lgUp = useMediaQuery(theme.breakpoints.up('md'));

    const content = (
        <Box
            component="nav"
            sx={{
                flexGrow: 1,
                px: 2,
                py: 3
            }}
        >
            <Stack
                component="ul"
                spacing={0.5}
                sx={{
                    listStyle: 'none',
                    p: 0,
                    m: 0
                }}
            >
                {items().map((item) => (
                    <Box
                        key={item.title}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%'
                        }}
                    >
                        <Typography
                            color="inherit"
                            variant="subtitle1"
                        >
                            {item.title}
                        </Typography>
                        {item.subitems.map((element: any) => {
                            const active = element.path ? (pathname === element.path) : false;
                            return (
                                <SideNavItem
                                    key={element.title}
                                    active={active}
                                    disabled={element.disabled}
                                    // external={element.external}
                                    icon={element.icon}
                                    path={element.path}
                                    title={element.title}
                                />
                            );
                        })}
                    </Box>
                ))}
            </Stack>
        </Box>
    );

    if (lgUp) {
        return (
            <Drawer
                anchor="left"
                open
                PaperProps={{
                    sx: {
                        backgroundColor: '#125C53',
                        color: 'white',
                        width: 220
                    }
                }}
                variant="permanent"
            >
                {content}
            </Drawer>
        );
    }

    return (
        <Drawer
            anchor="left"
            onClose={onClose}
            open={open}
            PaperProps={{
                sx: {
                    backgroundColor: '#125C53',
                    color: 'white',
                    width: 220
                }
            }}
            sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
            variant="temporary"
        >
            {content}
        </Drawer>
    );
};
