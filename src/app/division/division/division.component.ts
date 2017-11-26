import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {

	@Input() name;
	@Input() officials;

  constructor() { }

  ngOnInit() {
  }

}
