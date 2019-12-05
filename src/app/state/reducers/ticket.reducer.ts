import { Ticket } from '../../backend.service';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { TicketActions } from '../actions';
import { TicketEntityState } from '../../models/ticket.model';

export const initialTicketState: TicketEntityState = {
  ids: [],
  entities: {},
  selectedTicketId: null,
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
  ),

  on(
    TicketActions.setSelectedTicket,
    (state, {selectedTicketId}) => ({...state, selectedTicketId})
  ),

  on(
    TicketActions.completeTicketSuccess,
    (state, {ticket}) => ticketEntityAdapter.updateOne({
      id: ticket.id,
      changes: {
        ...ticket
      }
    }, state)
  ),

  on(
    TicketActions.assignTicketSuccess,
    (state, {ticket}) => ticketEntityAdapter.updateOne({
      id: ticket.id,
      changes: {
        ...ticket
      }
    }, state)
  ),

  on(
    TicketActions.newTicketSuccess,
    (state, {ticket}) => ticketEntityAdapter.upsertOne(ticket, state)
  ),
);