import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {GiftcardComponent} from './components/giftcard/giftcard.component';
import {GiftcardsComponent} from './components/giftcards/giftcards.component';
import {BuyGiftcardComponent} from './components/buy-giftcard/buy-giftcard.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ShowroomComponent} from './components/showroom/showroom.component';

import {AuthService} from './services/auth.service';
import {AuthGuard} from './services/auth.guard';



const routes: Routes = [

{path:'',component: HomeComponent},
{path:'home', component:HomeComponent},
{path:'showroom', component: ShowroomComponent},
{
    path: 'auth',
   
    children: [
     {
       path: 'login',
       component: LoginComponent,
       

     },
     {
       path: 'register',
       component: RegisterComponent,
       
     }
    ]
  },
{path:'giftcard/:id', component: GiftcardComponent},

  {path:'giftcards', component:GiftcardsComponent},
  {path:'edit-giftcard/:id', component:HomeComponent},
  {path:'buy-giftcard', component:BuyGiftcardComponent},
  

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
