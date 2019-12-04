import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CodeAssignmentState } from '../../models/code-assignment-state.model';
import { TicketActions } from '../../state/actions';
import { Observable } from 'rxjs';
import { Ticket } from '../../backend.service';
import { selectAllTickets } from '../../state/selectors/ticket.selectors';

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.css']
})
export class ListTicketsComponent implements OnInit {

  tickets$: Observable<Ticket[]>;

  constructor(private store: Store<CodeAssignmentState>) { }

  ngOnInit() {
    this.store.dispatch(TicketActions.loadTickets());

    this.tickets$ = this.store.pipe(
      select(selectAllTickets)
    );
  }
}
