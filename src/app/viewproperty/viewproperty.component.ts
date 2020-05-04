import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, NgForm } from '@angular/forms';
import { RegpropserviceService } from '../regpropservice.service';
@Component({
  selector: 'app-viewproperty',
  templateUrl: './viewproperty.component.html',
  styleUrls: ['./viewproperty.component.css']
})
export class ViewpropertyComponent implements OnInit {
  property: Array<any> = []
  constructor(private regpropService: RegpropserviceService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.regpropService.getAllProperties().subscribe((res:any)=>{
      this.property = res.message
    })
  }
}