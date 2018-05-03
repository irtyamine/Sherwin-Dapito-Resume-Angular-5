import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { AboutComponent } from '../about/about.component';
import { AboutExperienceComponent } from '../about-experience/about-experience.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';

const homeRoute: Routes = [
  	{ path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'experiences', component: AboutExperienceComponent },
    { path: 'contact-me', component: ContactUsComponent },
];

@NgModule({
  imports: [
  	RouterModule.forRoot(homeRoute)
  ],
  exports: [RouterModule],
  declarations: [
    AboutComponent,
    AboutExperienceComponent,
    ContactUsComponent,
    HomeComponent,
  ]
})

export class HomeRoutingModule { }