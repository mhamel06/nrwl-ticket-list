import { ticketEntityAdapter } from '../reducers/ticket.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Ticket, User } from '../../backend.service';
import { Dictionary, EntityState } from '@ngrx/entity';
import { CodeAssignmentState } from '../../models/code-assignment-state.model';
import { selectAllUserEntities } from './user.selectors';
import { TicketAndUser, TicketEntityState } from '../../models/ticket.model';

export const TICKETS_FEATURE_KEY = 'tickets';


const getTicketState = createFeatureSelector<CodeAssignmentState, TicketEntityState>(TICKETS_FEATURE_KEY);

const {
  selectEntities,
  selectAll,
} = ticketEntityAdapter.getSelectors(getTicketState);

export const selectAllTickets = selectAll;

/*
* Create selector with user mapped to ticket. It's repetitive but
* I think it's cleaner to use in the list tickets table.
*
* Being explicit here to ensure I actually return what I am expecting.
* */
export const selectTicketsWithUser = createSelector<CodeAssignmentState, Ticket[], Dictionary<User>, TicketAndUser[]>(
  selectAllTickets,
  selectAllUserEntities,
  (tickets, userEntities) => tickets.map((ticket) => {
    const user = userEntities[ticket.assigneeId] || {};

    return {
      ...ticket,
      user
    }
  })
);

export const getSelectedTicketId = createSelector(
  getTicketState,
  (state) => state.selectedTicketId
);

export const getSelectedTicket = createSelector(
  selectEntities,
  getSelectedTicketId,
  (ticketEntities, selectedTicketId) => ticketEntities[selectedTicketId]
);