import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './components/characters/characters.component';
import { CreditsComponent } from './components/credits/credits.component';
import { FilmsComponent } from './components/films/films.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { SpeciesComponent } from './components/species/species.component';

const routes: Routes = [
  {path: 'inicio', component: MainMenuComponent},
  {path: 'characters', component: CharacterComponent},
  {path: 'species', component: SpeciesComponent},
  {path: 'films', component: FilmsComponent},
  {path: 'starships', component: StarshipsComponent},
  {path: 'vehicles', component: MainMenuComponent},
  {path: 'planets', component: PlanetsComponent},
  {path: 'credits', component: CreditsComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }