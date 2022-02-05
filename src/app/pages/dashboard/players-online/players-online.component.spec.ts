import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersOnlineComponent } from './players-online.component';

describe('PlayersOnlineComponent', () => {
  let component: PlayersOnlineComponent;
  let fixture: ComponentFixture<PlayersOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersOnlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
