import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { ChipComponent } from './chip/chip.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    ChipComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    CardComponent,
    ChipComponent
  ]
})
export class SharedModule { }
