import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterResponse } from '../interfaces/characters.interface';
import { PlanetsResponse } from '../interfaces/planets.interface';

const API_BASE_URL = 'https://swapi.dev/api'
@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }

  public planetsList(numeroPagina : number): Observable<PlanetsResponse>{
    return this.http.get<PlanetsResponse>(`${API_BASE_URL}/planets/?page=${numeroPagina}`)
  }

  public getPlanet(id: string) {
    return this.http.get(`${API_BASE_URL}/planets`)
  }
}