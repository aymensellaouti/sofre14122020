import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-test-reactive-form',
  templateUrl: './test-reactive-form.component.html',
  styleUrls: ['./test-reactive-form.component.css'],
})
export class TestReactiveFormComponent implements OnInit {
  profileGroupForm = new FormGroup({
    name: new FormControl('sellaouti'),
    firstname: new FormControl('aymen'),
  });
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.fb.array([this.fb.control('')]),
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  processForm() {
    console.log(this.profileGroupForm);
  }
}
