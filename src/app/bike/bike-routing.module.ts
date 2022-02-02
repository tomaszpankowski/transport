import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikeComponent } from './bike/bike.component';

const routes: Routes = [
  {
    path: "bike",
    component:BikeComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BikeRoutingModule { }
