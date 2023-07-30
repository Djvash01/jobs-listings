import { Component } from '@angular/core';
import { Categories } from '@enums/categories.enum';
import { FilterEvent } from '@models/filter-event.model';
import { Job } from '@models/job.model';
import { RequestService } from '@services/request/request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private urlData = 'assets/mocks/data.json';
  private jobs!: Job[];
  public filteredJobs: Job[] = [];
  public categories = [Categories.Role, Categories.Level, Categories.Tools, Categories.Languages ];
  public filters: Record<Categories, string[]> = {
    [Categories.Languages]: [],
    [Categories.Tools]: [],
    [Categories.Level]: [],
    [Categories.Role]: [],
  };

  constructor(private readonly request: RequestService) {
    this.request.get<Job[]>(this.urlData).subscribe((jobs) => {
      this.jobs = jobs;
      this.filteredJobs = jobs;
    });
  }

  public addFilter(filter: FilterEvent): void {
    if (this.filters[filter.category].includes(filter.value)) return;
    this.filters[filter.category].push(filter.value);
    this.filterJobs();
  }

  public removeFilter(filter: FilterEvent): void {
    this.filters[filter.category] = this.filters[filter.category].filter(
      (option) => option !== filter.value
    );
    this.filterJobs();
  }

  private filterJobs(): void {
    this.filteredJobs = this.jobs
      .filter((job) => {
        if (!this.filters[Categories.Role].length) return true;
        return this.filters[Categories.Role].includes(job.role);
      })
      .filter((job) => {
        if (!this.filters[Categories.Level].length) return true;
        return this.filters[Categories.Level].includes(job.level);
      })
      .filter((job) => {
        if (!this.filters[Categories.Tools].length) return true;
        return this.filters[Categories.Tools].every((tool) =>
          job.tools.includes(tool)
        );
      })
      .filter((job) => {
        if (!this.filters[Categories.Languages].length) return true;
        return this.filters[Categories.Languages].every((language) =>
          job.languages.includes(language)
        );
      });
  }

  public jobTrackBy(index: number, job: Job): number {
    return job.id;
  }

  public get isEmptyFilters(): boolean {
    return Object.keys(this.filters).every((key) => {
      const category = key as unknown as Categories;
      return !this.filters[category].length;
    });
  }

  public clearFilters(): void {
    Object.keys(this.filters).forEach((key) => {
      const category = key as unknown as Categories;
      this.filters[category] = [];
      this.filteredJobs = this.jobs;
    });
  }
}
