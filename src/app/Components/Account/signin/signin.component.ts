import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor() { }
  signInData = new FormGroup( {
       email : new FormControl('', Validators.required),
       pass : new FormControl('', Validators.required)
    }
  );

  ngOnInit() {
  }

}