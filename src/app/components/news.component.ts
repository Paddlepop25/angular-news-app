import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ID_APIKEY, NewsArticle } from 'src/models';
import { NewsDatabaseService } from 'src/news.database.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  alpha2Code: string = ''
  category: string = 'general'
  pageSize: number = 30
  newsArticles: any[] = []
  api: string = ''
  country: string = ''


  constructor(private activatedRoute: ActivatedRoute, private newsDB: NewsDatabaseService, private http: HttpClient) { }

  ngOnInit(): void {
    this.alpha2Code = this.activatedRoute.snapshot.params['alpha2Code']
    // console.log('this.alpha2Code ---> ', this.alpha2Code)

    this.newsDB.getCountry(this.alpha2Code)
      .then(country => {
        console.log(country['name'])
        this.country = country['name']
      })
    console.log('this.country ---> ', this.country)

    // https://newsapi.org/v2/top-headlines?category=general&pageSize=30&country=sg
    const base_url = 'https://newsapi.org/v2/top-headlines'
    let newsParams = new HttpParams()
      .set('country', this.alpha2Code)
      .set('category', this.category)
      .set('pageSize', `${this.pageSize}`) // because can't do with string '30'

    let api = ''
    
    this.newsDB.getApiKey(ID_APIKEY) // DexiePromise, must .then() to get value
      .then(key => {
        console.log('key ---> ', key) // can get value
        return api = key // not passing this key to api on line 32
      })
      .catch(errors => {
        console.log('errors ---> ', errors)
      })
      console.log('api ---> ', api)

    const newsHeaders = (new HttpHeaders()).set('X-Api-Key', api)

    this.http.get<any>(base_url, { params: newsParams, headers: newsHeaders })
      .toPromise()
      .then(response => {
        const news = response as any []
        // console.log('news ---> ', news['articles'])

        const timestamp = Date.now()
        return this.newsArticles = news['articles'].map(article => {
          return {
            saved: false,
            countryCode: this.alpha2Code,
            timestamp: timestamp,
            source: article['source'],
            author: article['author'],
            title: article['title'],
            description: article['description'],
            url: article['url'],
            urlToImage: article['urlToImage'],
            publishedAt: article['publishedAt'],
            content: article['content']
          } as NewsArticle
        })
      })
      .then(data => {
        this.newsDB.saveNewsArticles(data) // magic happens here
        this.newsArticles = data
        console.log('this.newsArticles ---> ', this.newsArticles)
      })
      .catch((error: HttpErrorResponse) => { console.log('HttpError ---> ', error) })
  }
}
