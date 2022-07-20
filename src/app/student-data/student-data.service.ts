import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
// import { environment } from '../../environments/environment'
import { environment } from '../../environments/environment'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {
  StudentDataService: any;

  constructor(private http:HttpClient) { }

  getSportsList()
  {
    return this.http.get(environment.studentAssessmentsApiUrl+'sports-list')
  }

  getStudentsList(course_id :any)
  {
    return this.http.get(environment.studentAssessmentsApiUrl + 'course-students-list/'+course_id); 
  }
 
}
