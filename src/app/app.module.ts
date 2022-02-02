import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RankingModule } from './ranking/ranking.module';
import {AccordionModule} from 'primeng/accordion'
import {MenuItem} from 'primeng/api';
import { LayoutModule } from './layout/layout.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {NgPrimeModule} from 'src/app/app.ngprime.module'
import { ServiceGateway } from './services/servicegateway.service';
import { HttpClientModule } from '@angular/common/http';

  
import { DialogModule } from "primeng/dialog";
import { ButtonModule } from "primeng/button";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RankingModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    DialogModule, ButtonModule,
    HttpClientModule
  ],
  providers: [ServiceGateway],
  bootstrap: [AppComponent]
})
export class AppModule { }
