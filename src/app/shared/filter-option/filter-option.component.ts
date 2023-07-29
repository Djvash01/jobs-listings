import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-option',
  templateUrl: './filter-option.component.html',
  styleUrls: ['./filter-option.component.scss']
})
export class FilterOptionComponent {
  @Input() public value = '';
  @Output() public remove = new EventEmitter<string>();

  public removeOption(): void {
    this.remove.emit(this.value);
  }

}
