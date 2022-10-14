import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpeciesResponse } from '../interfaces/species.interface';

const API_BASE_URL = 'https://swapi.dev/api'
@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(private http: HttpClient) { }

  public specieList(numeroPagina : number): Observable<SpeciesResponse>{
    return this.http.get<SpeciesResponse>(`${API_BASE_URL}/species/?page=${numeroPagina}`)
  }

  public getSpecie(id: string) {
    return this.http.get(`${API_BASE_URL}/species`)
  }
}