import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SettingsComponent } from './components/settings.component';
import { CountriesComponent } from './components/countries.component';
import { NewsComponent } from './components/news.component';

import { NewsDatabaseService } from 'src/news.database.service';

const ROUTES: Routes = [
  { path: '', component: SettingsComponent },
  { path: 'countries', component: CountriesComponent },
  { path: 'countries', component: NewsComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
 ]

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    CountriesComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [NewsDatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
