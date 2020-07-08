import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenTweetsComponent } from './open-tweets.component';

describe('OpenTweetsComponent', () => {
  let component: OpenTweetsComponent;
  let fixture: ComponentFixture<OpenTweetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenTweetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
