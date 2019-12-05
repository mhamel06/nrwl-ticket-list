import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTicketsComponent } from './view-tickets.component';
import { matModules } from '../../app.module';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { CodeAssignmentState } from '../../models/code-assignment-state.model';
import { Store } from '@ngrx/store';

describe('ViewTicketsComponent', () => {
  let component: ViewTicketsComponent;
  let fixture: ComponentFixture<ViewTicketsComponent>;
  let mockStore: MockStore<CodeAssignmentState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        ...matModules,
        RouterTestingModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
      ],
      providers:[
        provideMockStore()
      ],
      declarations: [ ViewTicketsComponent ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockStore = TestBed.get(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
