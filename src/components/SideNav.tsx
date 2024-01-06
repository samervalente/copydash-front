import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';
import ArrowTopRightOnSquareIcon from '@heroicons/react/24/solid/ArrowTopRightOnSquareIcon';
import ChevronUpDownIcon from '@heroicons/react/24/solid/ChevronUpDownIcon';
import {
    Box,
    Button,
    Divider,
    Drawer,
    Stack,
    SvgIcon,
    Theme,
    Typography,
    useMediaQuery
} from '@mui/material';
import { Logo } from './Logo';
import { Scrollbar } from './ScrollBar';
import { items } from '@/constants/nav-items';
import { SideNavItem } from './NavItem';

export const SideNav = (props: any) => {
    const { open, onClose } = props;
    const pathname = usePathname();
    const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

    const content = (
        <Scrollbar
            sx={{
                height: '100%',
                '& .simplebar-content': {
                    height: '100%'
                },
                '& .simplebar-scrollbar:before': {
                    background: 'neutral.400'
                }
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                }}
            >
                <Box sx={{ p: 3 }}>
                    <Box
                        component={NextLink}
                        href="/"
                        sx={{
                            display: 'inline-flex',
                            height: 32,
                            width: 32
                        }}
                    >
                        <Logo />
                    </Box>
                    <Box
                        sx={{
                            alignItems: 'center',
                            backgroundColor: 'rgba(255, 255, 255, 0.04)',
                            borderRadius: 1,
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'space-between',
                            mt: 2,
                            p: '12px'
                        }}
                    >
                        <div>
                            <Typography
                                color="inherit"
                                variant="subtitle1"
                            >
                                CopyDash
                            </Typography>
                            <Typography
                                color="neutral.400"
                                variant="body2"
                            >
                                Em desenvolvimento
                            </Typography>
                        </div>
                        <SvgIcon
                            fontSize="small"
                            sx={{ color: 'neutral.500' }}
                        >
                            <ChevronUpDownIcon />
                        </SvgIcon>
                    </Box>
                </Box>
                <Divider sx={{ borderColor: 'neutral.700' }} />
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
                        {items.map((item) => {
                            const active = item.path ? (pathname === item.path) : false;

                            return (
                                <SideNavItem
                                    active={active}
                                    icon={item.icon}
                                    key={item.title}
                                    path={item.path}
                                    title={item.title}
                                />
                            );
                        })}
                    </Stack>
                </Box>
                <Divider sx={{ borderColor: 'neutral.700' }} />
                <Box
                    sx={{
                        px: 2,
                        py: 3
                    }}
                >
                    <Typography
                        color="neutral.100"
                        variant="subtitle2"
                    >
                        Conheça a copybase
                    </Typography>
                    <Typography
                        color="neutral.500"
                        variant="body2"
                    >
                        O segundo cérebro do profissional de marketing
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            mt: 2,
                            mx: 'auto',
                            width: '20px',
                            '& img': {
                                width: '100%'
                            }
                        }}
                    >
                        <img
                            alt="Go to pro"
                            src="https://i.im.ge/2024/01/07/3DzNzG.copybase-logo-1.jpg"
        
                        />
                    </Box>
                    <Button
                        component="a"
                        endIcon={(
                            <SvgIcon fontSize="small">
                                <ArrowTopRightOnSquareIcon />
                            </SvgIcon>
                        )}
                        fullWidth
                        href="https://copybase.com.br/"
                        sx={{ mt: 2 }}
                        target="_blank"
                        variant="contained"
                    >
                        Copybase
                    </Button>
                </Box>
            </Box>
        </Scrollbar>
    );

    if (lgUp) {
        return (
            <Drawer
                anchor="left"
                open
                PaperProps={{
                    sx: {
                        backgroundColor: 'neutral.800',
                        color: 'common.white',
                        width: 280
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
                    backgroundColor: 'neutral.800',
                    color: 'common.white',
                    width: 280
                }
            }}
            sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
            variant="temporary"
        >
            {content}
        </Drawer>
    );
};

SideNav.propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool
};
