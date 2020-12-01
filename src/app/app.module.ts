import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewsDatabaseService } from 'src/news.database.service';
import { SettingsComponent } from './components/settings.component';

const ROUTES: Routes = [
  { path: '', component: SettingsComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
 ]

 
@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent
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
