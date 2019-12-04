import { Ticket, User } from '../backend.service';
import { EntityState } from '@ngrx/entity';

export interface CodeAssignmentState{
  tickets: EntityState<Ticket>;
  users: EntityState<User>;
}