import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    HomePageComponent,
    SidebarComponent,
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent,
    ContactPageComponent
  ]
})
export class SharedModule { }
