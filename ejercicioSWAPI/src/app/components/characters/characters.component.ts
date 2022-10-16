import { Component, OnInit } from '@angular/core';
import { Characters } from 'src/app/interfaces/characters.interface';
import { CharactersService } from 'src/app/services/characters.service';

const URL_IMAGEN = 'https://starwars-visualguide.com/assets/img/characters/'
@Component({
  selector: 'characters-component',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharacterComponent implements OnInit {
  peopleListado: Characters[] = []
  numPages= 0;
  selected=false

  constructor(private peopleService: CharactersService) { }

  ngOnInit(): void {
    this.getPeoplePage(1)
  }

  getPeoplePage(page : number){
    this.peopleService.peopleList(page).subscribe(response => {
      this.peopleListado = response.results
      this.numPages = Math.ceil(response.count / 10);
    })
  }

  getObjetoUrl(objeto: Characters) {
    let id = objeto.url.split('/')[5];
    return `${URL_IMAGEN}${id}.jpg`
  }

  counter(){
    return new Array(this.numPages);
  }
}