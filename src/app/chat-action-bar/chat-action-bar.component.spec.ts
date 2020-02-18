import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatActionBarComponent } from './chat-action-bar.component';

describe('ChatActionBarComponent', () => {
  let component: ChatActionBarComponent;
  let fixture: ComponentFixture<ChatActionBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatActionBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatActionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
