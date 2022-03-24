import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from'@angular/forms';
import {HttpClientModule}from'@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GiftcardComponent } from './components/giftcard/giftcard.component';
import { GiftcardsComponent } from './components/giftcards/giftcards.component';
import { EditGiftcardComponent } from './components/edit-giftcard/edit-giftcard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BuyGiftcardComponent } from './components/buy-giftcard/buy-giftcard.component';

import{GiftcardService} from './services/giftcard.service';
import { ShowroomComponent } from './components/showroom/showroom.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GiftcardComponent,
    GiftcardsComponent,
    EditGiftcardComponent,
    LoginComponent,
    RegisterComponent,
    BuyGiftcardComponent,
    ShowroomComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [GiftcardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
