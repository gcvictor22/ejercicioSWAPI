import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/interfaces/vehicles.interface';
import { VehiclesService } from 'src/app/services/vehicles.service';

const URL_IMAGEN = 'https://starwars-visualguide.com/assets/img/vehicles/'


@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  
  vehicleList: Vehicle[] = [];
  numPages = 0;
  selected =  false;

  constructor(private vehicleService: VehiclesService) { }

  ngOnInit(): void {
    this.getVehiclePage(1)
  }

  getVehiclePage(page : number){
    this.vehicleService.getVehicleList(page).subscribe(resp => {
      this.vehicleList = resp.results
      this.numPages = Math.ceil(resp.count / 10);
    })
  }

  getObjetoUrl(objeto: Vehicle) {
    let id = objeto.url.split('/')[5];
    return `${URL_IMAGEN}${id}.jpg`
  }

  counter(){
    return new Array(this.numPages);
  }

}
