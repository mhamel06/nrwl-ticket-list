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
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ticketsEntityReducer } from './state/reducers/ticket.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatTableModule
} from '@angular/material';
import { userEntityReducer } from './state/reducers/user.reducer';
import { UserEffects } from './state/effects/user.effects';
import { ReactiveFormsModule } from '@angular/forms';

const matModules = [
  MatListModule,
  MatTableModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatButtonModule,
];

const compDeclarations = [
  AppComponent,
  ListTicketsComponent,
  ViewTicketsComponent
];

@NgModule({
  declarations: [...compDeclarations],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    /*
    * State
    * */
    StoreModule.forRoot({
      tickets: ticketsEntityReducer,
      users: userEntityReducer,
    }),
    // Be sure to disable for prod
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([
      TicketEffects,
      UserEffects,
    ]),

    /*
    * Material modules
    * */
    ...matModules,

    ReactiveFormsModule,

    /*
    * Routing (can move out)
    * */
    RouterModule.forRoot([
      {path: 'tickets', component: ListTicketsComponent},
      {path: 'tickets/:id', component: ViewTicketsComponent},
      {path: '', redirectTo: '/tickets', pathMatch:'full'}
    ]),

  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
