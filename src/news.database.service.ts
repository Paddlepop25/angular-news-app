import Dexie from 'dexie';
import { Injectable } from "@angular/core";
import { ApiKey, CountryList, NewsArticle } from './models';

@Injectable()
export class NewsDatabaseService extends Dexie {

  // ApiKey reference to models.ts, primary is of type string
  private apiKeys: Dexie.Table<ApiKey, string> 
  private countries: Dexie.Table<CountryList, string> 
  private newsArticles: Dexie.Table<NewsArticle, string> 

  constructor() {
    super('newsDatabase') // save database name as 'newsDatabase'

    // create schema
    this.version(1).stores({
      // stores collection (table) name as 'apiKeys', keeping it same as in models.ts
      apiKeys: 'id',
    })

    this.apiKeys = this.table('apiKeys')
    this.countries = this.table('countries')
    this.newsArticles = this.table('newsArticles')
  }
}
