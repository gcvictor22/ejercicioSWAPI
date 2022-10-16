import { Component, OnInit } from '@angular/core';
import { Species } from 'src/app/interfaces/species.interface';
import { SpeciesService } from 'src/app/services/species.service';

const URL_IMAGEN = 'https://starwars-visualguide.com/assets/img/species/'
@Component({
  selector: 'species-component',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {
  speciesListado: Species[] = []
  numPages= 0;
  selected=false

  constructor(private speciesService: SpeciesService) { }

  ngOnInit(): void {
    this.getPeoplePage(1)
  }

  getPeoplePage(page : number){
    this.speciesService.specieList(page).subscribe(response => {
      this.speciesListado = response.results
      this.numPages = Math.ceil(response.count / 10);
    })
  }

  getObjetoUrl(objeto: Species) {
    let id = objeto.url.split('/')[5];
    return `${URL_IMAGEN}${id}.jpg`
  }

  counter(){
    return new Array(this.numPages);
  }
  
}