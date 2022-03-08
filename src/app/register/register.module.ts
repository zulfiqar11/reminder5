import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { MaterialModule } from '../shared/material.module';
import { HighlightDirective } from './highlight.directive';


@NgModule({
  declarations: [
    RegisterComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
