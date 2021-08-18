import { configureStore } from '@reduxjs/toolkit';
import stationsReducer from '../screens/stations/stationsSlice';

export default configureStore({
    reducer: {
        stations: stationsReducer
    }
})