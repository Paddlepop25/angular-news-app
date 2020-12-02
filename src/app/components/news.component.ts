import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ID_APIKEY } from 'src/models';
import { NewsDatabaseService } from 'src/news.database.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  alpha2Code = ''
  category = 'general'
  pageSize = 30


  constructor(private activatedRoute: ActivatedRoute, private newsDB: NewsDatabaseService, private http: HttpClient) { }

  ngOnInit(): void {
    this.alpha2Code = this.activatedRoute.snapshot.params['alpha2Code']
    // console.log('this.alpha2Code ---> ', this.alpha2Code)

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
        const newsArticles = response as any []
        console.log('newsArticles ---> ', newsArticles)
      })
  }
}