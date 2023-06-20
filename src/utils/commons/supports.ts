import { LteMobiledata } from '@mui/icons-material';
import { useDispatch } from 'react-redux';

export const genrateLinkBackgroundRandom = (num: number) => {
    // const dispatch = useDispatch();

    const url: any = process.env.__API_RANDOM_BACKGROUND__;
    return url;
};
