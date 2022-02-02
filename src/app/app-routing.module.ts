import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RankingComponent } from './ranking/ranking.component';

const routes: Routes = [
  // {
  //   path:'',
  //   redirectTo:'/students',
  //   pathMatch:'full'
  // },
  {
    path:'',
    component: RankingComponent,
    children:
    [{
      path:'result',
      loadChildren: () => import('src/app/ranking/ranking.module').then(m=>m.RankingModule),
    }]
  },
  { path:'**', redirectTo:'/home'} 
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
