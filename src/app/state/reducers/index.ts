import { Action, combineReducers } from '@ngrx/store';
import { CodeAssignmentState } from '../../models/code-assignment-state.model';
import { ticketsEntityReducer } from './ticket.reducer';

export function CodeAssignmentReducers(state: CodeAssignmentState | undefined, action: Action){
  return combineReducers({
    tickets: ticketsEntityReducer
  })(state, action);
}
