import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CivicService } from './services/civic.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { OfficialComponent } from './officials/official/official.component';
import { DivisionComponent } from './division/division/division.component';
import { OfficeListComponent } from './offices/office-list/office-list.component';
import { SocialComponent } from './social/social.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    MainComponent,
    OfficialComponent,
    DivisionComponent,
    OfficeListComponent,
    SocialComponent,
  ],
  providers: [ CivicService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
