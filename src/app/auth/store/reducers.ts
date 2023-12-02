import {createFeature, createReducer, on} from '@ngrx/store'
import {AuthStateInterface} from '../types/authState.interface'
import {authActions} from './actions'

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
  validationErrors: null,
  currentUser: undefined,
}

const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(authActions.register, (state) => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })),
    on(authActions.registerSuccess, (state, action) => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser,
      isLoading: false,
      validationErrors: null,
    })),
    on(authActions.registerfailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
      isLoading: false,
      currentUser: null,
    }))
  ),
})

export const {
  name: authFeatureKey,
  reducer: authReducer,
  selectIsSubmitting,
  selectIsLoading,
  selectCurrentUser,
  selectValidationErrors,
} = authFeature
