import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  newsform: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.newsform = this.fb.group({
      key: this.fb.control('', [ Validators.required ])
    })
  }


}
