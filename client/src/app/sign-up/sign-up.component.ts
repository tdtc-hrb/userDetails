import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../user/user.model';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;

  model: UserModel = new UserModel();

  constructor( private fb: FormBuilder, private userService: UserService ) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group( {
      email: ['', [Validators.required, Validators.email]],
      userName: ['', [Validators.required, Validators.pattern("^[a-z]+[0-9_]*[a-z0-9]*$"),
        Validators.minLength(5),
        Validators.maxLength(15)
      ]]
    });
  }

  onSubmit(form: FormGroup): void {
    this.model.email = form.value.email;
    this.model.userName = form.value.userName;
    this.model.name = "";
    this.model.userId = 1;
  
    this.userService.postUser(this.model).subscribe(
        response => {
          console.log(response);
        }
    );

    // Refresh page
    let refreshIntervalId = window.setInterval( 
      function(){ window.location.reload() }, 
      1000
    );

  }

}
