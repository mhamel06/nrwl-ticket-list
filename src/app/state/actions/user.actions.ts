import { createAction, props } from '@ngrx/store';
import { User } from '../../backend.service';

export const loadUsers = createAction(
  '[User] Load Users',
);

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ users: User[] }>()
);

export const loadUsersFail = createAction(
  '[User] Load Users Fail',
  props<{ error: any }>()
);
