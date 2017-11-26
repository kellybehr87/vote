import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CivicService {

	private _key = 'AIzaSyDuf-KNrD3L63n8xyib1WFoQpZEMdvqaoo';
	private _baseUrl = 'https://www.googleapis.com/civicinfo/v2/';

  constructor(private http:HttpClient) { }

  searchByAddress(address: string) {
  	let params = new URLSearchParams();
  	params.append('key', this._key);
  	params.append('address', address);

  	let url = this._baseUrl + 'representatives?' + params.toString();
  	return this.http.get(url);
  } 

}
