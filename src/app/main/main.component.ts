import { Component, OnInit } from '@angular/core';
import { CivicService } from '../services/civic.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	address: string;
	result;
  divisions = [];
  offices = {};

  constructor(private civic:CivicService) { }

  ngOnInit() {}

  search() {
  	this.civic.searchByAddress(this.address).subscribe(result => this.parseResults(result));
  }

  parseResults(results) {
    this.result = results;
    this.divisions = [];
    this.offices = {};
    let d = Object.entries(results.divisions);
    for(let div of d) {
      let temp = div[1];
      temp.id = div[0];
      this.divisions.push(temp);
      this.offices[temp.id] = results.offices.filter(office => office.divisionId == temp.id);
    }
  }

}
