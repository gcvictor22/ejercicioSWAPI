import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmsResponse } from '../interfaces/film.interface';


const API_BASE_URL = 'https://swapi.dev/api';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) { }

  public getFilms(): Observable<FilmsResponse> {
    return this.http.get<FilmsResponse>(`${API_BASE_URL}/films`)
  }
}
