import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StarshipResponse } from '../interfaces/starship.interface';

const API_BASE_URL = 'https://swapi.dev/api'

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  constructor(private http: HttpClient) { }

public getStarshipsList(numPage: number): Observable<StarshipResponse>{
  return this.http.get<StarshipResponse>(`${API_BASE_URL}/starships/?page=${numPage}`)
}

public getStarships(id: string){
  return this.http.get(`${API_BASE_URL}/starships/${id}`)
}

}
