import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from '../../shared/shared.module';

import { RouterModule, Routes } from '@angular/router';

import { PublicComponent } from '../public.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { InstructionComponent } from '../instruction/instruction.component';

const routes: Routes = [
  {
    path: '', component: PublicComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'login', component: LoginComponent },
      { path: 'sign-up', component: SignUpComponent }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PublicComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    SignUpComponent,
    NavbarComponent,
    InstructionComponent
  ],
  exports: [
    RouterModule
  ]
})
export class PublicRoutingModule { }