import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { CountryList, ID_APIKEY } from 'src/app/models';
import { NewsDatabaseService } from 'src/app/news.database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})

export class CountriesComponent implements OnInit {

  countryList: any[] = []
  apikey: string = ''

  constructor(private http: HttpClient, private newsDB: NewsDatabaseService, private router: Router) { }

  ngOnInit(): void {
    this.newsDB.getApiKey(ID_APIKEY)
      .then(key => {
        // console.log('key ---> ', key) // can get value
        this.apikey = key
        if (!!key) { // verify true
          return true
        }
        this.router.navigate(['/settings'])
      })

    // top headline countries list taken from https://newsapi.org/docs/endpoints/top-headlines
    const countries = "ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za"
    const allCountries = countries.split(" ").join(";")
    // console.log('allCountries ---> ', allCountries)

    // https://restcountries.eu/rest/v2/alpha?codes=ae;il;etc..
    const base_url = 'https://restcountries.eu/rest/v2/alpha'
    const countriesParams = new HttpParams().set('codes', allCountries)

    /* check if database contains the country list, if it does (via getCountryList()), 
    get info from there, if it doesn't, proceed to make httpcall */

    // whatever you get from DB is a promise (because defined in the DB)
    this.newsDB.getCountries()
      .then(countries => {
        // console.log('countries ---> ', countries)
        let lengthOfCountries = countries.length
        // console.log('lengthOfCountries ---> ', lengthOfCountries)

       if (lengthOfCountries <= 0 ) {
         this.http.get<any>(base_url, { params: countriesParams })
           .toPromise()
           .then(response => {
             const resultsOfCountries = response as any[] // type as array as this.countryList is array
             // console.log('resultsOfCountries ---> ', resultsOfCountries)
     
           // return just the properties you want, according to CountryList in models.ts
           // need to 'return' because arrow function => { }
             return this.countryList = resultsOfCountries.map(country => {
               return {
                 name: country['name'],
                 alpha2Code: country['alpha2Code'].toLowerCase(),
                 flag: country['flag']
               } as CountryList
             })
             // console.log('this.countryList ---> ', this.countryList)        
           })
           .then(data => { // this data contains the this.countryList info
             this.newsDB.saveCountries(data);
           })
           .catch((error: HttpErrorResponse) => { console.log('HttpError ---> ', error) })
       } else {
         this.countryList = countries
       }
    })
    .catch(errors => {
      console.log('errors ---> ', errors)
    })
    // console.log('countryCount ---> ', countryCount) // DexiePromise

  }
}