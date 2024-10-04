import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { MoviesComponent } from './movies/movies.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TvComponent } from './tv/tv.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LogOutComponent } from './log-out/log-out.component';
import { AuthGuard } from './auth.guard';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'' ,redirectTo:'login',pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent},
  {path:'search',canActivate:[AuthGuard],component:SearchComponent},
  {path:'movies',canActivate:[AuthGuard],component:MoviesComponent},
    {path:'movies-details/:id',canActivate:[AuthGuard],component:MoviesDetailsComponent},
  {path:'tv',canActivate:[AuthGuard],component:TvComponent},
  {path:'tv-details/:id',canActivate:[AuthGuard],component:TvDetailsComponent},
  {path:'contacts',canActivate:[AuthGuard],component:ContactsComponent},

    {path:'person-details/:id',canActivate:[AuthGuard],component:PersonDetailsComponent},
  {path:'login',component:LoginComponent},
  
  {path:'register',component:RegisterComponent},
  {path:'log-out' ,component:LogOutComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
