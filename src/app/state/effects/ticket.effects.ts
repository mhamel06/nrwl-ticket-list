import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TicketActions } from '../actions';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { BackendService } from '../../backend.service';
import { of } from 'rxjs';

@Injectable()
export class TicketEffects {

  loadTickets$ = createEffect(() => this.actions$.pipe(
    ofType(TicketActions.loadTickets),
    switchMap(() => this.backend.tickets().pipe(
      map(tickets => TicketActions.ticketsLoadedSuccess({tickets})),
      catchError(error => of(TicketActions.ticketsLoadedError({error})))
    ))
  ));

  assignTicket$ = createEffect(() => this.actions$.pipe(
    ofType(TicketActions.assignTicket),
    mergeMap(({ticketId, userId}) =>
      this.backend.assign(ticketId, userId).pipe(
        map((ticket) => TicketActions.assignTicketSuccess({ticket})),
        catchError(error => of(TicketActions.assignTicketFail({error}))))
    ))
  );

  completeTicket$ = createEffect(() => this.actions$.pipe(
    ofType(TicketActions.completeTicket),
    mergeMap(({ticketId, completed}) =>
      this.backend.complete(ticketId, completed).pipe(
        map((ticket) => TicketActions.completeTicketSuccess({ticket})),
        catchError(error => of(TicketActions.completeTicketFail({error})))
      )
    ))
  );

  newTicket$ = createEffect(() => this.actions$.pipe(
    ofType(TicketActions.newTicket),
    mergeMap(({description}) =>
      this.backend.newTicket({description}).pipe(
        map((ticket) => TicketActions.newTicketSuccess({ticket})),
        catchError(error => of(TicketActions.newTicketFailed({error})))
      )
    ))
  );


  constructor(
    private actions$: Actions,
    private backend: BackendService,
  ) {

  }
}