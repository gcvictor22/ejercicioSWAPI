import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MaterialImportsModule } from './material-imports/material-imports.module';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { FilmsComponent } from './components/films/films.component';
import { CharacterComponent } from './components/characters/characters.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SpeciesComponent } from './components/species/species.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { CreditsComponent } from './components/credits/credits.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    CharacterComponent,
    MainMenuComponent,
    CharacterComponent,
    SpeciesComponent,
    PlanetsComponent,
    CreditsComponent,
    FilmsComponent,
    VehiclesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
