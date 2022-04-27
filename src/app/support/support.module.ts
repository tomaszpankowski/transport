import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportRoutingModule } from './support-routing.module';
import { SupportComponent } from './support/support.component';
import { SupportS1Component } from './support-s1/support-s1.component';
import { SupportS2Component } from './support-s2/support-s2.component';
import { SupportS3Component } from './support-s3/support-s3.component';
import { SupportS4Component } from './support-s4/support-s4.component';
import { SupportS5Component } from './support-s5/support-s5.component';


@NgModule({
  declarations: [
    SupportComponent,
    SupportS1Component,
    SupportS2Component,
    SupportS3Component,
    SupportS4Component,
    SupportS5Component
  ],
  imports: [
    CommonModule,
    SupportRoutingModule
  ]
})
export class SupportModule { }
