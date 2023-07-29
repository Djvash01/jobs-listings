import { Component, Input, OnInit, Output } from '@angular/core';
import { ChipType } from './chip-type.enum';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit{

  @Input() public color: string = 'primary-1';
  @Input() public background: string = 'primary-2';
  @Input() public type: ChipType = ChipType.SQUARE;
  @Input() public showPointer = false;


  public square = ChipType.SQUARE;
  public rounded = ChipType.ROUNDED;

  public ngOnInit(): void {

  }

}
