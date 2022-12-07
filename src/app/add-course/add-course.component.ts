import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {

  courseTitle=""
  courseDescription=""
  courseDuration=""
  courseDate=""
  courseVenue=""
  constructor(private api:ApiService){}
  readValues=()=>
  {
    let course:any={
      "courseTitle":this.courseTitle,"courseDescription":this.courseDescription,"courseDuration":this.courseDuration,"courseDate":this.courseDate,"courseVenue":this.courseVenue
    }
  console.log(course)
  this.api.addCourse(course).subscribe(
    (response:any)=>{
      console.log(response)
      if (response.status=="success") {
        alert("Successfully Added")
        this.courseTitle=""
        this.courseDescription=""
        this.courseDuration=""
        this.courseDate=""
        this.courseVenue=""
      } 
      else {
        alert("Something went wrong")
      }
    }
  )
  }
}
