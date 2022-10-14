import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterResponse } from '../interfaces/characters.interface';

const API_BASE_URL = 'https://swapi.dev/api'
@Injectable({
  providedIn: 'root'
})
export class PeopleServiceService {

  constructor(private http: HttpClient) { }

  public peopleList(numeroPagina : number): Observable<CharacterResponse>{
    return this.http.get<CharacterResponse>(`${API_BASE_URL}/people/?page=${numeroPagina}`)
  }

  public getPeople(id: string) {
    return this.http.get(`${API_BASE_URL}/people`)
  }
}