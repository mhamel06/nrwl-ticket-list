import { TicketEffects } from './ticket.effects';
import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { Actions } from '@ngrx/effects';
import { BackendService } from '../../backend.service';
import { TicketActions } from '../actions';
import { hot, cold} from 'jasmine-marbles';

describe('TicketEffects', () => {
  let effects: TicketEffects;
  let actions$: Observable<any>;
  let backend: BackendService;
  const mockTickets = [{
    id: 0,
    description: 'Install a monitor arm',
    assigneeId: 111,
    completed: false
  },
    {
      id: 1,
      description: 'Move the desk to the new location',
      assigneeId: 111,
      completed: false
    }];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TicketEffects,
        {
          provide: BackendService,
          useValue: {
            tickets: ()=>of([])
          }
        },
        provideMockStore({}),
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(TicketEffects);
    actions$ = TestBed.get(Actions);
    backend = TestBed.get(BackendService);
  });

  describe('loadTickets$', async() => {
    it('should return tickets loaded success action with ticket response', async() => {


      spyOn(backend,'tickets').and.returnValue(
        cold('-a|', {a: [...mockTickets]})
      );
      const inputAction = TicketActions.loadTickets();
      const outputAction = TicketActions.ticketsLoadedSuccess({tickets: mockTickets});

      actions$ = hot('-a-', {a: inputAction});
      const expectedObservable = cold('--b', {b: outputAction});

      expect(effects.loadTickets$).toBeObservable(expectedObservable)
    });
  });
});