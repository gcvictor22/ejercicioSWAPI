import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleResponse } from '../interfaces/vehicles.interface';

const API_BASE_URL = 'https://swapi.dev/api'

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private http: HttpClient) { }

  public getVehicleList(numPage : number): Observable<VehicleResponse>{
    return this.http.get<VehicleResponse>(`${API_BASE_URL}/vehicles/?page=${numPage}`)
  }

  public getPeople(id: string) {
    return this.http.get(`${API_BASE_URL}/vehicles`)
  }
}
