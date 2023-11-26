import { AuthStateInterface } from '../types/authState.interface';
import { createSelector } from '@ngrx/store';

// export const selectFeature = (state: { auth: AuthStateInterface }) =>
//   state.auth;

// export const selectIsSubmitting = createSelector(
//   selectFeature,
//   (state) => state.isSubmitting
// );


// no need to manually write selectors, ngrx is smart enough to pass them down to us. The implementation for selector will be in reducers.ts
