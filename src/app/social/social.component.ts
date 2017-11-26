import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

	@Input() type: string;
	@Input() id: string;

  constructor() { }

  ngOnInit() {
  }

}
