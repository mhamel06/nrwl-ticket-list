import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { matModules } from './app.module';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        ...matModules,
        RouterTestingModule,
      ],
      providers:[
        provideMockStore()
      ],
      declarations: [
        AppComponent
      ],
    })
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
