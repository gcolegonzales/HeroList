import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'list', component: ListComponent},
  {path: 'grid', component: GridComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
