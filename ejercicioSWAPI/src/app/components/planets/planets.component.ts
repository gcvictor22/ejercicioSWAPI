import { Component, OnInit } from '@angular/core';
import { Planets } from 'src/app/interfaces/planets.interface';
import { Species } from 'src/app/interfaces/species.interface';
import { PlanetsService } from 'src/app/services/planets.service';
import { SpeciesService } from 'src/app/services/species.service';

const URL_IMAGEN = 'https://starwars-visualguide.com/assets/img/planets/'
@Component({
  selector: 'planets-component',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planetsListado: Planets[] = []
  numPages= 0;
  selected=false

  constructor(private planetsService: PlanetsService) { }

  ngOnInit(): void {
    this.getPeoplePage(1)
  }

  getPeoplePage(page : number){
    this.planetsService.planetsList(page).subscribe(response => {
      this.planetsListado = response.results
      this.numPages = Math.ceil(response.count / 10);
    })
  }

  getObjetoUrl(objeto: Planets) {
    let id = objeto.url.split('/')[5];
    return `${URL_IMAGEN}${id}.jpg`
  }

  counter(){
    return new Array(this.numPages);
  }
  
}