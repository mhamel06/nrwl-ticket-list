import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BackendService} from './backend.service';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { ListTicketsComponent } from './containers/list-tickets/list-tickets.component';
import { ViewTicketsComponent } from './containers/view-tickets/view-tickets.component';
import { StoreModule } from '@ngrx/store';
import { TicketEffects } from './state/effects/ticket.effects';
import { CodeAssignmentReducers } from './state/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ticketsEntityReducer } from './state/reducers/ticket.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ListTicketsComponent,
    ViewTicketsComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      tickets: ticketsEntityReducer
    }),
    StoreDevtoolsModule.instrument(),
    RouterModule.forRoot([
      {path: 'tickets', component: ListTicketsComponent},
      {path: 'tickets/{id}', component: ListTicketsComponent},
      {path: '', redirectTo: '/tickets', pathMatch:'full'}
    ]),
    EffectsModule.forRoot([
      TicketEffects
    ]),
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
