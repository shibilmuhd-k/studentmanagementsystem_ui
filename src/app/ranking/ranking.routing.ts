import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RankingComponent } from './ranking.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
    {
        path:'', component:StudentsComponent,
        children: [
            {path:'students', component: StudentsComponent},
            {path: 'home',component:DashboardComponent},
            {path:'', redirectTo:'home', pathMatch:'full'},
            {path:'**', component: DashboardComponent}
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RankingRoutingModule { }
