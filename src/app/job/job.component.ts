import { Component, Input } from '@angular/core';
import { Job } from '@models/job.model';
import { ChipType } from '@shared/chip/chip-type.enum';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent {

  @Input() public job!: Job;

  public square = ChipType.SQUARE;
  public rounded = ChipType.ROUNDED;
}
