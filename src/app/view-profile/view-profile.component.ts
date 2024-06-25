import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent  implements OnInit{
  panelOpenState = true;
  name:any
  height:any
  mass:any
  hair_color:any
  skin_color:any 
  eye_color :any
  birth_year:any
  gender:any
  homeworldData:any;
  homePersonName:any;
  rotationPeriod:any;
  startupShip:any;
  diameter:any;
  dessert:any;
  peopleData:any


  //Home World Data
  birthYear:any
  eyeColor:any;
  genderHome:any;
  hairColor:any



viewData:any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute,private httpClient: HttpClient,private dashboardService:DashboardService){
    this.activatedRoute.params.subscribe((res)=>{
      this.viewData=res;
      let newData =this.viewData['url'];
      let homeData=this.viewData['homeworld'];
      let starterShipData=this.viewData['starships'];
      this.peopleData=newData.split("people/");
      this.homeworldData=homeData.split("planets/");
       this.startupShip  =starterShipData.split("starships/");
     
      
    })

  }
  ngOnInit(): void {
    //get the intial data fromt the api
    this.getCharacterData();
    this.getHomeWorldData();
    this.getStartupShipData();
  }
  
  

  /**
   * This Method is used to getCharacter Data
   */
  getCharacterData(){
         this.dashboardService.getCharacterDataByID(this.peopleData[1]).subscribe(res =>{
               let data =res;
               this.parsedResponse(data);

               
         })
  }
  parsedResponse(res:any){
    console.log(JSON.stringify(res));
      this.birthYear=res['name'];
      this.eye_color=res['eye_color'];
      this.mass=res['mass'];
      this.birth_year=res['birth_year'];
  
    }
  
/**
 * This is method is used to get HomeWorldata
 */

  getHomeWorldData(){
      this.dashboardService.getCharacterDataByID(this.homeworldData[1]).subscribe(res =>{
        let data =res;
        this.parsedResponseCharacter(data);

        
  })

  }
  parsedResponseCharacter(data:any){
    console.log(data);
    this.birthYear=data['birth_year'];
    this.eyeColor=data['eye_color'];
    this.genderHome=data['gender'];
    this.hairColor=data['hair_color'];
    

  }

/**
 * This emthiod is used to get the Startup ship data
 */
  getStartupShipData(){
    this.dashboardService.getStaterShipData(this.startupShip[1]).subscribe(res =>{
      let data =res;
      this.parsedResponseStarter(data);

      
})

  }

  parsedResponseStarter(data:any){
        console.log(data);
        
  }



}


