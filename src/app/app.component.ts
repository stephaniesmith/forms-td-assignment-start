import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('signupForm') sgnForm: NgForm;
  selectedSubscription: 'advanced';


  onSubmit() {
    console.log('hello');
    console.log(this.sgnForm.value);
  }

}
