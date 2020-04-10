import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RepoComponent } from './repo/repo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'profile',component:ProfileComponent},
{path:'repo',component:RepoComponent},
{path:'',redirectTo:"/home",pathMatch:"full"},
{path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HomeComponent,
  ProfileComponent,
  RepoComponent,
  PageNotFoundComponent
]
