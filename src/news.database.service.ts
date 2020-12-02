import Dexie from 'dexie';
import { Injectable } from "@angular/core";
import { ApiKey, CountryList, NewsArticle } from './models';

@Injectable()
export class NewsDatabaseService extends Dexie {

  // ApiKey, etc reference to models.ts, primary 'Key path' is of type string
  private apiKeys: Dexie.Table<ApiKey, string> 
  private countries: Dexie.Table<CountryList, string> 
  private newsArticles: Dexie.Table<NewsArticle, string> 

  constructor() {
    super('newsDatabase') // save database name as 'newsDatabase'

    // create schema
    this.version(1).stores({
      // stores collection (table) name as 'apiKeys', keeping it same as in models.ts
      apiKeys: 'id',
      countries: 'alpha2Code',
      newsArticles: 'publishedAt, countryCode'
    })

    this.apiKeys = this.table('apiKeys')
    this.countries = this.table('countries')
    this.newsArticles = this.table('newsArticles')
  }

  // always return PROMISE from database to make sure things are working first before using in other components

  // can't use .add method because the id not unique. this saves 1 key only. change to incremented id number for more (?)
  saveApiKey(id: string, api: string): Promise<string> {
    return this.apiKeys.put({ id, api }) // needs to be object to store the values
  }

  // deletes whatever single key there is in database. in future, check against the specific key
  deleteApiKey(id: string): Promise<any> {
    return this.apiKeys.delete(id) // just aiming for the id, delete whatever api key there is
  }

  getApiKey(id: string): Promise<string> {
    return this.apiKeys.get(id).then(key => {
      if (!!key) { // verify it to be true
        return key.api
      }
      return '' // if no key present, return empty string
    })
  }

  getCountries(): Promise<CountryList[]> {
    return this.countries.toArray()
  }

  saveCountries(countries: CountryList[]): Promise<any> {
    return this.countries.bulkPut(countries) // Dexie docs - bulkPut(items: Array): Promise;
  }

  saveNewsArticles(articles: NewsArticle[]): Promise<any> {
    return this.newsArticles.bulkPut(articles)
  }


}