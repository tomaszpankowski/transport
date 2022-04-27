import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BikeRoutingModule } from './bike-routing.module';
import { BikeComponent } from './bike/bike.component';
import { BikeS1Component } from './bike-s1/bike-s1.component';
import { BikeS2Component } from './bike-s2/bike-s2.component';
import { BikeS3Component } from './bike-s3/bike-s3.component';


@NgModule({
  declarations: [
    BikeComponent,
    BikeS1Component,
    BikeS2Component,
    BikeS3Component
  ],
  imports: [
    CommonModule,
    BikeRoutingModule
  ]
})
export class BikeModule { }
