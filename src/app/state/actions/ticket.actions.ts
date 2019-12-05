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

export const setSelectedTicket = createAction(
  '[Ticket] Set Selected Ticket',
  props<{ selectedTicketId: number | null }>()
);

/*
* Not needed yet since each attribute has it's own
* service method
* */
export const saveTicket = createAction(
  '[Ticket] Save Ticket',
  props<{ ticket: Ticket }>()
);

export const completeTicket = createAction(
  '[Ticket] Complete Ticket',
  props<{ ticketId: number, completed: boolean }>()
);

export const completeTicketFail = createAction(
  '[Ticket] Complete Ticket Fail',
  props<{ error: any }>()
);

export const completeTicketSuccess = createAction(
  '[Ticket] Complete Ticket Success',
  props<{ ticketId: number, completed: boolean }>()
);

export const assignTicket = createAction(
  '[Ticket] Assign Ticket',
  props<{ ticketId: number, userId: number }>()
);

export const assignTicketFail = createAction(
  '[Ticket] Assign Ticket Fail',
  props<{ error: any }>()
);

export const assignTicketSuccess = createAction(
  '[Ticket] Assign Ticket Success',
  props<{ ticketId: number, userId: number }>()
);

export const newTicket = createAction(
  '[Ticket] New Ticket',
  props<{ description: string }>()
);

export const newTicketFailed = createAction(
  '[Ticket] New Ticket Failed',
  props<{ error: any }>()
);

export const newTicketSuccess = createAction(
  '[Ticket] New Ticket Success',
  props<{ ticket: Ticket }>()
);




