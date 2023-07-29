import { Component } from '@angular/core';
import { Job } from '@models/job.model';
import { RequestService } from '@services/request/request.service';
import { ChipType } from '@shared/chip/chip-type.enum';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public square = ChipType.SQUARE;
  public rounded = ChipType.ROUNDED;
  private urlData = 'assets/mocks/data.json';
  public jobs: Observable<Job[]>;

  constructor(private readonly request: RequestService){
    this.jobs = this.request.get<Job[]>(this.urlData);
  }

}
