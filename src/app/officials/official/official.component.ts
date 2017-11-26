import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Official } from '../models/official';

@Component({
  selector: 'official',
  templateUrl: './official.component.html',
  styleUrls: ['./official.component.css']
})
export class OfficialComponent implements OnInit {

	private _official;
	@Input() set official(data: any) {
		this._official = new Official(data);
	};

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() { }

  get official() {
  	return this._official;
  }

  get url() {
    return this.sanitizer.bypassSecurityTrustUrl(`/assets/icons/${ this.official.party.toLowerCase() }-party.svg`);
  }

}
