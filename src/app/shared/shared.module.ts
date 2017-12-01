import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardInformationComponent } from './card-information/card-information.component';
import { StyleMaterialModule } from '../style-material/style-material.module';

@NgModule({
  imports: [
    CommonModule,
    StyleMaterialModule
  ],
  declarations: [CardInformationComponent],
  exports: [CardInformationComponent]
})
export class SharedModule { }
