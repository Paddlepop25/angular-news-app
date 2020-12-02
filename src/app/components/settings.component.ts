import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ID_APIKEY } from 'src/models';
import { NewsDatabaseService } from 'src/news.database.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  newsform: FormGroup

  constructor(private fb: FormBuilder, private newsDB: NewsDatabaseService) { }

  ngOnInit(): void {
    this.newsform = this.fb.group({
      key: this.fb.control('', [ Validators.required ])
    })
  }

  // ApiKey references to models.ts, the parameters saved below must match the model properties (id, apikey)
  async addKeyToDatabase() {
      await this.newsDB.saveApiKey(ID_APIKEY, this.newsform.get('key').value)
      console.info('api key added to database')
  }

  async deleteKeyFromDatabase() {
    await this.newsDB.deleteApiKey(ID_APIKEY)
    console.info('api key has been deleted from database')
  }
}
