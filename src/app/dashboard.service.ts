import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  baseUrl:any;

  constructor(private httpClient: HttpClient) {
    this.baseUrl=environment.people;

   }

   /**
 *      This is get all the people data
 */
   getCharacterData(){
      let url= this.baseUrl+"/people/";
      return this.httpClient.get(url);
   }
  /**
 *       Get the one CHaracter  data
 */

   getCharacterDataByID(id:number){
    let url= this.baseUrl+"/people/"+id;
    return this.httpClient.get(url);
 }

/**
 *       Get the HomeWorldData  data
 */
 gethomeWorldData(id:number){
  let url= this.baseUrl+"/planets/"+id;
    return this.httpClient.get(url);

 }
 getStaterShipData(id:number){
  let url= this.baseUrl+"/starships/"+id;
    return this.httpClient.get(url);

 }
}
