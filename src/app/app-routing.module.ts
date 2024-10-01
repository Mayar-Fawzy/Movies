import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MoviesComponent } from './movies/movies.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TvComponent } from './tv/tv.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LogOutComponent } from './log-out/log-out.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'' ,redirectTo:'login',pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent},
  {path:'about',canActivate:[AuthGuard],component:AboutComponent},
  {path:'gallery',canActivate:[AuthGuard],component:GalleryComponent},
  {path:'movies',canActivate:[AuthGuard],component:MoviesComponent},
  {path:'tv',canActivate:[AuthGuard],component:TvComponent},
  {path:'contacts',canActivate:[AuthGuard],component:ContactsComponent},
  
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
