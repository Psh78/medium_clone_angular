import {createAction, createActionGroup, emptyProps, props} from '@ngrx/store'
import {RegisterRequestInterface} from '../types/registerRequest.interface'
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface'
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'

// export const register = createAction(
//   '[Auth] Register',
//   props<{request: RegisterRequestInterface}>()
// )

// export const registerSuccess = createAction(
//   '[Auth] Register Success',
//   props<{request: RegisterRequestInterface}>()
// )

// export const registerFailure = createAction(
//   '[Auth] Register Failure',
//   props<{request: RegisterRequestInterface}>()
// )

// for effects we need three actions. The first one will be the action, second is on success of that action, third is on failure of that action.
// so we used the below to create action groups

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<{request: RegisterRequestInterface}>(),
    'Register Success': props<{currentUser: CurrentUserInterface}>(),
    RegisterFailure: props<{errors: BackendErrorsInterface}>(),
  },
})
