import { Component } from '@angular/core';
import { Categories } from '@enums/categories.enum';
import { Level } from '@enums/level.enum';
import { FilterEvent } from '@models/filter-event.model';
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

  private urlData = 'assets/mocks/data.json';
  public jobs$: Observable<Job[]>;
  public role = Categories.Role;
  public level = Categories.Level;
  public tools = Categories.Tools;
  public languages = Categories.Languages;
  public filters: Record<Categories, string[]> = {
    [Categories.Languages] : [],
    [Categories.Tools] : [],
    [Categories.Level] : [],
    [Categories.Role] : [],
  }

  constructor(private readonly request: RequestService){
    this.jobs$ = this.request.get<Job[]>(this.urlData);
  }

  public addFilter(filter:FilterEvent): void {
    if(this.filters[filter.category].includes(filter.value)) return;
    this.filters[filter.category].push(filter.value);
  }

  public jobTrackBy(index: number, job: Job): number {
    return job.id;
  }

  public get isEmptyFilters(): boolean {
    return !this.filters[this.languages].length &&
      !this.filters[this.tools].length &&
      !this.filters[this.level].length &&
      !this.filters[this.role].length;
  }

}
