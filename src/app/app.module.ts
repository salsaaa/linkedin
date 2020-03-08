import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatCardModule,
  MatMenuModule,
  MatButtonModule,
  MatListModule,
  MatFormFieldModule,
  MatSlideToggleModule,
  MatIconModule,
  MatInputModule,
  MatTabGroup,
} from '@angular/material';

import { CardsComponent } from './cards/home-card/cards.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { WelcomeCardComponent } from './cards/welcome-card/welcome-card.component';
import { StartPostComponent } from './cards/start-post/start-post.component';
import { CreatePostComponent } from './cards/create-post/create-post.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsComponent } from './forms/forms.component';
import { PostCardComponent } from './cards/post-card/post-card.component';
import { OptionDropdownComponent } from './option-dropdown/option-dropdown.component';


import { FooterComponent } from './footer/footer.component';

import { RegestrationComponent } from './components/regestration/regestration.component';
import { SigninComponent } from './components/signin/signin.component';
import { from } from 'rxjs';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    DropdownComponent,

    WelcomeCardComponent,
    StartPostComponent,
    CreatePostComponent,
    ProfileComponent,
    FormsComponent,
    FooterComponent,


    RegestrationComponent,
    SigninComponent,

    PostCardComponent,
    OptionDropdownComponent,
<<<<<<< HEAD
    ProfileComponent,
    CommentComponent
=======

>>>>>>> b07f8a1382937fb1d40857439a3952506e63bfb3
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    MatSlideToggleModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
