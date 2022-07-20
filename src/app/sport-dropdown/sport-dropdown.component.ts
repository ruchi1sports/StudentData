import { Component, OnInit } from '@angular/core';
import {StudentDataService} from '../student-data/student-data.service'
import {StudentDataComponent} from '../student-data/student-data.component'
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-sport-dropdown',
  templateUrl: './sport-dropdown.component.html',
  styleUrls: ['./sport-dropdown.component.scss']
})
export class SportDropdownComponent implements OnInit {
  assesment_id =''

  constructor(private http: HttpClient, private  sportapi : StudentDataService) { }
  

  sportsList: any=[];
  studentsList: any = [];

  ngOnInit(): void {
    this.sportapi.getSportsList().subscribe((resp:any) => {
      console.log(resp);

      resp.data.forEach((value: any, key: any) => {
                       // Your code here
                       //alert('helllo' + value + key)
                        this.sportsList.push(value);

                        
      });

      
      
});
 


  }
  private studentObject:StudentDataComponent = new StudentDataComponent(this.http,this.sportapi);

  onOptionsSelected(value: any ){ 
    this.studentsList = [];
    
this.sportapi.getStudentsList(value).subscribe((resp:any) => {
      console.log(resp);
    if(resp.status == "200" && resp.message != 'no_data'){
      resp.data.forEach((v: any, key: any) => {            
         console.log(v.name)
        this.studentsList.push(v);
     });
    } 
      console.log(this.studentsList);
});
  



  }
}

