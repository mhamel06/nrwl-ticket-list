import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CodeAssignmentState } from '../../models/code-assignment-state.model';
import { Observable, Subject } from 'rxjs';
import { selectTicketsWithUser } from '../../state/selectors/ticket.selectors';
import { TicketAndUser } from '../../models/ticket.model';
import { Ticket, User } from '../../backend.service';
import { TicketActions } from '../../state/actions';
import { MatSelectChange, MatTableDataSource } from '@angular/material';
import { selectAllUsers } from '../../state/selectors/user.selectors';
import { filter, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.css']
})
export class ListTicketsComponent implements OnInit, OnDestroy {
  users$: Observable<User[]>;
  tickets$: Observable<TicketAndUser[]>;
  dataSource: MatTableDataSource<TicketAndUser>;

  onDestroy$ = new Subject();
  displayedColumns = ['id', 'description', 'assigneeName', 'completed', 'view'];

  constructor(private store: Store<CodeAssignmentState>) { }

  ngOnInit() {
    this.tickets$ = this.store.pipe(select(selectTicketsWithUser));
    this.users$ = this.store.pipe(select(selectAllUsers));

    this.tickets$.pipe(
      takeUntil(this.onDestroy$),
      filter(tickets => !!tickets),
      tap(tickets => this.dataSource = new MatTableDataSource(tickets))
    ).subscribe();
  }

  completeTicket(e: MatSelectChange,ticket: Ticket){
    this.store.dispatch(TicketActions.completeTicket({
      ticketId: ticket.id,
      completed: e.value,
    }))
  }

  assignUser(e: MatSelectChange, ticket: Ticket){
    this.store.dispatch(TicketActions.assignTicket({
      ticketId: ticket.id,
      userId: e.value
    }))
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  newTicket(ticketInput){
    this.store.dispatch(TicketActions.newTicket({description: ticketInput.value}));
    ticketInput.value = '';
  }

  ngOnDestroy(){
    this.onDestroy$.next();
  }
}
