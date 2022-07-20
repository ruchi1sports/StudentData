import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {StudentDataService} from '../student-data/student-data.service';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.scss']
})
export class StudentDataComponent implements OnInit {
  studentsList: any = [];
  sportsList: any=[];
  listItems:any;
  listItemsBackUp:any;
  
  // private formBuilder:FormBuilder
  constructor(private http: HttpClient, private api:StudentDataService) { }
  ngOnInit(): void {
    // this.api.getStudentsList(4).subscribe((resp:any) => {
    //         console.log(resp);

    //         resp.data.forEach((value: any, key: any) => {
    //                          // Your code here
    //                           this.studentsList.push(value);
    //         });
    // });

      
  }

  public  getStudentsData(id : any) :any{

    this.studentsList = [];
    
this.api.getStudentsList(id).subscribe((resp:any) => {
      //console.log(resp);

       resp.data.forEach((value: any, key: any) => {
                       // Your code here
                       console.log(value.name)
                       
                        this.studentsList.push(value);
      });

      console.log(this.studentsList);

    });

  }



  // getStudentsData(){

  //   this.api.find({

  //     //where:{isActive: true}

  //   }).toPromise().then((Response: any) => {

  //     this.listItems = [];

  //     Response.map((listResponse: any) => {

  //       this.listItems.push({ name: listResponse.name});

  //     });        

  //     this.listItemsBackUp = this.listItems;

  //   });  

 // }

    

}



 


