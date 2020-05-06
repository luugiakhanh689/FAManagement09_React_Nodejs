import { createSelector } from 'reselect';

const selectRaw = (state) => state.course.destroy;

const selectLoading = createSelector(
  [selectRaw],
  (raw) => !!raw.loading,
);

export default {
  selectLoading
};

