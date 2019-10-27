import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormRoutingModule, FORM_COMPONENTS} from './form-routing.module';
import { Component } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  	FORM_COMPONENTS,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormRoutingModule,	
  ],
})
export class FormModule {

}
