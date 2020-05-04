import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators ,FormArray, NgForm } from '@angular/forms';
import { RegpropserviceService } from '../regpropservice.service';

@Component({
  selector: 'app-regproperty',
  templateUrl: './regproperty.component.html',
  styleUrls: ['./regproperty.component.css']
})
export class RegpropertyComponent implements OnInit {
  propForm:FormGroup;
  constructor(private formBuilder: FormBuilder,private propService:RegpropserviceService) { }

  ngOnInit() {
    this.createForm()
  }
  createForm(){
    this.propForm = this.formBuilder.group({
      type:['',Validators.required],
      place:['',Validators.required],
      value:['',Validators.required],
      area:['',Validators.required],
      owner:['',Validators.required]
    })
  }
  regprop() {
    this.propService.newproperty(this.propForm.value).subscribe((res:any)=>{
      if(!res.success){
        alert('Error')
      }else {
        alert(res.message)
      }
    })
  }
}
