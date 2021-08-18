import { createSlice } from '@reduxjs/toolkit';
import stations from '../../stations.json';

export const slice = createSlice({
    name: "stations",
    initialState: {
        value: stations
    },
})

export const selectStations = state => state.stations.value;

export default slice.reducer;