import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';

interface PhaseState {
  phases: any[];
}

const initialState = {phases: []} as PhaseState;

const phaseSlice = createSlice({
  name: 'phase',
  initialState,
  reducers: {},
});

const phasePersistConfig = {
  key: 'phase',
  version: 1,
  storage: AsyncStorage,
};

export default persistReducer(phasePersistConfig, phaseSlice.reducer);
