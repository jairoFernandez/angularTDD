import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatNativeDateModule } from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule, 
    MatNativeDateModule,
    MatInputModule
  ],
  declarations: [],
  exports: [
    BrowserAnimationsModule, MatButtonModule, 
    MatCheckboxModule, MatDatepickerModule, 
    MatFormFieldModule, MatNativeDateModule, MatInputModule
  ]
})
export class StyleMaterialModule { }
