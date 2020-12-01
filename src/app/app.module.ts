import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewsDatabaseService } from 'src/news.database.service';
import { SettingsComponent } from './components/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NewsDatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
