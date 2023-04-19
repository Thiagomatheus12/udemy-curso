import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
{
  path: '', component: HomeComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],//forchild quando utilizar rotas filhas
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
