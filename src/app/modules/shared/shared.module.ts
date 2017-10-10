import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MdButtonModule,
  MdCardModule,
  MdInputModule,
  MdProgressSpinnerModule,
  MdSnackBarModule,
  MdToolbarModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MdToolbarModule,
    MdInputModule,
    MdButtonModule,
    MdProgressSpinnerModule,
    MdCardModule,
    MdSnackBarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    MdToolbarModule,
    MdInputModule,
    MdButtonModule,
    MdProgressSpinnerModule,
    MdCardModule,
    MdSnackBarModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {}
