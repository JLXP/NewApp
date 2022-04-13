import {useContext} from 'react';

import { NewsContext } from '../context/NewProvider';

export const useNews = () => {
    return useContext(NewsContext)
}