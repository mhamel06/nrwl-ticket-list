import { createFeatureSelector } from '@ngrx/store';
import { User } from '../../backend.service';
import { EntityState } from '@ngrx/entity';
import { CodeAssignmentState } from '../../models/code-assignment-state.model';
import { userEntityAdapter } from '../reducers/user.reducer';

export const USER_FEATURE_KEY = 'users';


const getUserState = createFeatureSelector<CodeAssignmentState, EntityState<User>>(USER_FEATURE_KEY);

const {
  selectEntities,
  selectAll,
} = userEntityAdapter.getSelectors(getUserState);

export const selectAllUsers = selectAll;
export const selectAllUserEntities = selectEntities;