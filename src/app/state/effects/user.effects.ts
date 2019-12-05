import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserActions } from '../actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { BackendService } from '../../backend.service';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {

  /*
  * Load users and handle success and error case
  * */
  loadUsers$ = createEffect(()=> this.actions$.pipe(
    ofType(UserActions.loadUsers),
    /*
    * Could use exhaustMap here instead but don't have a specific use
    * case for either canceling the request (switchMap) or letting the request
    * finish (exhaustMap). I usually use switch map by default.
    * */
    switchMap(()=> this.backend.users().pipe(
      map(users=> UserActions.loadUsersSuccess({users})),
      catchError(error => of(UserActions.loadUsersFail({error})))
    ))
  ));

  constructor(
    private actions$: Actions,
    private backend: BackendService,
  ){

  }
}