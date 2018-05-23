import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SkillzGraphComponent } from './skillz-graph/skillz-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillzGraphComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
