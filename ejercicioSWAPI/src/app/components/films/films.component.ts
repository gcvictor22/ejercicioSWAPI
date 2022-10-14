import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/interfaces/film.interface';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  filmList : Film[] = [];

  constructor(private filmService: FilmsService) { }

  ngOnInit(): void {
    this.filmService.getFilms().subscribe(resp => {
      this.filmList = resp.results;
    })
  
  }

}
