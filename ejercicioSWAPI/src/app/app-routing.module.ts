import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StarshipsComponent } from './components/starships/starships.component';

const routes: Routes = [
  {path: 'inicio', component: MainMenuComponent},
  {path: 'personajes', component: MainMenuComponent},
  {path: 'films', component: MainMenuComponent},
  {path: 'species', component: MainMenuComponent},
  {path: 'starships', component: StarshipsComponent},
  {path: 'vehicles', component: MainMenuComponent},
  {path: 'planets', component: MainMenuComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }