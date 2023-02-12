import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import {RootState} from '../config/store';
import {initialData} from '../mockData/initialData';
import {Phase} from '../Types/Phase';
interface PhaseState {
  phases: Phase[];
}

const initialState = {phases: initialData} as PhaseState;

const isPreviousPhaseComplete = (state: PhaseState, phaseIndex: number) => {
  if (phaseIndex === 0) {
    return true;
  }
  const previousPhase = state.phases[phaseIndex - 1];
  return previousPhase.tasks.every(task => task.isComplete);
};

const isCurrentPhaseComplete = (state: PhaseState, phaseIndex: number) => {
  const currentPhase = state.phases[phaseIndex];
  return currentPhase.tasks.every(task => task.isComplete);
};

const phaseSlice = createSlice({
  name: 'phase',
  initialState,
  reducers: {
    toggleTask(
      state,
      action: PayloadAction<{phaseIndex: number; taskIndex: number}>,
    ) {
      const {phaseIndex, taskIndex} = action.payload;
      if (isCurrentPhaseComplete(state, phaseIndex)) {
        // if current phase is complete, toggle task and reset all subsequent phases
        state.phases[phaseIndex].tasks[taskIndex].isComplete =
          !state.phases[phaseIndex].tasks[taskIndex].isComplete;
        state.phases
          .slice(phaseIndex + 1)
          .forEach(phase =>
            phase.tasks.forEach(task => (task.isComplete = false)),
          );
      } else if (isPreviousPhaseComplete(state, phaseIndex)) {
        // if previous phase is complete, toggle task
        state.phases[phaseIndex].tasks[taskIndex].isComplete =
          !state.phases[phaseIndex].tasks[taskIndex].isComplete;
      }
    },
    resetPhase(state) {
      state.phases = initialState.phases;
    },
  },
});

export const selectPhaseList = (state: RootState) => state.phase.phases;
export const {toggleTask, resetPhase} = phaseSlice.actions;

const phasePersistConfig = {
  key: 'phase',
  version: 1,
  storage: AsyncStorage,
};

export default persistReducer(phasePersistConfig, phaseSlice.reducer);
