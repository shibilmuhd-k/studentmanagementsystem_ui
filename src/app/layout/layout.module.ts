import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { SidenavOneComponent } from './sidenav-one/sidenav-one.component';
import {SidebarModule} from 'primeng/sidebar';

@NgModule({
  declarations: [
    HeaderComponent,
    SideNavComponent,
    LayoutComponent,
    SidenavOneComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SidebarModule
  ],
  providers: [],
  exports:[ SideNavComponent,HeaderComponent]
})
export class LayoutModule { }
