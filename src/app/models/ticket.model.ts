import { Ticket, User } from '../backend.service';
import { EntityState } from '@ngrx/entity';

export interface TicketAndUser extends Ticket{
  user: User | {};
}

export interface TicketEntityState extends EntityState<Ticket>{
  selectedTicketId: number | null;
}