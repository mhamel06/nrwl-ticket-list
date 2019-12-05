import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, takeUntil, tap } from 'rxjs/operators';
import { TicketActions } from '../../state/actions';
import { Observable, Subject } from 'rxjs';
import { CodeAssignmentState } from '../../models/code-assignment-state.model';
import { select, Store } from '@ngrx/store';
import { getSelectedTicket } from '../../state/selectors/ticket.selectors';
import { Ticket, User } from '../../backend.service';
import { FormControl, FormGroup } from '@angular/forms';
import { selectAllUsers } from '../../state/selectors/user.selectors';

@Component({
  selector: 'app-view-tickets',
  templateUrl: './view-tickets.component.html',
  styleUrls: ['./view-tickets.component.css']
})
export class ViewTicketsComponent implements OnInit, OnDestroy{
  ticket$: Observable<Ticket>;
  users$: Observable<User[]>;

  onDestroy$ = new Subject();
  ticketFormGroup = new FormGroup({
    id: new FormControl({value: '', disabled: true}),
    description: new FormControl(''),
    assigneeId: new FormControl(''),
    completed: new FormControl(false)
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<CodeAssignmentState>,
    ) { }

  ngOnInit() {
    this.ticket$ = this.store.pipe(
      select(getSelectedTicket)
    );

    this.users$ = this.store.pipe(select(selectAllUsers));

    this.activatedRoute.params.pipe(
      takeUntil(this.onDestroy$),
      map(params => params.id),
      tap(selectedTicketId => this.store.dispatch(
        TicketActions.setSelectedTicket({selectedTicketId}))
      )
    ).subscribe();

    this.ticket$.pipe(
      takeUntil(this.onDestroy$),
      filter(ticket => !!ticket),
      tap(ticket => {
        console.log(ticket);
        this.ticketFormGroup.patchValue(ticket)
      })
    ).subscribe();
  }

  assignTicket(){

  }

  completeTicket(){

  }

  ngOnDestroy(){
    this.onDestroy$.next();
    this.store.dispatch(TicketActions.setSelectedTicket({selectedTicketId: null}))
  }
}
