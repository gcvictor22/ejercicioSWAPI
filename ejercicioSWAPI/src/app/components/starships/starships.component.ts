import { Component, OnInit } from '@angular/core';
import { Starship } from 'src/app/interfaces/starship.interface';
import { StarshipService } from 'src/app/services/starship.service';


const URL_IMAGEN = 'https://starwars-visualguide.com/assets/img/starships/'

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {
  
  starshipsList: Starship[] = [];
  numPage = 0;
  selected = false;

  constructor(private starshipService: StarshipService) { }

  ngOnInit(): void {
    this.getStarshipPage(1);
  }

  getStarshipPage(page: number){
    this.starshipService.getStarshipsList(page).subscribe(resp => {
      this.starshipsList = resp.results;
      this.numPage = Math.ceil(resp.count /10);
    })
  }

  getStarshipPhoto(starship: Starship) {
    let id = starship.url.split('/')[5];
    return `${URL_IMAGEN}${id}.jpg`
  }

  counter(){
    return new Array(this.numPage);
  }

  

}
