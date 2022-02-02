import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { LayoutModule } from '../layout/layout.module';
import { RankingComponent } from './ranking.component';
import { RankingRoutingModule } from './ranking.routing';
import { StudentsComponent } from './students/students.component';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [
    RankingComponent,
    StudentsComponent,
  ],
  imports: [
    BrowserModule,
    RankingRoutingModule,
    LayoutModule,
    TableModule
  ],
  providers: [],
})
export class RankingModule { }
