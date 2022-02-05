import { IGame, IMessage } from './../../../models/game.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-drawing-panel',
  templateUrl: './drawing-panel.component.html',
  styleUrls: ['./drawing-panel.component.scss'],
})
export class DrawingPanelComponent implements OnInit {
  @Input() public currentWord!: string;
  @Input() public game!: IGame;
  public userMessage!: IMessage;
  constructor() {}

  public ngOnInit(): void {}
}
