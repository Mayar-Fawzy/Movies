import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';
import { ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    GalleryComponent,
    AboutComponent,
    LoginComponent,
    MoviesComponent,
    MoviesDetailsComponent,
    NavbarComponent,
    NotfoundComponent,
    RegisterComponent,
    TvComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
