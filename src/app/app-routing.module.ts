import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { FinishComponent } from './component/finish/finish.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { LayoutPressComponent } from './component/layout-press/layout-press.component';

const routes: Routes = [
  {path: 'press' , component: LayoutPressComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'finish' , component: FinishComponent},
  {path: 'pres' , component: LayoutPressComponent},
 // {path: '**' , component: NotFoundComponent},
 
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 