import { Component } from '@angular/core';
import { CodeAssignmentState } from './models/code-assignment-state.model';
import { Store } from '@ngrx/store';
import { TicketActions, UserActions } from './state/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private store: Store<CodeAssignmentState>) { }

  ngOnInit() {
    this.store.dispatch(TicketActions.loadTickets());
    this.store.dispatch(UserActions.loadUsers());
  }
}
