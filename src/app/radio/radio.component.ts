import { Component, OnInit } from '@angular/core';
import { Radio } from './radio';
import { FormsModule } from '@angular/forms';
import RadioData from "../data/db.json";

@Component({
  standalone: true,
  imports: [FormsModule],
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {
  title = "Radio Singular";
  placeHolder = "Escribe el nombre de la emisora";
  searchF = false;
  radioStations: Radio[] = [];
  inputValue !: string ;
  filteredSearch!: Radio[];

  ngOnInit(): void {
    this.radioStations = RadioData;
  }

  search() {
    
    this.filteredSearch = this.radioStations.filter((radio:Radio) => 
      radio.name.includes(this.inputValue)
      
    )
  }
}
