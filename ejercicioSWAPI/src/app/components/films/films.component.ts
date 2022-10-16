import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Characters } from 'src/app/interfaces/characters.interface';
import { Film } from 'src/app/interfaces/film.interface';
import { FilmsService } from 'src/app/services/films.service';

const URL_IMAGEN = 'https://starwars-visualguide.com/assets/img/films/'

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  filmList : Film[] = [];
  numPages = 0;
  selected = false;

  constructor(private filmService: FilmsService) { }

  ngOnInit(): void {
    this.getFilmPage(1);
  
  }

  getFilmPage(page: number){
    this.filmService.getFilms(page).subscribe( resp => {
      this.filmList = resp.results;
      this.numPages = Math.ceil(resp.count / 10);
    })
  }

  getFilmUrl(film: Film) {
    let id = film.url.split('/')[5];
    return `${URL_IMAGEN}${id}.jpg`
  }

  counter() {
    return new Array(this.numPages);
  }

}
