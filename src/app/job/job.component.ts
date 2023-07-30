import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Categories } from '@enums/categories.enum';
import { FilterEvent } from '@models/filter-event.model';
import { Job } from '@models/job.model';
import { ChipType } from '@shared/chip/chip-type.enum';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent {

  @Input() public job!: Job;
  @Output() public filter = new EventEmitter<FilterEvent>();

  public square = ChipType.SQUARE;
  public rounded = ChipType.ROUNDED;
  public role = Categories.Role;
  public level = Categories.Level;
  public tools = Categories.Tools;
  public languages = Categories.Languages;

  public emitFilter(filter: FilterEvent): void {
    this.filter.emit(filter);
  }
}
