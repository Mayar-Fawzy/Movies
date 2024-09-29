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

const routes: Routes = [
  {path:'' ,redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'movies',component:MoviesComponent},
  {path:'tv',component:TvComponent},
  {path:'contacts',component:ContactsComponent},
  
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
