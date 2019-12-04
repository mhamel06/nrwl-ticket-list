import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TicketActions } from '../actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { BackendService } from '../../backend.service';
import { of } from 'rxjs';

@Injectable()
export class TicketEffects {

  loadTickets$ = createEffect(()=> this.actions$.pipe(
    ofType(TicketActions.loadTickets),
    switchMap(()=> this.backend.tickets().pipe(
      map(tickets=> TicketActions.ticketsLoadedSuccess({tickets})),
      catchError(error => of(TicketActions.ticketsLoadedError({error})))
    ))
  ));

  constructor(
    private actions$: Actions,
    private backend: BackendService,
  ){

  }
}