import Dexie from 'dexie';
import { Injectable } from "@angular/core";
import { ApiKey } from './models';
// import { ApiKey, CountryList, NewsArticle } from './models';

@Injectable()
export class NewsDatabaseService extends Dexie {

  // ApiKey, etc reference to models.ts, primary is of type string
  private apiKeys: Dexie.Table<ApiKey, string> 
  // private countries: Dexie.Table<CountryList, string> 
  // private newsArticles: Dexie.Table<NewsArticle, string> 

  constructor() {
    super('newsDatabase') // save database name as 'newsDatabase'

    // create schema
    this.version(1).stores({
      // stores collection (table) name as 'apiKeys', keeping it same as in models.ts
      apiKeys: 'id',
    })

    this.apiKeys = this.table('apiKeys')
    // this.countries = this.table('countries')
    // this.newsArticles = this.table('newsArticles')
  }

  saveApiKey(id: string, api: string): Promise<string> {
    return this.apiKeys.put({ id, api }) // needs to be object to store the values
  }

  // deletes whatever single key there is in database. in future, check against the specific key
  deleteApiKey(id: string): Promise<any> {
    return this.apiKeys.delete(id) // just aiming for the id
  }
}
