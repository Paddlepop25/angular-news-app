import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ID_APIKEY } from 'src/app/models';
import { NewsDatabaseService } from 'src/app/news.database.service';

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
      key: this.fb.control('', [ Validators.required, Validators.minLength(1) ])
    })
  }

  // ApiKey references to models.ts, the parameters saved below must match the model properties (id, apikey)
  async addKeyToDatabase() {
      await this.newsDB.saveApiKey(ID_APIKEY, this.newsform.get('key').value)
      console.info('api key added to database')
  }

  // now aiming at deleting just 1 key, aiming at the 'ID_APIKEY.' In future implement checking against api key
  async deleteKeyFromDatabase() {
    await this.newsDB.deleteApiKey(ID_APIKEY)
    console.info('api key has been deleted from database')
  }
}
