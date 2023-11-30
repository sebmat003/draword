import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RulesComponent {}
