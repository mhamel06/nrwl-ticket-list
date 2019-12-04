import { createAction, props } from '@ngrx/store';
import { Ticket } from '../../backend.service';

export const loadTickets = createAction(
  '[Tickets] Load Tickets',
);

export const ticketsLoadedSuccess = createAction(
  '[Ticket] Tickets Loaded Success',
  props<{ tickets: Ticket[] }>()
);

export const ticketsLoadedError = createAction(
  '[Ticket] Tickets Loaded Error',
  props<{ error: any }>()
);