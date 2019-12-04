import { Component } from '@angular/core';
import {BackendService} from './backend.service';
import { CodeAssignmentState } from './models/code-assignment-state.model';
import { Store } from '@ngrx/store';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // tickets = this.backend.tickets();
  // users = this.backend.users();

  constructor() {}
}
