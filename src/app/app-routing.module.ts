import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrawingComponent } from './drawing/drawing.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path:'page1',component:DrawingComponent
  },
  {
    path:'page2',component:ViewComponent
  },
  // { path: '', redirectTo: '/page1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
