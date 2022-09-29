import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';



const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'portfolio',component:PortfolioComponent},
  {path:'resume',component:ResumeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent}
  ];
  
  
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    PortfolioComponent
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
