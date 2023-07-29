import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { ChipComponent } from './chip/chip.component';
import { FilterOptionComponent } from './filter-option/filter-option.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    ChipComponent,
    FilterOptionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    CardComponent,
    ChipComponent,
    FilterOptionComponent
  ]
})
export class SharedModule { }
