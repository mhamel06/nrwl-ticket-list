import { User } from '../../backend.service';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { UserActions } from '../actions';

export const initialUserState: EntityState<User> = {
  ids: [],
  entities: {},
};

export const userEntityAdapter: EntityAdapter<User> =
  createEntityAdapter<User>({
    selectId: user => user.id
  });

export const userEntityReducer = createReducer(
  initialUserState,

  on(
    UserActions.loadUsersSuccess,
    (state, {users}) => userEntityAdapter.upsertMany(users, state)
  )
);