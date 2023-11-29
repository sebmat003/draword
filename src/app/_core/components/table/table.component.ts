import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {}
