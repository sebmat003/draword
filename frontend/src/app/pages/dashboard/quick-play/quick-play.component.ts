import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICharacterSet } from 'src/app/models/player.model';
import { RoomsService } from 'src/app/_core/services/rooms.service';
import { getRandomInt } from '../../../_core/utils/get-random-int.util';
import { DisplayCharacterComponent } from '../../../_core/components/display-character/display-character.component';

@Component({
  selector: 'app-quick-play',
  templateUrl: './quick-play.component.html',
  styleUrls: ['./quick-play.component.scss'],
  standalone: true,
  imports: [DisplayCharacterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuickPlayComponent implements OnInit {
  public characterSet: ICharacterSet = { set: [], gender: 'male' };

  constructor(
    private roomsService: RoomsService,
    private router: Router,
  ) {}

  public ngOnInit(): void {
    this.getRandomSet();
  }

  public changeElement(type: number, direction: string): void {
    if (direction === 'left') {
      this.characterSet.set[type] =
        this.characterSet.set[type] === 1 ? 5 : this.characterSet.set[type] - 1;
    } else if (direction === 'right') {
      this.characterSet.set[type] =
        this.characterSet.set[type] === 5 ? 1 : this.characterSet.set[type] + 1;
    }
    this.characterSet = { ...this.characterSet };
  }

  public getRandomSet(): void {
    const min = 1;
    const max = 5;
    this.characterSet.set = [
      getRandomInt(min, max),
      getRandomInt(min, max),
      getRandomInt(min, max),
    ];
  }

  public moveToExistingGame(): void {
    const games = this.roomsService.dummyRooms
      .filter((el) => el.current_players !== el.max_players)
      .sort((a, b) => b.current_players - a.current_players);
    void this.router.navigateByUrl('/game/' + games[0].id);
  }
}
