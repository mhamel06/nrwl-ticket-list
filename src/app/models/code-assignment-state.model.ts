import { User } from '../backend.service';
import { EntityState } from '@ngrx/entity';
import { TicketEntityState } from './ticket.model';

export interface CodeAssignmentState{
  tickets: TicketEntityState;
  users: EntityState<User>;
}