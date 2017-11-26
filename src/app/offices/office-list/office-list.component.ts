import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'office-list',
  templateUrl: './office-list.component.html',
  styleUrls: ['./office-list.component.css']
})
export class OfficeListComponent implements OnInit {

	@Input() offices;
	@Input() officials;

  constructor() { }

  ngOnInit() {
  }

}
