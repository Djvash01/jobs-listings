import { Component } from '@angular/core';
import { ChipType } from '@shared/chip/chip-type.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public square = ChipType.SQUARE;
  public rounded = ChipType.ROUNDED;

}
