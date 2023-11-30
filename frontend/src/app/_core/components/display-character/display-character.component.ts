import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ICharacterSet } from 'src/app/models/player.model';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-display-character',
  templateUrl: './display-character.component.html',
  styleUrls: ['./display-character.component.scss'],
  standalone: true,
  imports: [NgStyle],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayCharacterComponent {
  @Input() public characterSet!: ICharacterSet;
  @Input() public width = '15rem';
  @Input() public height = '15rem';
}
