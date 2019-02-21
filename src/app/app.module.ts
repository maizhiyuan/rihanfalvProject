import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { CollectionComponent } from './components/user/collection/collection.component';
import { LawComponent } from './components/law/law.component';
import { ThesisComponent } from './components/thesis/thesis.component';
import { CaseComponent } from './components/case/case.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CollectionComponent,
    LawComponent,
    ThesisComponent,
    CaseComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
