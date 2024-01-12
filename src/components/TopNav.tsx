import PropTypes from 'prop-types';
import {
    Box
} from '@mui/material';
import { alpha } from '@mui/material/styles';


const SIDE_NAV_WIDTH = 280;

export const TopNav = (props: any) => {

    return (
        <Box
            component="header"
            sx={{
                backdropFilter: 'blur(6px)',
                backgroundColor: (theme) => alpha(theme.palette.background.default, 0.8),
                position: 'sticky',
                left: {
                    lg: `${SIDE_NAV_WIDTH}px`
                },
                top: 0,
                width: {
                    lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`
                },
                zIndex: (theme) => theme.zIndex.appBar
            }}
        >

        </Box>
    );
};

TopNav.propTypes = {
    onNavOpen: PropTypes.func
};
