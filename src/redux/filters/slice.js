import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from '../contacts/slice';

const filterSlice = createSlice({
  name: 'filters',
  initialState: INITIAL_STATE.filters,

  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
    clearFilter(state) {
      state.name = '';
    },
  },
});

export const { changeFilter, clearFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
