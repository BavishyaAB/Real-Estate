import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators , FormBuilder , FormArray, NgForm } from '@angular/forms';
import { RegserviceService } from '../regservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regForm:FormGroup;
  constructor(private formBuilder: FormBuilder,private regService: RegserviceService) { }
  
  ngOnInit() {
    this.createForm()
  }
  createForm() {
    this.regForm = this.formBuilder.group({
      name:['',Validators.required],
      contno:['',Validators.required],
      addr:['',Validators.required],
      email:['',Validators.required],
      passwd:['',Validators.required],
      cpasswd:['',Validators.required],
    });
  }
  onSubmit() {
    if(this.regForm.value.cpasswd == this.regForm.value.passwd){
      this.regService.registerUser(this.regForm.value).subscribe((res:any)=>{
        if(res.error){
          alert('An Error Occured')
        } else {
          alert(res.message)
        }
      })
    }
}
}
