import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SettingsComponent } from './components/settings.component';
import { CountriesComponent } from './components/countries.component';

import { NewsDatabaseService } from 'src/news.database.service';

const ROUTES: Routes = [
  { path: '', component: SettingsComponent },
  { path: 'countries', component: CountriesComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
 ]

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    CountriesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule, ReactiveFormsModule
  ],
  providers: [NewsDatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
