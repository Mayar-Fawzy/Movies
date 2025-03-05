import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';


import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';
import { ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { LogOutComponent } from './log-out/log-out.component';
import { HeaderComponent } from './header/header.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    
    LoginComponent,
    MoviesComponent,
    MoviesDetailsComponent,
    NavbarComponent,
    NotfoundComponent,
    RegisterComponent,
    TvComponent,
    LogOutComponent,
    HeaderComponent,
    ForgetPasswordComponent,
    TvDetailsComponent,
    PersonDetailsComponent,
    SearchComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    CarouselModule ,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
