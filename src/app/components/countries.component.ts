import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CountryList } from 'src/models';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})

export class CountriesComponent implements OnInit {

  countryList: any[] = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // top headline countries list taken from https://newsapi.org/docs/endpoints/top-headlines
    const countries = "ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za"
    const allCountries = countries.split(" ").join(";")
    // console.log('allCountries ---> ', allCountries)

    // https://restcountries.eu/rest/v2/alpha?codes=ae;il;etc..
    const base_url = 'https://restcountries.eu/rest/v2/alpha'
    const countriesParams = new HttpParams().set('codes', allCountries)

    this.http.get<any>(base_url, { params: countriesParams })
      .toPromise()
      .then(response => {
        const resultsOfCountries = response as any[] // type as array as this.countryList is array
        // console.log('resultsOfCountries ---> ', resultsOfCountries)

      // return just the properties you want, according to CountryList in models.ts
        this.countryList = resultsOfCountries.map(country => {
          return {
            name: country['name'],
            alpha2Code: country['alpha2Code'],
            flag: country['flag']
          } as CountryList
        })
        // console.log('this.countryList ---> ', this.countryList)
      })
  }
}