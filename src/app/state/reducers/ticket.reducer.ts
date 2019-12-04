import { Ticket } from '../../backend.service';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { TicketActions } from '../actions';

export const initialTicketState: EntityState<Ticket> = {
  ids: [],
  entities: {},
};

export const ticketEntityAdapter: EntityAdapter<Ticket> =
  createEntityAdapter<Ticket>({
    selectId: ticket => ticket.id
  });

export const ticketsEntityReducer = createReducer(
  initialTicketState,

  on(
    TicketActions.ticketsLoadedSuccess,
    (state, {tickets}) => ticketEntityAdapter.upsertMany(tickets, state)
  )
);