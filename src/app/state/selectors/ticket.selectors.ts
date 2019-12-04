import { ticketEntityAdapter } from '../reducers/ticket.reducer';
import { createFeatureSelector } from '@ngrx/store';
import { Ticket } from '../../backend.service';
import { EntityState } from '@ngrx/entity';
import { CodeAssignmentState } from '../../models/code-assignment-state.model';

export const TICKETS_FEATURE_KEY = 'tickets';


const getTicketState = createFeatureSelector<CodeAssignmentState, EntityState<Ticket>>(TICKETS_FEATURE_KEY);

const {
  selectEntities,
  selectAll,
} = ticketEntityAdapter.getSelectors(getTicketState);

export const selectAllTickets = selectAll;