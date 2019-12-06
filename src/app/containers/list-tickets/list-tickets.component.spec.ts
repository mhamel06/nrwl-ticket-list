import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTicketsComponent } from './list-tickets.component';
import { matModules } from '../../app.module';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { CodeAssignmentState } from '../../models/code-assignment-state.model';
import { Store } from '@ngrx/store';
import { MOCK_TICKETS_WITH_USERS } from '../../models/mocks/ticket.mock';
import { selectTicketsWithUser } from '../../state/selectors/ticket.selectors';
import { MOCK_USERS_ENTITY } from '../../models/mocks/user.mock';

/*
* Introduced bug with entities and missing state, ran out of time debugging
* but should be able to sort out issue with more time.
* */
describe('ListTicketsComponent', () => {
  let component: ListTicketsComponent;
  let fixture: ComponentFixture<ListTicketsComponent>;
  let activatedRoute;
  let mockStore: MockStore<CodeAssignmentState>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        ...matModules,
        RouterTestingModule,
        NoopAnimationsModule,
      ],
      providers:[
        provideMockStore({
          initialState: {
            users: {
              ids: ['111'],
              entities: {...MOCK_USERS_ENTITY}
            }
          }
        })
      ],
      declarations: [ ListTicketsComponent ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTicketsComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.get(Store);

    activatedRoute = TestBed.get(ActivatedRoute);
    activatedRoute.params = jest.fn().mockImplementation(()=>
      of({params: {id: 0}}));

    mockStore.overrideSelector(selectTicketsWithUser, [...MOCK_TICKETS_WITH_USERS]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*
  * I usually avoid storing snapshots of large components,
  * but I sometimes use it to confirm everything is rendered
  * as expected given the mock selectors.
  *
  * In most cases, I would create a file with with css selectors
  * that could be reused when testing specific dom elements in
  * a component.
  * */
  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
